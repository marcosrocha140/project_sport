import { FaRankingStar } from "react-icons/fa6";
import { ImTrophy } from "react-icons/im";

interface CardMatchesProps {
  team1Img: string;
  team2Img: string;
  nameTeam1: string;
  nameTeam2: string;
}

export function CardMtaches({team1Img, team2Img, nameTeam1, nameTeam2}:CardMatchesProps) {
  return (
    <div className="py-1.5 rounded-md border text-center border-[#ffffff54] bg-cover bg-center bg-[url('https://res.cloudinary.com/dq0dfseeu/image/upload/v1789922703/futebolBG_b7kref.png')]">
      <p className="shadow text-[10px]"><span className="font-semibold">Andamento</span> 2º - Arena [Nome]</p>
      <div className="flex my-1 py-1 items-center justify-center gap-2 border-y-1 border-[#ffffff5d] bg-[#383838d3]">
        <div className="flex items-start">
          <img
            className="w-10"
            src={team1Img}
            alt="Foto do clube"
          />
          <div className="text-left">
            <h3 className="font-medium text-[10px] ">{nameTeam1}</h3>
            <p className="text-[8px]">Vitórias: 5</p>
          </div>
        </div>
        <h3>0</h3>
        <h2 className="text-xl">VS</h2>
        <h3>0</h3>
        <div className="flex items-start">
          <div className="text-right">
            <h3 className="font-medium text-[10px]">{nameTeam2}</h3>
            <p className="text-[8px]">Vitórias: 3</p>
          </div>
          <img
            className="w-10"
            src={team2Img}
            alt="Foto do clube"
          />
        </div>
      </div>
      <p className="flex items-center text-[10px] gap-1 justify-center"><ImTrophy/>Campeonato Distrital</p>
    </div>
  );
}
