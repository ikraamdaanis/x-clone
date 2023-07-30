import { Sidebar } from "@/components/Sidebar";
import { Timeline } from "@/components/Timeline";

export default function Home() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black">
      <div className="relative flex h-full w-full max-w-screen-xl items-center">
        <Sidebar />
        <Timeline />
      </div>
    </div>
  );
}
