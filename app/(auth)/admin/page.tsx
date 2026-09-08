"use client";
import { FaExpeditedssl, FaGear } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { CgFeed } from "react-icons/cg";
import { IoShieldHalfOutline } from "react-icons/io5";
import { BsCalendar2EventFill } from "react-icons/bs";
import { IoMdTrophy } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { MdOutlineInsertComment, MdAddBox } from "react-icons/md";
import { Modal } from "@/components/ui/Modal";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BiHome } from "react-icons/bi";
import { MdEditSquare } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";

//page administration
export default function AdminPage() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (route: string) => pathname === route;

  const baseClass = "flex flex-col p-1 items-center rounded-md transition";

  const activeClass = "text-white bg-[#06fc7521] border border-[#ffffff8e]";

  const inactiveClass = "text-[#8e9a96]";
  return (
    <main className="flex flex-col gap-3 p-2">
      <Modal open={open} onOpenChange={setOpen}>
        <section className="flex pl-3.5 flex-col gap-2 text-left p-2">
          <div className="flex items-center gap-1">
            <img
              className="w-14"
              src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1786320555/LogoAdmin_qebxwo.png"
              alt="Logo"
            />
            <div>
              <h2 className="font-bold uppercase">Esporte</h2>
              <p className="text-green-600">Interior</p>
            </div>
            <FaExpeditedssl/>
          </div>
          <p className="text-sm text-gray-400 uppercase">Menu de Navegação</p>
          <div className="flex items-center text-[17px] hover:px-2 py-0.5 hover:rounded-sm gap-1.5 hover:text-[#7ddd00] hover:bg-[#54a7073a]">
            <BiHome />
            <p>Dashboard</p>
          </div>

          <div className="flex items-center text-[17px] gap-2.5 text-gray-100 hover:px-2 py-0.5 hover:rounded-sm hover:text-[#7ddd00] hover:bg-[#54a7073a]">
            <IoShieldHalfOutline />
            <p>Clubes</p>
          </div>
          <div className="flex items-center text-[17px] gap-2.5 text-gray-100 hover:px-2 py-0.5 hover:rounded-sm hover:text-[#7ddd00] hover:bg-[#54a7073a]">
            <BsCalendar2EventFill />
            <p>Jogos</p>
          </div>

          <div className="flex items-center text-[17px] gap-2.5 text-gray-100 hover:px-2 py-0.5 hover:rounded-sm hover:text-[#7ddd00] hover:bg-[#54a7073a]">
            <IoMdTrophy />
            <p>Torneios</p>
          </div>

          <div className="flex items-center text-[17px] gap-2.5 text-gray-100 hover:px-2 py-0.5 hover:rounded-sm hover:text-[#7ddd00] hover:bg-[#54a7073a]">
            <MdEditSquare />
            <p>Posts</p>
          </div>

          <div className="flex items-center text-[17px] gap-2.5 text-gray-100 hover:px-2 py-0.5 hover:rounded-sm hover:text-[#7ddd00] hover:bg-[#54a7073a]">
            <FaUserGroup />
            <p>Usuários</p>
          </div>
          <div className="flex items-center text-[17px] gap-2.5 text-[#ffffff49]">
            <FaGear />
            <p>Configuração</p>
          </div>
          
        </section>
      </Modal>
      <div className="flex items-center justify-between border-b border-gray-400">
        <IoMdMenu
          onClick={() => setOpen(true)}
          className={`text-2xl ${baseClass} ${
            isActive("/mais") ? activeClass : inactiveClass
          }`}
        />
        <img
          className="w-16"
          src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1786320555/LogoAdmin_qebxwo.png"
          alt="Logo"
        />
        <div className="flex flex-col items-center">
          <img
            className="w-12 rounded-full borderq"
            src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1786117781/mr_r5o0ia.png"
            alt="Foto"
          />
          <p className="text-gray-4002">Marcos R</p>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <p className="text-gray-400">Bem vindo ao painel administrativo</p>
      </div>
      <section className="grid grid-cols-3 gap-0.5">
        <div className="flex items-center gap-1 p-2 rounded-md bg-[#2e2e2ec4]">
          <CgFeed className="text-2xl text-[#fd9800]" />
          <div>
            <p className="text-gray-400 text-[14px] uppercase">Posts</p>
            <h2 className="text-2xl">0</h2>
          </div>
        </div>

        <div className="flex items-center gap-1 p-2 rounded-md bg-[#2e2e2ec4]">
          <IoShieldHalfOutline className="text-green-600 text-2xl" />
          <div>
            <p className="text-gray-400 text-[14px] uppercase">Clubes</p>
            <h2 className="text-2xl">0</h2>
          </div>
        </div>

        <div className="flex items-center gap-1 p-2 rounded-md bg-[#2e2e2ec4]">
          <BsCalendar2EventFill className="text-2xl text-[#a1970c]" />
          <div>
            <p className="text-gray-400 text-[14px] uppercase">Jogos</p>
            <h2 className="text-2xl">0</h2>
          </div>
        </div>

        <div className="flex items-center gap-1 p-2 rounded-md bg-[#2e2e2ec4]">
          <IoMdTrophy className="text-2xl text-[#ffa909]" />
          <div>
            <p className="text-gray-400 text-[14px] uppercase">Torneios</p>
            <h2 className="text-2xl">0</h2>
          </div>
        </div>

        <div className="flex items-center gap-1 p-2 rounded-md bg-[#2e2e2ec4]">
          <FaUserGroup className="text-2xl text-[#dfaf57]" />
          <div>
            <p className="text-gray-400 text-[14px] uppercase">Usuários</p>
            <h2 className="text-2xl">0</h2>
          </div>
        </div>
        <div className="flex items-center gap-1 p-2 rounded-md bg-[#2e2e2ec4]">
          <MdAddBox className="text-2xl text-[#57c4df]" />
          <div>
            <p className="text-gray-400 text-[14px] uppercase">Adicionar</p>
            <h2 className="text-2xl"></h2>
          </div>
        </div>
      </section>

      <section className="bg-[#2e2e2ec4] rounded-md">
        <div className="flex items-center justify-between p-2">
          <p className="text-[14px] uppercase">Jogos Recentes</p>
          <p className="text-[12px] text-green-300">Ver todos</p>
        </div>

        <div className="flex items-center p-2 justify-between">
          <div className="flex items-center">
            <p className="text-gray-400">07/08</p>
            <img
              className="w-7"
              src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1776556357/milan_uopycy.png"
              alt="Logo clube"
            />
            <p className="text-[13px]">Milan F.C</p>
          </div>

          <div className="flex items-center gap-1">
            <p>0</p>-<p>0</p>
          </div>

          <div className="flex items-center">
            <p className="text-[13px]">Valencia C.F</p>
            <img
              className="w-7"
              src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1785983243/valencia_h2zodu.png"
              alt="Logo clube"
            />
          </div>
        </div>

        <hr className="text-gray-500" />

        <div className="flex items-center p-2 justify-between">
          <div className="flex items-center">
            <p className="text-gray-400">26/07</p>
            <img
              className="w-7"
              src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1785979149/vilarica_hqvlfq.png"
              alt="Logo clube"
            />
            <p className="text-[13px]">Vila Rica F.C</p>
          </div>

          <div className="flex items-center gap-1">
            <p>0</p>-<p>0</p>
          </div>

          <div className="flex items-center">
            <p className="text-[13px]">Poço Verde F.C</p>
            <img
              className="w-7"
              src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1776556358/Po%C3%A7o_mo43o6.png"
              alt="Logo clube"
            />
          </div>
        </div>

        <hr className="text-gray-500" />

        <div className="flex items-center p-2 justify-between">
          <div className="flex items-center">
            <p className="text-gray-400">26/07</p>
            <img
              className="w-7"
              src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1785979403/campoGrande_jrqot0.png"
              alt="Logo clube"
            />
            <p className="text-[13px] truncate max-w-xs">Campo Gr</p>
          </div>

          <div className="flex items-center gap-1">
            <p>0</p>-<p>0</p>
          </div>

          <div className="flex items-center">
            <p className="text-[13px]">Gurarujá E.C</p>
            <img
              className="w-7"
              src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1785979419/guaruja0_cgato8.png"
              alt="Logo clube"
            />
          </div>
        </div>
      </section>

      {/* Sessão de posts */}
      <section className="flex flex-col bg-[#2e2e2ec4] gap-2 p-2 rounded-md">
        <div className="flex items-center justify-between">
          <p className="text-[14px] uppercase">Ultimos Posts</p>
          <p className="text-[12px] text-green-300">Ver todos</p>
        </div>

        <div className="flex items-center gap-2">
          <img
            className="w-10 rounded-md"
            src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1786108869/postDistrital_pblzqk.png"
            alt="Foto"
          />
          <div>
            <h2>Campeonato Distrital</h2>
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-400">08/07</p>
              <p className="flex items-center gap-0.5 text-[13px] text-gray-400">
                <FcLike />
                244
              </p>
              <p className="flex items-center gap-0.5 text-[13px] text-gray-400">
                <MdOutlineInsertComment />
                63
              </p>
            </div>
          </div>
        </div>

        <hr className="text-gray-500" />

        <div className="flex items-center gap-2">
          <img
            className="w-10 rounded-md"
            src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1786155932/patrocinio_cjmq1r.jpg"
            alt="Foto"
          />
          <div>
            <h2>Sócio Torcedor</h2>
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-400">05/01</p>
              <p className="flex items-center gap-0.5 text-[13px] text-gray-400">
                <FcLike />
                171
              </p>
              <p className="flex items-center gap-0.5 text-[13px] text-gray-400">
                <MdOutlineInsertComment />
                47
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
