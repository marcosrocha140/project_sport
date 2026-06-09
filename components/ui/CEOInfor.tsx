import { FaRegCalendarAlt } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsTrophyFill } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa6";
import { FcStatistics } from "react-icons/fc";
import { TbWorld } from "react-icons/tb";

export function CEOInfor() {
  return (
    <section className="flex flex-col gap-2 mt-5">
      <div className="relative flex gap-1 p-1 border border-[#7ca376ce] rounded-md">
        <img
          className="absolute bottom-0 left-0 w-28 rounded-full border-2 border-[#ffffff73]"
          src="https://www.dropbox.com/scl/fi/joc6in71i2dkgj2nb7pjo/Marcos.png?rlkey=90aryrj41fxrav5ywbmfcztse&st=fu0q3ge9&dl=1"
          alt="Marcos Rocha Foto"
        />
        <div className="pl-28">
          <h2 className="text-2xl">Marcos Rocha</h2>
          <p className="text-[#75c26b]">CEO da Turnbull ACs</p>
          <p className="text-[#75c26b]">Desde 2026</p>
          
        </div>
      </div>

      {/* SPSE-40 Heroine Complete Subordination */}

      <div className="border rounded-md border-[#7ca376ce] px-2">
        <div className="flex font-semibold items-center justify-between text-gray-400">
          <h2>Informações</h2>
        </div>
        <hr className="text-gray-500" />
        <article className="flex justify-between">
          <div>
            <div className="flex items-center gap-2">
              <FaRegCalendarAlt className="text-[#719b6b]"/>
              <p>Idade: <span className="text-[#75c26b]">29</span></p>
            </div>

            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#719b6b]"/>
              <p>Cidade: <span className="text-[#75c26b]">Quixadá/CE</span></p>
            </div>

            <div className="flex items-center gap-2">
              <BsBriefcaseFill className="text-[#719b6b]"/>
              <p>Profissão: <span className="text-[#75c26b]">Faz programa</span></p>
            </div>
          </div>
          <div>
            {/* <div className="flex items-center gap-2">
              <FaInstagramSquare/>
              <p>Instagram</p>
            </div>

            <div className="flex items-center gap-2">
              <FaLinkedin className="text-blue-500 bg-white" />
              <p>Linkedln</p>
            </div> */}
          </div>
        </article>
      </div>

      <div className="border rounded-md border-[#7ca376ce] px-2">
        <div className="flex font-semibold items-center justify-between text-gray-400">
          <h2>Gestão no Clube</h2>
        </div>
        <hr className="text-gray-500" />
        <article className="flex justify-between">
          <div>
            <div className="flex items-center gap-2">
              <BsTrophyFill className="text-[#719b6b]"/>
              <p>Titulos: <span className="text-[#75c26b]">0</span></p>
            </div>

            <div className="flex items-center gap-2">
              <FaHandshake className="text-[#719b6b]"/>
              <p>Contratos Realizados: <span className="text-[#75c26b]">8</span></p>
            </div>

            <div className="flex items-center gap-2">
              <FcStatistics className="text-[#719b6b]"/>
              <p>Desempenho: <span className="text-[#75c26b]">83%</span></p>
            </div>
          </div>
          <div>
          
          </div>
        </article>
      </div>

      <div className="border rounded-md border-[#7ca376ce] px-2">
        <div className="flex font-semibold items-center text-gray-400">
          <TbWorld/>
          <h2>Redes</h2>
        </div>
        <hr className="text-gray-500" />
        <article className="flex p-1 justify-between">
            <div className="flex items-center gap-2">
              <img className="w-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1280px-Instagram_logo_2022.svg.png" alt="instagram logo" />
              <p>Instagram</p>
            </div>

            <div className="flex items-center gap-2">
              <img className="w-5" src="https://cdn-icons-png.flaticon.com/512/3992/3992606.png" alt="linkedln logo" />
              <p>Linkedln</p>
            </div>
          
        </article>
      </div>
    </section>
  );
}
