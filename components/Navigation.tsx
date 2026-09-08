"use client";
import Link from "next/link";
import { AiFillBell, AiOutlineMenu } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { GiSoccerBall } from "react-icons/gi";

export function Navigation() {

  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-3 h-18 sm:w-10/12 lg:w-full mx-auto flex items-center justify-between bg-[url('https://t4.ftcdn.net/jpg/09/24/25/73/360_F_924257314_9SS11wm6mf3s9uWMg8pZuCBNveZb3Xy2.jpg')] bg-black/80 p-1 text-white dark:text-black border-b border-green-600/20 dark:border-green-600/20 shadow-lg shadow-blue-400/20">
        
        <div className="flex gap-1 items-center">
          <img
            className="w-20 p-1.5"
            src="https://www.dropbox.com/scl/fi/cpnw0mduyyleazzd3zuew/logoAjustada-removebg-preview.png?rlkey=veukdos60rljaw0jtogmbwwe8&st=mqji30ab&dl=1"
            alt="Logo App"
          />

          <p className="flex items-center gap-0.5 bg-white text-[13px] px-0.5 uppercase rounded-xs font-extrabold text-green-950">Jogador</p>

          <h1 className="hidden md:block text-white font-bold text-2xl">
            Sport <span className="text-blue-400 font-light">Interior</span>
          </h1>

          <ul className="hidden text-lg md:flex text-gray-300 w-1/2 items-center justify-between gap-6 py-2 cursor-pointer md:px-10 border-gray-800 dark:border-gray-300">
            <Link
              href="/"
              className="rounded-b border-b-[3px] border-[#06eeff]"
            >
              Home
            </Link>
            <Link
              href="/jogos"
              className="rounded-b hover:border-b-[3px] border-[#06eeff]"
            >
              Jogos
            </Link>
            <Link
              href="/times"
              className="rounded-b hover:border-b-[3px] border-[#06eeff]"
            >
              Times
            </Link>
            <li className="rounded-b hover:border-b-[3px] border-[#06eeff]">
              Campeonatos
            </li>
          </ul>
        </div>

        <div className="w-[30%] hidden md:block flex items-center relative">
          <input
            className="bg-amber-50 w-full rounded-xs hidden md:block p-2"
            type="search"
            placeholder="Pesquisar..."
          />
          <FaSearch className="text-white bg-blue-500 cursor-pointer h-full w-10 text-2xl absolute right-0 p-2" />
        </div>

        <div className="block md:hidden flex items-center gap-4">
          <Link href='/search'>
            <FaSearch className="text-gray-300 text-2xl" />
          </Link>
          <Link href="/notifications" className="relative">
            <AiFillBell className="text-gray-300 text-2xl" />
            <p className="absolute text-center text-sm h-4 w-4 bg-red-600 text-white rounded-full top-0 right-0 font-semibold">4</p>
          </Link>
          <img
            className="w-12 border border-green-900 rounded-full"
            src="https://www.dropbox.com/scl/fi/89up32zkfux359nmiyk9g/weslen.jpg?rlkey=5meohc9qfw46gyq3m8dwg2syb&st=5r7eoekb&dl=1"
            alt="Foto"
          />
        </div>
        <div className="hidden md:flex items-center justify-start pl-4 pr-2 py-1">
          <span className="absolute top-0 left-0 w-full h-full bg-white opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition duration-500"></span>
          <Link
            className="bg-green-600 text-white px-6 py-2 rounded-md relative overflow-hidden group"
            href="login"
          >
            <span className="relative z-10 font-bold text-gray-200">Login</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
