import { BackItem } from "@/components/ui/BackItem";
import { FiMoreVertical } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
import { MdOutlineInsertComment } from "react-icons/md";
import { GiSoccerBall } from "react-icons/gi";
import { postRepository } from "@/app/repositories/post.repository";

export default async function PostCreatePage() {
  // const [preview, setPreview] = useState<string |null>(null);
  const posts = await postRepository.findAll();

  return (
    <main className="flex flex-col gap-1.5 p-2">
      <div className="flex">
        <div>
          <h2 className="font-semibold text-2xl">Postagens</h2>
          <p className="text-xs">
            Gerencie todos as postagens e conteudos publicados.
          </p>
        </div>
        <button className="text-black text-[17px] h-8 px-1.5 w-36 flex justify-center rounded-sm items-center gap-1 bg-[#81c11a]">
          + Novo Post
        </button>
      </div>

      <ul className="flex gap-1 text-sm">
        <li className="inline-block p-0.5 px-2 rounded-xl border text-[#51d414] bg-[#11940631]">Todas {posts.length}</li>
        <li className="inline-block p-0.5 px-2 rounded-xl border bg-[#010a14]">Futebol</li>
        <li className="inline-block p-0.5 px-2 rounded-xl border bg-[#010a14]">Futsal</li>
        <li className="inline-block p-0.5 px-2 rounded-xl border bg-[#010a14]">Anuncios</li>
      </ul>

      <div className="flex flex-col gap-1">
        {posts.map((post) => (
          <section
            key={post.id}
            className="flex gap-1 p-0.5 border border-gray-700 rounded-md bg-[#010a14]"
          >
            <img
              src={post.imagem}
              alt="Foto do post"
              className="w-20 rounded-md"
            />
            <div>
              <div className="flex items-center justify-between">
                <p className="bg-green-700 text-green-200 text-[8px] inline-block text-xs p-0.5 px-2 border border-green-400 rounded-xl">
                  Publicado
                </p>
                <p className="text-[9px] text-gray-400">{post.data_criacao.toLocaleString('pt-BR')}</p>
              </div>
              <h2 className="font-semibold">{post.titulo}</h2>
              <p className="text-[11px] line-clamp-2">{post.conteudo}</p>
              <p className="flex items-center gap-1.5 text-[11px]">
                <FcLike />0<MdOutlineInsertComment />0{" "}
                <GiSoccerBall className="text-[9px]" />
              </p>
            </div>
            <FiMoreVertical className="text-7xl" />
          </section>
        ))}
      </div>
    </main>
  );
}
