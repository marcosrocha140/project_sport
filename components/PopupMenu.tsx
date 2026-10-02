"use client";
import { IoIosArrowForward } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosExit } from "react-icons/io";
import { IoMdFootball } from "react-icons/io";
import { MdPeopleAlt } from "react-icons/md";
import { ImTrophy } from "react-icons/im";
import { PiRankingFill } from "react-icons/pi";
import { FaRankingStar } from "react-icons/fa6";
import { BsFillGearFill } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";
import { ModalConfirm } from "@/components/ui/ModalConfirm";
import ButtonLogout from "./ui/ButtonLogout";
import Link from "next/link";
import { useState, useEffect } from "react";
import { requireAuth } from "@/app/lib/auth";

export default function PopupMenu() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function userData() {
      try {
        const response = await fetch("/api/auth/me");

        if (!response.ok) {
          setUser(null);
          return;
        }

        const user = await response.json();
        setUser(user);
      } catch (error) {
        console.error(error);
        setUser(null);
      }
    }

    userData();
  }, []);

  return (
    <div className="absolute left-0 block md:hidden w-full h-full  bg-[url(https://res.cloudinary.com/dq0dfseeu/image/upload/v1790688189/popupBg_ny774f.png)] p-2 top-0 left-0">
      <ul className="font-semibold flex flex-col text-xl gap-2">
        <div className="flex items-center">
          {/* <img
            className="w-16"
            src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1786118197/Logo_zj4dyx.png"
            alt="Logo Sport Interior"
          /> */}
          <div className="flex flex-col">
            <h1 className="text-2xl text-white uppercase">Esporte</h1>
            <p className="text-green-600 text-xs font-medium uppercase italic">
              Interior
            </p>
          </div>
        </div>

        <div className="flex gap-2 text-white">
          <img
            className="w-10 border border-gray-300 rounded-full"
            src={user?.user?.imagem}
            alt="Foto"
          />
          <div className="flex flex-col">
            <div className="flex gap-1 items-center">
              <p className="text-[15px]">{user?.user?.nome}</p>
              <FaCheckCircle className="text-blue-400 bg-white rounded-full text-[10px]" />
            </div>
            <Link href="profile" className="text-xs font-medium text-blue-400">
              Ver perfil
            </Link>
          </div>
        </div>

        <hr className="text-[#ffffff5e]" />

        <p className="text-xs font-medium uppercase text-gray-500">
          Menu de navegação
        </p>

        <Link
          href="#"
          className="flex items-center font-light text-[#f7f7f73d] justify-between p-2 border-b border-[#d1cece44]"
        >
          <ImTrophy />
          <li className="text-base font-light">Indisponível</li>
          <IoIosArrowForward />
        </Link>

        <Link
          href="#"
          className="flex items-center font-light text-[#f7f7f73d] justify-between p-2 border-b border-[#d1cece44]"
        >
          <IoMdFootball />
          <li className="text-base font-light">Indisponível</li>
          <IoIosArrowForward />
        </Link>

        <Link
          href="#"
          className="flex items-center font-light text-[#f7f7f73d] justify-between p-2 border-b border-[#d1cece44]"
        >
          <MdPeopleAlt />
          <li className="text-base">Indisponível</li>
          <IoIosArrowForward />
        </Link>

        <div className="flex items-center font-light text-[#f7f7f73d] justify-between p-2 border-b border-[#d1cece44]">
          <FaRankingStar />
          <li className="text-base">Indisponível</li>
          <IoIosArrowForward />
        </div>

        <div className="flex items-center font-light text-[#f7f7f73d] justify-between p-2 border-b border-[#d1cece44]">
          <PiRankingFill />
          <li className="text-base">Indisponível</li>
          <IoIosArrowForward />
        </div>

        {
          user?.user?.tipo === "Administrador" ? (
            <div className="flex text-sm text-green-300 items-center justify-center py-1 rounded-xs gap-0.5 border bg-[#03331bf5]">
              <RiAdminFill />
              <p>Administração</p>
            </div>
          ) : <></>
        }

        <p className="text-xs font-medium uppercase text-gray-500">
          Configurações
        </p>
        <div className="flex items-center text-gray-300 gap-2 p-2 border-b border-[#d1cece44]">
          <BsFillGearFill />
          <li className="text-base font-medium">Configuração</li>
        </div>

        <div
          className="flex items-center text-gray-300 gap-2 p-2 border-b border-[#d1cece44]"
        >
          <ButtonLogout />
          <li className="text-base font-medium">Sair</li>
        </div>
      </ul>
      <ModalConfirm open={open} onOpenChange={setOpen}>
        <div className="flex flex-col gap-2 text-center">
          <div className="flex items-center gap-1">
            <img
              className="w-12"
              src="https://www.vhv.rs/dpng/d/436-4369332_warning-notification-clip-arts-alert-icon-hd-png.png"
              alt="Logo"
            />
            <h2 className="text-black font-semibold">
              Tem certeza que deseja sair!
            </h2>
          </div>
          <div className="flex justify-between">
            <Link href='/login'>
              <button className="bg-green-600 p-2 rounded-md">Confirmar</button>
            </Link>
            <button className="bg-[#f5050573] text-red-600 font-bold p-2 rounded-md">
              Cancelar
            </button>
          </div>
        </div>

        <hr />
      </ModalConfirm>
    </div>
  );
}
