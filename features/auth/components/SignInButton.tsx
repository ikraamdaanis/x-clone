"use client";

import { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

/** Button to sign in via Github. */
export const SignInButton = () => {
  async function handleClick() {
    const supabase = createClientComponentClient<Database>();
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:1444/auth/callback"
      }
    });
  }

  return (
    <button
      className="rounded-full bg-twitterColor p-2 text-center font-semibold transition duration-200"
      onClick={handleClick}
    >
      Sign In
    </button>
  );
};
