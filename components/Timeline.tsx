import { ComposePost } from "@/features/posts/components/ComposePost";
import { PostsContainer } from "@/features/posts/components/PostsContainer";
import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

/** X Timeline */
export const Timeline = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session }
  } = await supabase.auth.getSession();

  const { data } = await supabase
    .from("posts")
    .select("*, author: profiles(*), likes(*)");

  const posts =
    data?.map(post => {
      return {
        ...post,
        author: Array.isArray(post.author) ? post.author[0] : post.author,
        user_has_liked_tweet: !!post.likes.find(
          like => like.user_id === session?.user.id
        ),
        likes: post.likes.length
      };
    }) ?? [];

  return (
    <main className="flex h-full min-h-screen w-full max-w-[600px] flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
      <h1 className="sticky top-0 border-b-[0.5px] border-gray-600 bg-black/10 p-6 text-xl  font-bold  backdrop-blur">
        Home
      </h1>
      <div className="relative flex items-stretch space-x-2 border-b-[0.5px] border-gray-600 px-4 py-6"></div>
      <div className="w-full">
        <ComposePost />
        <PostsContainer posts={posts} />
      </div>
    </main>
  );
};
