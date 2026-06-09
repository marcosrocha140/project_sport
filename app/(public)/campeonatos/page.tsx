import { FaCircle } from "react-icons/fa";
import { FaTableList } from "react-icons/fa6";
import { RiPushpinFill } from "react-icons/ri";
import { GiWhistle } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";

export default function TournamentPage() {
  return (
    <div className="flex flex-col p-4 gap-2 h-[100vh] bg-cover bg-[url('https://www.dropbox.com/scl/fi/6fartkt3soofl9buc2if6/bg-mobile.png?rlkey=5r4g2w53uzkrfx7fh89x599og&st=dqfja6s7&dl=1')]">
      <h2 className="text-2xl md:text-4xl text-blue-400 font-semibold">
        Campeonatos
      </h2>
      <p className="text-sm md:text-base">
        Confira os principais campeonatos da sua região
      </p>
      <input
        className="bg-[#0d4ba83a] p-1 rounded-md border border-[#ffffff46]"
        type="search"
        placeholder="Buscar por campeonatos..."
      />
      <div className="flex bg-[url('https://www.dropbox.com/scl/fi/ibj6uc0cwyh21v8rxgg8z/Pngtree-navy-blue-concrete-texture-background_1466727.png?rlkey=pzhtle8ivv2e5r75xz17jbzqx&st=mv2kgzy0&dl=1')] p-2 rounded-sm border border-[#ffffff49]">
        <img
          className="w-20 h-20"
          src="https://www.dropbox.com/scl/fi/7vd49htkcdlyonz9tugv5/trofeu.png?rlkey=j4xtk8j2esgdm45jyi9u7xbiz&st=sfb21ohb&dl=1"
          alt="Logo Campeonato"
        />
        <div className="w-full text-left">
          <h2 className="font-semibold text-[12px] uppercase">
            Campeonato Distrital 2026
          </h2>
          <p className="text-gray-400 text-sm">Quixadá/CE</p>
          <div className="flex items-center gap-1 text-[11px] text-yellow-300">
            <FaCircle aria-label="Campeonato em andamento" />
            <p>Em Andamento</p>
          </div>
          <p className="text-[11px]">Termina: 11/12/2026</p>
          <div className="inline-block">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1 bg-blue-950 border border-[#ffffff46] px-3 rounded-sm">
                <FaTableList />
                <button className="text-sm">Tabela</button>
              </div>
            </div>
            <div className="flex items-center gap-1 bg-blue-950 border border-[#ffffff46] px-3 rounded-sm">
              <GiWhistle />
              <button className="text-sm">Jogos</button>
            </div>
            <div className="flex items-center gap-1 bg-blue-950 border border-[#ffffff46] px-3 rounded-sm">
              <p className="text-sm">Mais informações</p>
              <FaArrowRight />
            </div>
          </div>
        </div>
        <RiPushpinFill />
      </div>
    </div>
  );
}
