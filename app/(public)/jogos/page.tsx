import { CardMtaches } from "@/components/ui/CardMatches";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaGear } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";
import { GiGloves } from "react-icons/gi";
import MatchCard from "@/components/MatchCard";

export default function MatchesPage() {
  return (
    <div className="flex flex-col p-2 gap-2 h-[100vh] bg-cover bg-[url('https://www.dropbox.com/scl/fi/6fartkt3soofl9buc2if6/bg-mobile.png?rlkey=5r4g2w53uzkrfx7fh89x599og&st=dqfja6s7&dl=1')]">
      <div>
          <h1 className="text-2xl font-extrabold text-white sm:text-3xl">
            Jogos <span className="text-emerald-400">Marcados</span>
          </h1>

          <p className="mt-1 text-sm text-gray-400">
            Acompanhe os jogos amadores e profissionais
          </p>
        </div>

      <ul className="flex items-center gap-2 justify-between overflow-x-auto whitespace-nowrap">
        <li className="font-bold text-blue-500 border-b-2">Hoje</li>
        <li>Ontem</li>
        <li>Domingo</li>
        <li>Sabado</li>
      </ul>
      <div className="flex justify-between">
        {/* <div className="flex items-center text-sm gap-1 border rounded-md p-1 px-1.5">
          <FaGear />
        </div> */}

        {/* <div className="flex items-center text-sm gap-1 border rounded-md px-1.5">
          <p>Todos</p>
        </div> */}

        <div className="flex items-center gap-1">
          <FaTrophy className="text-green-600" />

          <select className="text-black text-[11px] border rounded-md p-1 bg-green-600">
            <option value="0">Campeonato Distrital</option>
            <option value="tabela">Tabela</option>
            <option value="jogos">Jogos</option>
            <option value="MVP">Artilheiro</option>
            <option value="MvpGoleio">Goleiro</option>
          </select>
        </div>

        <div className="flex text-sm items-center gap-1 border rounded-md px-1.5">
          <FaHandshakeSimple />
          <p>Amistoso</p>
        </div>
      </div>
      <MatchCard 
      competition="Campeonato Distrital"
      homeTeam="Várzea da onça E.C"
      homeLogo="https://res.cloudinary.com/dq0dfseeu/image/upload/v1776556360/varzea-removebg-preview_ahzxdw.png"
      homeWins={0}
      homeScore={0}
      awayTeam="Vila Rica F.C"
      awayLogo="https://res.cloudinary.com/dq0dfseeu/image/upload/v1785979149/vilarica_hqvlfq.png"
      awayWins={0}
      awayScore={0}/>

      <MatchCard 
      competition="Amistoso"
      homeTeam="Campo Grande F.C"
      homeLogo="https://res.cloudinary.com/dq0dfseeu/image/upload/v1785979403/campoGrande_jrqot0.png"
      homeWins={0}
      homeScore={0}
      awayTeam="Umarizeiro F.C"
      awayLogo="https://res.cloudinary.com/dq0dfseeu/image/upload/v1785979380/umarizeiro_udaeew.png"
      awayWins={0}
      awayScore={0}/>

      <div className="flex text-gray-300 items-center gap-5 text-md justify-center">
        <IoIosArrowBack />
        <p className="bg-[#0d2554] px-2 border border-[#ffffff3d] rounded-xs">
          1
        </p>
        <p>2</p>
        <p>3</p>
        <IoIosArrowForward />
      </div>
      
    </div>
  );
}
