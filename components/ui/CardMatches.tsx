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
    <div className="py-1.5 rounded-md border text-center border-[#ffffff54] bg-[url('https://www.dropbox.com/scl/fi/ibj6uc0cwyh21v8rxgg8z/Pngtree-navy-blue-concrete-texture-background_1466727.png?rlkey=pzhtle8ivv2e5r75xz17jbzqx&st=mv2kgzy0&dl=1')]">
      <p className="shadow text-[10px]"><span className="font-semibold">Andamento</span> 2º - Arena [Nome]</p>
      <div className="flex my-1 py-1 items-center justify-center gap-2 border-y-1 border-[#ffffff5d] bg-[#00000046]">
        <div className="flex items-center">
          <img
            className="w-10"
            src={team1Img}
            alt="Foto do clube"
          />
          <div className="text-left">
            <h3 className="font-medium text-[10px]">{nameTeam1}</h3>
            <p className="text-gray-400 text-[8px]">Vitórias: 5</p>
            <p className="text-gray-400 text-[8px] flex items-center gap-1"><FaRankingStar/>#1</p>
          </div>
        </div>
        <h3>0</h3>
        <h2 className="text-xl">VS</h2>
        <h3>0</h3>
        <div className="flex items-center">
          <div className="text-right">
            <h3 className="font-medium text-[10px]">{nameTeam2}</h3>
            <p className="text-gray-400 text-[8px]">Vitórias: 2</p>
            <p className="text-gray-400 text-[8px]">7#</p>
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
