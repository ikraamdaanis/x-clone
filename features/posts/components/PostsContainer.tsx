"use client";

/** Container for Posts in the Timeline. */
import { SinglePost } from "@/features/posts/components/SinglePost";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useEffect, experimental_useOptimistic as useOptimistic } from "react";

export const PostsContainer = ({ posts }: { posts: PostWithAuthor[] }) => {
  const router = useRouter();

  const [optimisticPosts, addOptimisticPost] = useOptimistic<
    PostWithAuthor[],
    PostWithAuthor
  >(posts, (currentPosts, newPost) => {
    const newPosts = [...currentPosts];
    const index = newPosts.findIndex(post => post.id === newPost.id);
    newPosts[index] = newPost;

    return newPosts;
  });

  const supabase = createClientComponentClient<Database>();

  useEffect(() => {
    const channel = supabase
      .channel("realtime-posts")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "posts"
        },
        () => {
          router.refresh();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [router, supabase]);

  return (
    <div className="flex flex-col">
      {optimisticPosts
        ?.sort((a, b) =>
          dayjs(b.created_at).isAfter(dayjs(a.created_at)) ? 1 : -1
        )
        ?.map(post => {
          return (
            <SinglePost
              key={post.id}
              post={post}
              addOptimisticPost={addOptimisticPost}
            />
          );
        })}
    </div>
  );
};
