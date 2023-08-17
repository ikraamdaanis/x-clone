import { Database } from "@/types/supabase";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import React from "react";

/** Form to create a Post */
export const ComposePost = () => {
  async function addPost(formData: FormData) {
    "use server";

    const title = formData.get("title")?.toString() || "";

    const supabase = createServerActionClient<Database>({ cookies });
    const {
      data: { user }
    } = await supabase.auth.getUser();

    if (user) {
      await supabase.from("posts").insert({ title: title, user_id: user.id });
    }

    revalidatePath("/");
  }

  return (
    <div className="flex gap-2 border-b-[0.5px] border-gray-600 p-2">
      <div className="h-11 w-11 flex-none rounded-full bg-slate-400"></div>
      <form action={addPost} className="flex w-full flex-col gap-2">
        <div>
          <input
            type="text"
            name="title"
            className="h-full w-full border-none bg-transparent py-2 placeholder-gray-600 outline-none"
            placeholder="What's happening?!"
            required
            minLength={1}
          />
        </div>
        <div className="flex w-full items-center justify-between">
          <div></div>
          <div className="flex w-full justify-end">
            <button className="text-md rounded-full bg-twitterColor p-4 py-2 text-center font-semibold transition duration-200 hover:bg-opacity-70">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
