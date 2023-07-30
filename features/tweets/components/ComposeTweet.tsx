import React from "react";

/** Form to create a Tweet */
export const ComposeTweet = () => {
  return (
    <div className="border-b border-gray-600 p-2">
      <div className="h-11 w-11 flex-none rounded-full bg-slate-400"></div>
      <div className="flex w-full flex-col gap-2">
        <div>
          <input
            type="text"
            className="h-full w-full border-none bg-transparent p-2 placeholder-gray-600 outline-none"
            placeholder="What's happening?!"
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
      </div>
    </div>
  );
};
