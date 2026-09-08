"use client";
import { GoHomeFill } from "react-icons/go";
import { BsTrophyFill } from "react-icons/bs";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { PiSoccerBallFill } from "react-icons/pi";
import { TfiMoreAlt } from "react-icons/tfi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PopupMenu from "./PopupMenu";
import { useState } from "react";
import { Modal } from "./ui/Modal";

export function NavBottom() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (route: string) => pathname === route;

  const baseClass = "flex flex-col p-1 items-center rounded-md transition";

  const activeClass = "text-white bg-[#06fc7521] border border-[#ffffff8e]";

  const inactiveClass = "text-[#8e9a96]";

  return (
    <div className="bg-[url('https://t4.ftcdn.net/jpg/09/24/25/73/360_F_924257314_9SS11wm6mf3s9uWMg8pZuCBNveZb3Xy2.jpg')] w-full items-center justify-between px-4 py-1 flex fixed bottom-0">
      <Modal open={open} onOpenChange={setOpen}>
        <PopupMenu />
      </Modal>
      <Link
        href="/"
        className={`${baseClass} ${
          isActive("/") ? activeClass : inactiveClass
        }`}
      >
        <GoHomeFill />
        <p className="text-sm">Home</p>
      </Link>

      <div className="w-px h-9 bg-gray-500"></div>

      <Link
        href="/ranking"
        className={`${baseClass} ${
          isActive("/ranking") ? activeClass : inactiveClass
        }`}
      >
        <BsTrophyFill />
        <p className="text-sm">Ranking</p>
      </Link>

      <div className="w-px h-9 bg-gray-500"></div>

      <Link
        href="/jogos"
        className={`${baseClass} ${
          isActive("/jogos") ? activeClass : inactiveClass
        }`}
      >
        <BsCalendar2CheckFill />
        <p className="text-sm">Jogos</p>
      </Link>

      <div className="w-px h-9 bg-gray-500"></div>

      <Link
        href="/times"
        className={`${baseClass} ${
          isActive("/times") ? activeClass : inactiveClass
        }`}
      >
        <PiSoccerBallFill />
        <p className="text-sm">Times</p>
      </Link>

      <div className="w-px h-9 bg-gray-500"></div>

      <div
        onClick={() => setOpen(true)}
        className={`${baseClass} ${
          isActive("/mais") ? activeClass : inactiveClass
        }`}
      >
        <TfiMoreAlt />
        <p className="text-sm">Mais</p>
      </div>
    </div>
  );
}
