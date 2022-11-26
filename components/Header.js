import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  CheckBadgeIcon,
  FolderIcon,
  HomeIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="Trending" Icon={BoltIcon} />
        <HeaderItem title="Verified" Icon={CheckBadgeIcon} />
        <HeaderItem title="Collections" Icon={FolderIcon} />
        <HeaderItem title="Search" Icon={MagnifyingGlassIcon} />
        <HeaderItem title="Account" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt="/"
      />
    </header>
  );
}
