import { ComposePost } from "@/features/posts/components/ComposePost";
import { Post } from "@/features/posts/components/Post";
import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import dayjs from "dayjs";
import { cookies } from "next/headers";

/** X Timeline */
export const Timeline = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: posts } = await supabase.from("posts").select("*, profiles(*)");

  return (
    <main className="flex h-full min-h-screen w-full max-w-[600px] flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
      <h1 className="sticky top-0 border-b-[0.5px] border-gray-600 bg-black/10 p-6 text-xl  font-bold  backdrop-blur">
        Home
      </h1>
      <div className="relative flex items-stretch space-x-2 border-b-[0.5px] border-gray-600 px-4 py-6"></div>
      <div className="w-full">
        <ComposePost />
        <div className="flex flex-col">
          {posts
            ?.sort((a, b) =>
              dayjs(b.created_at).isAfter(dayjs(a.created_at)) ? 1 : -1
            )
            ?.map(post => {
              return <Post key={post.id} post={post} />;
            })}
        </div>
      </div>
    </main>
  );
};
