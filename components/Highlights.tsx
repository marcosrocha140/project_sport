import { FaRankingStar } from "react-icons/fa6";

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
      
      <ul itemType="list" className="flex flex-col  gap-2 items-left">
        <div className="flex justify-between gap-4 items-center">
          <li className="font-semibold">1. Varzea da onça F.C</li>
          <img
            className="w-6"
            src="https://www.dropbox.com/scl/fi/880lfusv9hfcll7d6js6b/varzea-removebg-preview.png?rlkey=33bcmge5k56d8qg3p6zgn21io&st=jv3iiyg0&dl=1"
            alt="varzea"
          />
        </div>

        <hr className="text-[#ffffff46]"/>

        <div className="flex justify-between gap-4 items-center">
          <li className="font-semibold">2. The Turnbull ACs</li>
          <img
            className="w-6"
            src="https://www.dropbox.com/scl/fi/aj5wyksxqlclu6dpw1g2d/the_turnbuls.png?rlkey=wp6s4wjzalkphe9v2o0kn21t9&st=dgfxp9ll&dl=1"
            alt="the turbull"
          />
        </div>

        <hr className="text-[#ffffff46]"/>

        <div className="flex justify-between gap-4 items-center">
          <li className="font-semibold">3. Vila Rica F.C</li>
          <img
            className="w-6"
            src="https://www.dropbox.com/scl/fi/oirslqpybww2x7qzcot5y/vila_rica.png?rlkey=8mz58k0ocx5nlgt1yrcu88yuw&st=p61sc6pz&dl=1"
            alt="cipo"
          />
        </div>

        <hr className="text-[#ffffff46]"/>
        <p className="text-xs underline">Ver tabela completa </p>
      </ul>
    </div>
  );
}
