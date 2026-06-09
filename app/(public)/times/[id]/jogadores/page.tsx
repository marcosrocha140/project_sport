import { PiChairFill } from "react-icons/pi";
import { GiSoccerBall } from "react-icons/gi";
import { CardPlayer } from "@/components/ui/CardPlayer";
import { players } from "@/app/data/players";

export default function Page() {
  return (
    <div>
      <h2 className="text-red-800 font-semibold text-xl flex gap-0.5 items-center">Titulares <GiSoccerBall/><span className="text-[10px]">11 jogadores</span></h2>
      <div className="flex overflow-x-auto gap-1">
        {
          players.filter((player) => player.holder === true).map((player) => (
          <CardPlayer key={player.id} {...player} />
        ))
        }
      </div>
      <h2 className="flex items-center gap-0.5">Reservas <PiChairFill/> <span className="text-[10px]">7 jogadores</span></h2>
      <div className="flex overflow-x-auto gap-1">
        {
          players.filter((player) => player.holder != true).map((player) => (
          <CardPlayer key={player.id} {...player} />
        ))
        }
      </div>
    </div>
  );
}
