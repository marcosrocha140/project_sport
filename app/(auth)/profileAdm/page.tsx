import { GiPositionMarker } from "react-icons/gi";
import { IoFootball } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { RiAdminFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { IoShieldHalfOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { HiMiniTrophy } from "react-icons/hi2";
import { BackItem } from "@/components/ui/BackItem";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="h-svh bg-[#02213b]">
      <div className="flex items-center">
        <BackItem title="Perfil de Administrador" />
        <HiOutlineDotsVertical className="text-xl" />
      </div>
      <div className="mx-2 flex flex-col gap-1">
        <div className="flex items-center rounded-md gap-1 p-2 bg-cover bg-[url('https://www.dropbox.com/scl/fi/006mpcv4ollehg7lsy9o0/bannerProfile.png?rlkey=v71fizm1pfcep83fwzss9xkxt&st=zcuaqhdj&dl=1')] border-blue-500">
          <div>
            <img
              className="w-32 rounded-full border border-blue-500"
              src="https://www.dropbox.com/scl/fi/w45takjagvp62udsaor96/marcos.jpeg?rlkey=atmdvo03jek1ch09ag91fp7dc&st=sujlc504&dl=1"
              alt="Imagem Alan"
            />
          </div>

          <div className="w-full">
            <div>
              <h2 className="text-2xl items-center font-semibold flex gap-1">
                Marcos Rocha{" "}
                <FaCircleCheck className="text-[11px] text-blue-500 bg-white rounded-full" />
              </h2>
              <p className="flex text-[13px] items-center gap-0.5 text-blue-500">
                <RiAdminFill />
                Administrador/CEO
              </p>
            </div>
            <div className="relative w-full gap-0.5 items-end">
              <div>
                <p className="flex text-gray-300 text-[13px] gap-0.5 items-center">
                  <MdOutlineMail className="text-blue-500" />{" "}
                  rmarcos140@gmail.com
                </p>
                <p className="flex text-gray-300 text-[13px] gap-0.5 items-center">
                  <GiPositionMarker className="text-blue-500" /> Quixadá-CE
                </p>
                <Link href='https://www.instagram.com/marcosrocha.png/' className="flex text-gray-300 text-[13px] gap-0.5 items-center">
                  <FaInstagram className="text-blue-500" /> marcosrocha.png
                </Link>
              </div>
              <p className="absolute text-[11px] bottom-0 right-0 rounded-md flex items-center gap-0.5 text-blue-500 border border-blue-500 py-1 px-1">
                <MdOutlineEdit />
                Editar Perfil
              </p>
            </div>
          </div>
        </div>

        <h2>Painel Administrativo</h2>
        <hr />

        <div className="flex items-center overflow-x-auto gap-0.5">
          <div className="flex gap-1 rounded-sm bg-[#0d3d75] py-1 px-2">
            <FaUserFriends className="text-2xl"/>
            <div>
              <p>Usuário</p>
              <p className="text-sm text-gray-300">8</p>
              <p className="bg-[#0671a3b9] text-gray-400 p-1 rounded-md">
                Gerenciar
              </p>
            </div>
          </div>

          <div className="flex gap-1 rounded-sm bg-[#0d3d75] py-1 px-2">
            <IoShieldHalfOutline className="text-2xl"/>
            <div>
              <p>Times</p>
              <p className="text-sm text-gray-300">5</p>
              <p className="bg-[#0671a3b9] text-gray-400 p-1 rounded-md">
                Gerenciar
              </p>
            </div>
          </div>

          <div className="flex gap-1 rounded-sm bg-[#0d3d75] py-1 px-2">
            <IoFootball className="text-2xl"/>
            <div>
              <p>Jogos</p>
              <p className="text-sm text-gray-300">14</p>
              <p className="bg-[#0671a3b9] text-gray-400 p-1 rounded-md">
                Gerenciar
              </p>
            </div>
          </div>

          <div className="flex gap-1 rounded-sm bg-[#0d3d75] py-1 px-2">
            <IoFootball className="text-2xl"/>
            <div>
              <p>Campeonatos</p>
              <p className="text-sm text-gray-300">4</p>
              <p className="bg-[#0671a3b9] text-gray-400 p-1 rounded-md">
                Gerenciar
              </p>
            </div>
          </div>
        </div>

        {/* "Componente time que o usuario participa (caso nao faça parte ele nao aparece)" */}
        <p className="font-light text-sm flex items-center gap-1 uppercase text-gray-400">
          Fotos <IoMdPhotos />
        </p>
        <div>
          <div className="grid grid-cols-3 gap-1">
            <img
              className="w-32 border"
              src="https://www.dropbox.com/scl/fi/x7c1vmy6c2a2aeu9zrcpm/BannerFoto.png?rlkey=5uzffvmm4cstx0zrh5e5in0by&st=m7c24pre&dl=1"
              alt="Imagem 1"
            />
            <img
              className="w-32 border"
              src="https://www.dropbox.com/scl/fi/x7c1vmy6c2a2aeu9zrcpm/BannerFoto.png?rlkey=5uzffvmm4cstx0zrh5e5in0by&st=m7c24pre&dl=1"
              alt="Imagem 2"
            />
            <img
              className="w-32 border"
              src="https://www.dropbox.com/scl/fi/x7c1vmy6c2a2aeu9zrcpm/BannerFoto.png?rlkey=5uzffvmm4cstx0zrh5e5in0by&st=m7c24pre&dl=1"
              alt="Imagem 3"
            />
            <img
              className="w-32 border"
              src="https://www.dropbox.com/scl/fi/x7c1vmy6c2a2aeu9zrcpm/BannerFoto.png?rlkey=5uzffvmm4cstx0zrh5e5in0by&st=m7c24pre&dl=1"
              alt="Imagem 4"
            />
            <img
              className="w-32 border"
              src="https://www.dropbox.com/scl/fi/x7c1vmy6c2a2aeu9zrcpm/BannerFoto.png?rlkey=5uzffvmm4cstx0zrh5e5in0by&st=m7c24pre&dl=1"
              alt="Imagem 5"
            />
            <img
              className="w-32 border"
              src="https://www.dropbox.com/scl/fi/x7c1vmy6c2a2aeu9zrcpm/BannerFoto.png?rlkey=5uzffvmm4cstx0zrh5e5in0by&st=m7c24pre&dl=1"
              alt="Imagem 6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
