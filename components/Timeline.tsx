import { ComposeTweet } from "@/features/tweets/components/ComposeTweet";

/** X Timeline */
export const Timeline = async () => {
  return (
    <main className="flex h-full min-h-screen w-full flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
      <h1 className="sticky top-0 bg-black/10 p-6 text-xl font-bold backdrop-blur">
        Home
      </h1>
      <div className="relative flex items-stretch space-x-2 border-b-[0.5px] border-t-[0.5px] border-gray-600 px-4 py-6"></div>
      <div className="w-full">
        <ComposeTweet />
      </div>
    </main>
  );
};
