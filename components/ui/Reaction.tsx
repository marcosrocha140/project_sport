import { FcLike } from "react-icons/fc";
import { FaCommentDots, FaShare } from "react-icons/fa";

export function Reaction(){
    return(
        <div className="flex items-center justify-between text-[10px] md:text-sm">
            <div className="flex items-center gap-1 bg-blue-500 p-1 rounded-sm">
                <FcLike aria-label="Curtidas"/>
                <p className="text-white">Curtido 1.4 mil</p>
            </div>

            <div className="flex cursor-pointer hover:text-blue-600 items-center gap-1 p-1">
                <FaCommentDots aria-label="Comentarios"/>
                <p>Comentarios <sup className="font-semibold">32</sup></p>
            </div>

            <div className="flex items-center gap-1 p-1">
                <FaShare aria-label="Compartilhamentos"/>
                <p>Compartilhar <sup className="font-semibold">11</sup></p>
            </div>
        </div>
    )
}