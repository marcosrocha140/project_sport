import { FaRegHeart, FaRegCommentDots, FaShare} from "react-icons/fa";

export function Reaction(){
    return(
        <div className="flex items-center justify-between text-[10px] md:text-sm">
            <div className="flex items-center gap-1">
                <FaRegHeart className="text-xl hover:text-red-600" aria-label="Curtidas"/>
                <p className="text-[17px]">2</p>
            </div>

            <div className="flex cursor-pointer hover:text-blue-600 items-center gap-1 p-1">
                <FaRegCommentDots className="text-xl" aria-label="Comentarios"/>
                <p className="text-[17px]">2</p>
            </div>

            <div className="flex items-center gap-1 p-1">
                <FaShare className="text-xl" aria-label="Compartilhamentos"/>
                <p className="text-[17px]">2</p>
            </div>
        </div>
    )
}