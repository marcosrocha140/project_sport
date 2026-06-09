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
import { ModalConfirm } from "@/components/ui/ModalConfirm";
import Link from "next/link";
import { useState } from "react";

export default function PopupMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute left-0 block md:hidden w-full h-full  bg-[url(https://www.dropbox.com/scl/fi/mnge3sxeib8w81djdfs1v/popup2.png?rlkey=1tnm1qy7r5c2x9a2r8q3z2xd5&st=psdytx8v&dl=1)] p-2 top-0 left-0">
      <ul className="font-semibold flex flex-col text-xl gap-2">
        <div className="flex items-center">
          <img
            className="w-20"
            src="https://www.dropbox.com/scl/fi/d1yrcme97ehw7xdqaimls/447667706_337883669330952_8306200058527255297_n-removebg-preview.png?rlkey=pzwb8x5qdx2ubq0sed1cicoip&st=rwg43n6n&dl=1"
            alt="Logo Sport Interior"
          />
          <div className="flex flex-col">
            <h1 className="text-2xl text-white uppercase">Sport</h1>
            <p className="text-green-600 text-xs font-medium uppercase italic">
              Interior
            </p>
          </div>
        </div>

        <div className="flex gap-2 text-white">
          <img
            className="w-10 border border-gray-300 rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
            alt="Foto"
          />
          <div className="flex flex-col">
            <div className="flex gap-1 items-center">
              <p className="text-[17px]">Convidado</p>
              <FaCheckCircle className="text-blue-400 bg-white rounded-full text-xs" />
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
          href="/campeonatos"
          className="flex items-center font-light text-[#f7f7f73d] justify-between p-2 border-b border-[#d1cece44]"
        >
          <ImTrophy />
          <li className="text-base font-light">Indisponível</li>
          <IoIosArrowForward />
        </Link>

        <Link
          href="/jogos"
          className="flex items-center font-light text-[#f7f7f73d] justify-between p-2 border-b border-[#d1cece44]"
        >
          <IoMdFootball />
          <li className="text-base font-light">Indisponível</li>
          <IoIosArrowForward />
        </Link>

        <Link
          href="/times"
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

        <div className="flex items-center text-[#ff0101e5] justify-between p-2 border-b border-[#d1cece44]">
          <PiRankingFill />
          <li className="text-base">Indisponível</li>
          <IoIosArrowForward />
        </div>

        <button className="text-blue-950 shadow-2xl bg-green-500 border border-green-300 rounded-md py-1">
          Meu clube
        </button>

        <p className="text-xs font-medium uppercase text-gray-500">
          Configurações
        </p>
        <div className="flex items-center text-gray-300 gap-2 p-2 border-b border-[#d1cece44]">
          <BsFillGearFill />
          <li className="text-base font-medium">Configuração</li>
        </div>

        <div
          onClick={() => setOpen(true)}
          className="flex items-center text-gray-300 gap-2 p-2 border-b border-[#d1cece44]"
        >
          <IoIosExit />
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
