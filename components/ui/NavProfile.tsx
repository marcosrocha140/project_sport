import { AiFillHome } from "react-icons/ai";
import { IoIosFootball } from "react-icons/io";
import { GoFileDirectoryFill } from "react-icons/go";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

export default function NavProfile() {
    return(
        <div className="flex items-center w-full bottom-0 justify-between p-1 px-3 fixed">
            <div className="flex flex-col items-center">
                <AiFillHome className="text-xl"/>
                <p>Inicio</p>
            </div>

            <div className="flex flex-col bg-[#038457] rounded-md items-center">
                <IoIosFootball className="text-xl"/>
                <p>Jogadores</p>
            </div>

            <div className="flex flex-col items-center">
                <GoFileDirectoryFill className="text-xl"/>
                <p>Partidas</p>
            </div>

            <div className="flex flex-col items-center">
                <PiDotsThreeOutlineFill className="text-xl"/>
                <p>Mais</p>
            </div>
        </div>
    )
}