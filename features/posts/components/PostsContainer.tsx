/** Container for Posts in the Timeline. */
import { SinglePost } from "@/features/posts/components/SinglePost";
import dayjs from "dayjs";
import { experimental_useOptimistic as useOptimistic } from "react";

export const PostsContainer = ({ posts }: { posts: PostWithAuthor[] }) => {
  const [optimisticState, addOptimisticState] = useOptimistic<
    PostWithAuthor[],
    PostWithAuthor
  >(posts, (currentPosts, newPost) => {
    const newPosts = [...currentPosts];
    const index = newPosts.findIndex(post => post.id === newPost.id);
    newPosts[index] = newPost;

    return newPosts;
  });

  return (
    <div className="flex flex-col">
      {posts
        ?.sort((a, b) =>
          dayjs(b.created_at).isAfter(dayjs(a.created_at)) ? 1 : -1
        )
        ?.map(post => {
          return <SinglePost key={post.id} post={post} />;
        })}
    </div>
  );
};
