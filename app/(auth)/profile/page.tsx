import { GiPositionMarker } from "react-icons/gi";
import { GiGloves } from "react-icons/gi";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { GiSoccerField } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { TbCropPortraitFilled } from "react-icons/tb";
import { IoMdPhotos } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import { BackItem } from "@/components/ui/BackItem";
import { requireAuth } from "@/app/lib/auth";

export default async function Profile() {
  const user = await requireAuth();
  return (
    <div className="h-svh bg-[#060d0c]">
      <div className="flex items-center">
        <BackItem title="Perfil" />
        <HiOutlineDotsVertical className="text-xl"/>
      </div>
      <div className="mx-2 flex flex-col gap-1">
        <div className="flex items-center rounded-md gap-1 p-2 bg-cover] bg-[url('https://www.dropbox.com/scl/fi/006mpcv4ollehg7lsy9o0/bannerProfile.png?rlkey=v71fizm1pfcep83fwzss9xkxt&st=zcuaqhdj&dl=1')] border-green-700">
          <div>
            <img
              className="w-32 rounded-full border border-green-400"
              src={user.imagem}
              alt={`Foto ${user.nome}`}
            />
          </div>

          <div className="w-full">
            <div>
              <h2 className="text-xl items-center font-semibold flex gap-1">
                {user.nome}{" "}
                <FaCircleCheck className="text-[11px] text-green-400 bg-white rounded-full" />
              </h2>
              
              {
                user.tipo === "Administrador" ? (
                  <p className="flex text-[13px] items-center gap-0.5 text-green-500">
                    <RiAdminFill />
                    {user.tipo}
                  </p>
                ) : (
                  <p className="flex text-[13px] items-center gap-0.5 text-green-500">
                    <GiSoccerField />
                    L.Direito
                  </p>
                )
              }

            </div>
            <div className="relative w-full gap-0.5 items-end">
              <div>
                <p className="flex text-gray-300 text-[13px] gap-0.5 items-center">
                  <MdOutlineMail className="text-green-400" />{" "}
                  {user.email}
                </p>
                <p className="flex text-gray-300 text-[13px] gap-0.5 items-center">
                  <GiPositionMarker className="text-green-400" /> Quixadá-CE
                </p>
                <p className="flex text-gray-300 text-[13px] gap-0.5 items-center">
                  <FaInstagram className="text-green-400" /> wkerlyson_
                </p>
              </div>
              <p className="absolute text-[11px] bottom-0 right-0 rounded-md flex items-center gap-0.5 text-green-400 border-1 border-green-500 py-1 px-1">
                <MdOutlineEdit />
                Editar Perfil
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center p-1 justify-between rounded-md bg-[#051e14]">
          <div className="flex items-center">
            <img
              className="w-12"
              src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1776556360/varzea-removebg-preview_ahzxdw.png"
              alt="Logo time"
            />
            <div>
              <h2 className="uppercase text-[14px]">Várzea da Onça E.C</h2>
              <p className="font-light text-sm text-green-400">Clube atual</p>
            </div>
          </div>
          <p className="ml-2 text-green-500 flex items-center gap-0.5 text-[11px]">
            Perfil do clube
            <IoIosArrowForward />
          </p>
        </div>

        <p className="font-light text-sm uppercase text-gray-400">Desempenho</p>
        <div className="flex overflow-x-auto gap-0.5">
          <div className="p-2 text-center border border-green-900 bg-[#051e14]">
            <p className="text-xl">0</p>
            <p className="text-sm text-gray-400">Jogos</p>
          </div>

          <div className="p-2 text-center border border-green-900 bg-[#051e14]">
            <p className="text-xl">0</p>
            <p className="text-sm text-gray-400">Gols</p>
          </div>

          <div className="p-2 text-center border border-green-900 bg-[#051e14]">
            <p className="text-xl">0</p>
            <p className="text-sm text-gray-400">Assistência</p>
          </div>

          <div className="p-2 text-center border border-green-900 bg-[#051e14]">
            <div className="flex justify-center gap-1.5">
              <p className="text-xl flex gap-0.5 items-center">
                <TbCropPortraitFilled className="text-yellow-300" /> 0
              </p>
              <p className="text-xl flex gap-0.5 items-center">
                <TbCropPortraitFilled className="text-red-600" /> 0
              </p>
            </div>
            <p className="text-sm text-gray-400">Cartões</p>
          </div>

          <div className="p-2 text-center border border-green-900 bg-[#051e14]">
            <p className="text-xl text-green-400">Ativo</p>
            <p className="text-sm text-gray-400">Status</p>
          </div>
        </div>

        <p className="font-light text-sm uppercase text-gray-400">
          Informações pessoais
        </p>
        <table className="w-full border border-green-900">
          <tbody className="bg-[#051e14] text-white">
            <tr className="flex p-2 border-b border-[#ffffff1f] justify-between">
              <td className="text-gray-400">Idade</td>
              <td>
                <strong>33</strong>
              </td>
            </tr>
            <tr className="flex p-2 border-b border-[#ffffff1f] justify-between">
              <td className="text-gray-400">Altura</td>
              <td>
                <strong>1,65 m</strong>
              </td>
            </tr>
            <tr className="flex p-2 border-b border-[#ffffff1f] justify-between">
              <td className="text-gray-400">Peso</td>
              <td>
                <strong>74 kg</strong>
              </td>
            </tr>
            <tr className="flex p-2 justify-between">
              <td className="text-gray-400">Nacionalidade</td>
              <td>🇧🇷</td>
            </tr>
          </tbody>
        </table>

        {/* "Componente time que o usuario participa (caso nao faça parte ele nao aparece)" */}
        <p className="font-light text-sm flex items-center gap-1 uppercase text-gray-400">
          Fotos <IoMdPhotos/>
        </p>
        <div>
          <div className="grid grid-cols-3 gap-1">
            <img className="w-32 border" src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1790529354/BannerFoto_ieynww.png" alt="Imagem 1" />
            <img className="w-32 border" src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1790529354/BannerFoto_ieynww.png" alt="Imagem 2" />
            <img className="w-32 border" src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1790529354/BannerFoto_ieynww.png" alt="Imagem 3" />
            <img className="w-32 border" src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1790529354/BannerFoto_ieynww.png" alt="Imagem 4" />
            <img className="w-32 border" src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1790529354/BannerFoto_ieynww.png" alt="Imagem 5" />
            <img className="w-32 border" src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1790529354/BannerFoto_ieynww.png" alt="Imagem 6" />
          </div>
        </div>
      </div>
    </div>
  );
}
