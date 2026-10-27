import { FaRankingStar } from "react-icons/fa6";
import Image from "next/image";

export default function Highlights() {
  return (
    <div className="bg-[#06264d] mb-3 rounded-sm shadow gap-1 p-4 text-white hidden md:block">
      <div className="flex items-center gap-1">
        <FaRankingStar className="text-2xl"/>
        <h2 className="font-bold text-2xl"> Destaques</h2>
      </div>
      <hr className="text-[#ffffff46]" />
      <select className="bg-[#ffffff2c] p-2 w-full rounded-md my-1">
        <option value="0">Rank dos Melhores</option>
        <option value="distrital">Campeonato Distrital</option>
      </select>
      
      <ul className="flex flex-col gap-2">
        <li className="flex justify-between gap-4 items-center">
          <span className="font-semibold">1. Varzea da onça F.C</span>
          <Image
            className="w-6 h-6"
            src="https://www.dropbox.com/scl/fi/880lfusv9hfcll7d6js6b/varzea-removebg-preview.png?rlkey=33bcmge5k56d8qg3p6zgn21io&st=jv3iiyg0&dl=1"
            alt="Logo Varzea da onça F.C"
            width={24}
            height={24}
          />
        </li>

        <hr className="text-[#ffffff46]"/>

        <li className="flex justify-between gap-4 items-center">
          <span className="font-semibold">2. The Turnbull ACs</span>
          <Image
            className="w-6 h-6"
            src="https://www.dropbox.com/scl/fi/aj5wyksxqlclu6dpw1g2d/the_turnbuls.png?rlkey=wp6s4wjzalkphe9v2o0kn21t9&st=dgfxp9ll&dl=1"
            alt="Logo The Turnbull ACs"
            width={24}
            height={24}
          />
        </li>

        <hr className="text-[#ffffff46]"/>

        <li className="flex justify-between gap-4 items-center">
          <span className="font-semibold">3. Vila Rica F.C</span>
          <Image
            className="w-6 h-6"
            src="https://www.dropbox.com/scl/fi/oirslqpybww2x7qzcot5y/vila_rica.png?rlkey=8mz58k0ocx5nlgt1yrcu88yuw&st=p61sc6pz&dl=1"
            alt="Logo Vila Rica F.C"
            width={24}
            height={24}
          />
        </li>

        <hr className="text-[#ffffff46]"/>
        <p className="text-xs underline">Ver tabela completa </p>
      </ul>
    </div>
  );
}
