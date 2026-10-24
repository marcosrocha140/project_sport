import { BackItem } from "@/components/ui/BackItem";
import { FiMoreVertical } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { MdOutlineInsertComment } from "react-icons/md";
import { GiSoccerBall } from "react-icons/gi";
import { postRepository } from "@/app/repositories/post.repository";

export default async function PostCreatePage() {
  // const [preview, setPreview] = useState<string |null>(null);
  const posts = await postRepository.findAll();

  return (
    <main className="flex relative flex-col gap-2.5 p-2">
      {/* header temporario */}
      <div className="flex items-center border-b border-[#ffffff7e] bg-[#1b1b1b63] justify-between gap-1">
        <div className="flex flex-col gap-0">
          <h2 className="font-bold uppercase">Esporte</h2>
          <p className="text-green-600 italic">Interior</p>
        </div>
        
        <img
          className="w-14"
          src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1786320555/LogoAdmin_qebxwo.png"
          alt="Logo"
        />

        <img
          className="w-10 rounded-full"
          src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1789921075/marcosRocha_qhktcs.png"
          alt="Logo"
        />
      </div>
      <div className="flex">
        <div>
          <h2 className="font-semibold text-2xl">Postagens</h2>
          <p className="text-xs">
            Gerencie todos as postagens e conteudos publicados.
          </p>
        </div>
        <button className="text-[17px] h-8 px-1.5 w-36 flex justify-center rounded-sm items-center gap-1 bg-green-500">
          + Novo Post
        </button>
      </div>

      <ul className="flex gap-1 text-sm">
        <li className="inline-block w-full text-center text-xs py-1.5 px-3 rounded-xl border text-[#51d414] bg-[#11940631]">
          Todas {posts.length}
        </li>
        <li className="inline-block w-full text-center text-xs py-1.5 px-3 rounded-xl border bg-[#010a14]">
          Futebol
        </li>
        <li className="inline-block w-full text-center text-xs py-1.5 px-3 rounded-xl border bg-[#010a14]">
          Futsal
        </li>
        <li className="inline-block w-full text-center text-xs py-1.5 px-3 rounded-xl border bg-[#010a14]">
          Anuncios
        </li>
      </ul>

      <div className="flex flex-col gap-1">
        {posts.map((post) => (
          <section
            key={post.id}
            className="flex gap-1 p-0.5 w-full border border-gray-700 rounded-md bg-[#010a14]"
          >
            <img
              src={post.imagem}
              alt="Foto do post"
              className="w-20 rounded-md"
            />
            <div>
              <div className="flex bg-amber-100 items-center justify-between p-1">
                <div className="flex gap-1">
                  <p className="bg-green-700 text-green-200 text-[8px] inline-block text-xs p-0.5 px-2 border border-green-400 rounded-xl">
                    Publicado
                  </p>
                  <p className="text-[9px] flex items-center text-gray-400">
                    <AiOutlineUser />
                    {post.autor.nome}
                  </p>
                </div>

                <div className="flex gap-1 items-center">
                  <p className="text-[9px] text-gray-400">
                    {post.data_criacao?.toLocaleString("pt-BR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </p>
                  <FiMoreVertical />
                </div>
              </div>
              <h2 className="font-semibold">{post.titulo}</h2>
              <div>
                <p className="text-[11px] line-clamp-2">{post.conteudo}</p>
                <p className="flex items-center gap-1.5 text-[11px]">
                  <FcLike />0<MdOutlineInsertComment />0{" "}
                  <GiSoccerBall className="text-[9px]" />
                </p>
              </div>
            </div>
          </section>
        ))}
        <p className="bg-green-500 fixed bottom-6 right-4 w-8 h-8 rounded-full flex items-center justify-center text-2xl">
          +
        </p>
      </div>
    </main>
  );
}
