import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {CheckBadge, FolderIcon, HomeIcon, BoltIcon, MagnifyingGlassIcon, UserIcon} from "@heroicons/react/24/outline"


export default function Header() {
  return (
    <header className="">
<div>
    <HeaderItem title='HOME' Icon={HomeIcon} />
</div>
<Image
className="object-contain"
src="https://links.papareact.com/ua6"
width={200}
height={100}
/>
    </header>
  )
}
