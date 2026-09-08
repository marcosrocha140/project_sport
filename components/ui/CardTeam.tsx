import Link from "next/link";
import { IoMdFootball, IoIosArrowForward } from "react-icons/io";
import { GiSoccerBall } from "react-icons/gi";
import { FaVolleyballBall } from "react-icons/fa";

interface CardTimesProps {
  teamImg: string;
  teamName: string;
  teamCity: string;
  teamCategory: string;
}

export function CardTeam({
  teamImg,
  teamName,
  teamCity,
  teamCategory,
}: CardTimesProps) {
  return (
    <div className="bg-gradient-to-r w-full from-gray-500 to-[#047cb4] p-[2px] rounded-lg">
      <div className="flex gap-1 border justify-between border-[#00000079] bg-[url('https://www.dropbox.com/scl/fi/2336odbxo7hm8xpldcj7x/bg_football-stadium.png?rlkey=af4j8chutgdq04lb10su21j1o&st=you20xpo&dl=1')] rounded-md items-center p-1">
        <div className="flex gap-1 items-center">
          <img className="w-10" src={teamImg} alt="Logo Clube" />
          <div className="flex flex-col">
            <p className="text-xs font-semibold uppercase">{teamName}</p>
            <p className="text-xs text-gray-400">{teamCity}</p>
            <div className="flex gap-1 items-center text-gray-400">
              <p className="text-[10px]">{teamCategory}</p>
              {teamCategory == "Futebol" ? (
                <GiSoccerBall className="text-xs" />
              ) : (
                <>
                  <FaVolleyballBall className="text-xs" />
                </>
              )}
            </div>
          </div>
        </div>
        <Link
          className="bg-gradient-to-r text-[9px] p-1 flex items-center gap-1 from-[#6d6d6d] via-[#ebeaea] to-[#6d6d6d] border border-[#e4e5e6c2] rounded-sm font-semibold uppercase text-blue-950"
          href="times/id"
        >
          Ver perfil |
          <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
}
