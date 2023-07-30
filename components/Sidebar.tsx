import { Logo } from "@/components/Logo";
import Link from "next/link";
import { BiHomeCircle, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsThreeDots } from "react-icons/bs";
import { HiOutlineHashtag } from "react-icons/hi";

const NAVIGATION_ITEMS = [
  {
    link: "/",
    title: "Home",
    icon: <BiHomeCircle />
  },
  {
    link: "/explore",
    title: "Explore",
    icon: <HiOutlineHashtag />
  },
  {
    link: "/notifications",
    title: "Notifications",
    icon: <BsBell />
  },
  {
    link: "/messages",
    title: "Messages",
    icon: <BsEnvelope />
  },
  {
    link: "/bookmarks",
    title: "Bookmarks",
    icon: <BsBookmark />
  },
  {
    link: "/profile",
    title: "Profile",
    icon: <BiUser />
  }
];

/** The app's sidebar which holds important links */
export const Sidebar = () => {
  return (
    <header className="sticky top-0 flex h-screen flex-col justify-between pl-2">
      <nav className="flex flex-col gap-3 py-2">
        <Link
          className="flex w-fit items-center justify-start space-x-4 rounded-3xl px-4  py-2 text-[20px] font-medium transition duration-200 hover:bg-white/10"
          href="/"
        >
          <Logo fill="#fff" height={24} />
        </Link>
        {NAVIGATION_ITEMS.map(item => (
          <Link
            className="flex w-fit items-center justify-start space-x-4 rounded-3xl py-2 pl-4 pr-6 text-[20px] font-medium transition duration-200 hover:bg-white/10"
            href={item.link || "/"}
            key={item.title}
          >
            <div>{item.icon}</div>
            {item.title !== "X" && <div>{item.title}</div>}
          </Link>
        ))}
        <button className="m-4 rounded-full bg-twitterColor p-4 py-2 text-center text-lg transition duration-200 hover:bg-opacity-70">
          Post
        </button>
      </nav>
      <button className="flex w-full items-center justify-between space-x-2 rounded-full bg-transparent p-4 text-center transition duration-200 hover:bg-white/10">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-full bg-slate-400"></div>
          <div className="text-left text-sm">
            <div className="font-semibold">Ikraam</div>
            <div className="">@ikraamdaanis</div>
          </div>
        </div>
        <div>
          <BsThreeDots />
        </div>
      </button>
    </header>
  );
};
