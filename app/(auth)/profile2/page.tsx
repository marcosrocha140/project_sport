import Image from "next/image";
import { GiPositionMarker } from "react-icons/gi";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { FaCircleCheck } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GoGear } from "react-icons/go";
import { FaHandshake } from "react-icons/fa";
import { BackItem } from "@/components/ui/BackItem";

export default function Profile() {
  return (
    <div className="space-y-1.5 h-svh p-1 bg-[#a55a0523]">
      <BackItem title="Perfil do patrocinador" />

      <div className="flex items-center border border-[#805017da] rounded-xs gap-1 p-2 bg-cover] bg-[url('https://www.dropbox.com/scl/fi/006mpcv4ollehg7lsy9o0/bannerProfile.png?rlkey=v71fizm1pfcep83fwzss9xkxt&st=zcuaqhdj&dl=1')]">
        <div>
          <img
            className="w-32 rounded-full border border-orange-500"
            src="https://www.dropbox.com/scl/fi/efmsr0dbj5sic1b4dv9q4/onza.jpg?rlkey=ltvighkuv2kriesd4n40h0dhm&st=dgxybaxo&dl=1"
            alt="Imagem Alan"
          />
        </div>

        <div className="w-full">
          <div>
            <h2 className="text-xl items-center font-semibold flex gap-1">
              OnzaFit - Acadêmia{" "}
              <FaCircleCheck className="text-[11px] text-orange-400 bg-white rounded-full" />
            </h2>
            <p className="flex text-[13px] items-center gap-0.5 text-orange-400">
              <FaHandshake />
              Patrocinador
            </p>
          </div>
          <div className="relative w-full gap-0.5 items-end">
            <div>
              <p className="flex text-gray-300 text-[13px] gap-0.5 items-center">
                <MdOutlineMail className=" text-orange-400" /> onzafit@gmail.com
              </p>
              <p className="flex text-gray-300 text-[13px] gap-0.5 items-center">
                <GiPositionMarker className=" text-orange-400" /> Quixadá-CE
              </p>
              <p className="flex text-gray-300 text-[13px] gap-0.5 items-center">
                <AiOutlineGlobal className=" text-orange-400" /> www.onzafit.com
              </p>
            </div>
            <p className="absolute text-[11px] bottom-0 right-0 rounded-md flex items-center gap-0.5 text-orange-400 border border-orange-400 py-1 px-1">
              {/* <MdOutlineEdit /> */}
              Editar Perfil
            </p>
          </div>
        </div>
      </div>

      <div className="p-1 border border-[#805017da] bg-[#3f2506da]">
        <p className=" font-semibold ">Sobre a Empresa</p>
        <hr className="text-[#ffffff54]" />
        <p className="text-sm">
          Onza Fit sua força começa aqui. 💪🔥 Treinos intensos, ambiente
          motivador e resultados de verdade.
        </p>
      </div>

      <p className="text-[#ffffff75] font-semibold uppercase flex items-center justify-between">
        Contatos
        <GoGear />
      </p>
      <div className="flex items-center rounded-sm gap-1 border border-[#805017da] p-1 bg-[#3f2506da]">
        <FaWhatsapp />
        <p>(99) 9.9999-9999</p>
      </div>
      <div className="flex items-center rounded-sm gap-1 p-1 border border-[#805017da] bg-[#3f2506da]">
        <AiOutlineMail />
        <p>contato@onzafit.com.br</p>
      </div>
      <div className="flex items-center rounded-sm gap-1 p-1 border border-[#805017da] bg-[#3f2506da]">
        <RiMoneyDollarCircleFill />
        <p>Planos</p>
      </div>

      {/* "Componente time que o usuario participa (caso nao faça parte ele nao aparece)" */}
      <p className="text-[#ffffff75] font-semibold uppercase flex items-center justify-between">
        Clubes patrocinados
        <GoGear />
      </p>
      <div>
        <div className="grid grid-cols-2 gap-1 rounded-sm border border-[#805017da] p-1 bg-[#3f2506da]">
          <div className="flex items-center p-1 truncate not-first-of-type: border border-[#ffffff71] rounded-sm">
            <img
              className="w-10"
              src="https://www.dropbox.com/scl/fi/880lfusv9hfcll7d6js6b/varzea-removebg-preview.png?rlkey=33bcmge5k56d8qg3p6zgn21io&st=oys9c29b&dl=1"
              alt="Logo time"
            />
            <div className="text-left">
              <h2 className="text-[15px]">Várzea da Onça E.C</h2>
              <p className="text-[12px] text-gray-400">Desde 2024</p>
            </div>
          </div>

          <div className="flex items-center p-1 border border-[#ffffff71] rounded-sm">
            <img
              className="w-10"
              src="https://www.dropbox.com/scl/fi/3xqwo6jds6y9o741cryvd/furias.png?rlkey=01e8qh4a2s2invsqy4mytch2u&st=lakn1dgz&dl=1"
              alt="Logo time"
            />
            <div className="text-left">
              <h2 className="text-[15px]">Os Fúrias</h2>
              <p className="text-[12px] text-gray-400">Desde 2026</p>
            </div>
          </div>

          <div className="flex items-center p-1 border border-[#ffffff71] rounded-sm">
            <img
              className="w-11"
              src="https://www.dropbox.com/scl/fi/a690nw4k3kkitqt986osg/Volley-removebg-preview.png?rlkey=uk37zp5wvc9l40rsolf7bkqq5&st=65licwxv&dl=1"
              alt="Logo time"
            />
            <div className="text-left">
              <h2>Volley Girls</h2>
              <p className="text-[12px] text-gray-400">Desde 2025</p>
            </div>
          </div>

          <div className="flex items-center p-1 border border-[#ffffff71] rounded-sm">
            <img
              className="w-11"
              src="https://www.dropbox.com/scl/fi/zm25imhlpyod5vsh1c6te/donzelas.png?rlkey=6h14m5mounc0gn2hxmtjrtplw&st=hdkp5n5d&dl=1"
              alt="Logo time"
            />
            <div className="text-left">
              <h2>Donzelas</h2>
              <p className="text-[12px] text-gray-400">Desde 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
