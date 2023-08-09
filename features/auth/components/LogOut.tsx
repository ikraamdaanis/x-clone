"use client";

import { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

/** Button to sign out the user. */
export const LogOutButton = () => {
  const router = useRouter();

  async function handleClick() {
    const supabase = createClientComponentClient<Database>();
    await supabase.auth.signOut();

    router.refresh();
  }

  return (
    <button
      className="rounded-full bg-twitterColor p-2 text-center font-bold transition duration-200"
      onClick={handleClick}
    >
      Log out
    </button>
  );
};
