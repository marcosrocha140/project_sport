import { CardMtaches } from "@/components/ui/CardMatches";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaGear } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";
import { GiGloves } from "react-icons/gi";

export default function MatchesPage() {
  return (
    <div className="flex flex-col p-2 gap-2 h-[100vh] bg-cover bg-[url('https://www.dropbox.com/scl/fi/6fartkt3soofl9buc2if6/bg-mobile.png?rlkey=5r4g2w53uzkrfx7fh89x599og&st=dqfja6s7&dl=1')]">
      <div className="mb-1 border-b-1 border-[#fff4]">
        <h2 className="text-2xl md:text-4xl font-semibold">
          Jogos <span className="font-light text-blue-400">Marcados</span>
        </h2>
        <p className="text-sm md:text-base">
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
      <CardMtaches
        nameTeam1="Várzea da onça F.C"
        nameTeam2="Vila Rica F.C"
        team1Img="https://www.dropbox.com/scl/fi/880lfusv9hfcll7d6js6b/varzea-removebg-preview.png?rlkey=33bcmge5k56d8qg3p6zgn21io&st=a6x56894&dl=1"
        team2Img="https://www.dropbox.com/scl/fi/o4z3w8gfrm7jhchuwdl5c/vilaRica.png?rlkey=ey32d3mf0kgky92l160ys71zg&st=tgyzq00u&dl=1"
      />
      <CardMtaches
        nameTeam1="Cipó dos Migueís F.C"
        nameTeam2="Milan F.C"
        team1Img="https://www.dropbox.com/scl/fi/rt5i6l20cucoe37avtxxb/cipo.png?rlkey=84duq37vmb9vli760gtlebuq0&st=8k4l5ssq&dl=1"
        team2Img="https://www.dropbox.com/scl/fi/2gsh8w5u8gmetx8tchrsl/milan.png?rlkey=tge6nchg2s3lleyf8ag9fc38b&st=b5hxlbhn&dl=1"
      />
      <CardMtaches
        nameTeam1="Goiás E.C"
        nameTeam2="Poço Verde F.C"
        team1Img="https://www.dropbox.com/scl/fi/nloeq6qsfweyuze6z0rxd/goias.png?rlkey=pfdqhbuqs5g0qlrvoq374yken&st=m154q4ak&dl=1"
        team2Img="https://www.dropbox.com/scl/fi/hmnr2zh0ker4l48utlkbg/Po-o.png?rlkey=5zsy39g3qs1hy6x51cv88p4qz&st=b6o4dc68&dl=1"
      />

      <CardMtaches
        nameTeam1="Flacaracol F.C"
        nameTeam2="Cipó dos Migueís F.C"
        team1Img="https://www.dropbox.com/scl/fi/apkojx2dv0639pt30rx5t/flacaracol-removebg-preview.png?rlkey=lunaj91m6pdy88uox50htu61s&st=8pp0ipnw&dl=1"
        team2Img="https://www.dropbox.com/scl/fi/rt5i6l20cucoe37avtxxb/cipo.png?rlkey=84duq37vmb9vli760gtlebuq0&st=hdchx4uw&dl=1"
      />

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
