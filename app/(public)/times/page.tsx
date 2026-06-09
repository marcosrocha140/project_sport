import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { teams } from "@/app/data/teams";
import { CardTeam } from "@/components/ui/CardTeam";
import { IoIosSearch } from "react-icons/io";

export default async function Times() {


  return (
    <div className="flex flex-col gap-2 min-h-screen bg-cover bg-center bg-no-repeat bg-[url('https://www.dropbox.com/scl/fi/ec1og241vsd5q0n619wd7/bg-Team.png?rlkey=ugyqr14hpv8cbvw3ygzr1by28&st=wefxbn7m&dl=1')]">
      <div className="max-w-5xl mx-auto px-4 py-3">
        <section className="mb-4 border-b border-[#ffffff75]">
          <h2 className="text-[25px] text-left ">
            Todos os <span className="font-bold text-blue-400">Times</span>
          </h2>
          <p className="text-left text-xs ">
            Explore os times cadastrados na plataforma
          </p>
        </section>


          {/* <button className="py-1 px-3 rounded-xs bg-gradient-to-b from-green-900 to-green-400 border border-[#ffffff3d] ">
            Aplicar
          </button> */}

        <section className="flex flex-col gap-1 max-h-[60vh] overflow-y-auto pr-2">
          <p className="text-center text-sm">
            Clubes cadastrados:{teams.length}
          </p>
          {teams.map((team) => (
            <CardTeam key={team.id} {...team} />
          ))}
        </section>
        <section className="flex text-gray-300 items-center gap-5 text-md justify-center">
          <IoIosArrowBack />
          <p className="bg-[#0d2554] px-2 border border-[#ffffff3d] rounded-xs">
            1
          </p>
          <p>2</p>
          <p>3</p>
          <IoIosArrowForward />
        </section>
      </div>
    </div>
  );
}
