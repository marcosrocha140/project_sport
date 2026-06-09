import { FaRankingStar } from "react-icons/fa6";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface ResponseProps {
  posts: Post[];
}

export default async function PostList() {
  const response = await fetch("https://dummyjson.com/posts");
  const data: ResponseProps = await response.json();
  console.log(data);

  return (
    <div className="p-2 mt-3">
      <h2 className="flex items-center gap-1 justify-center text-2xl font-semibold font-road">
        <FaRankingStar /> Top Atletas
      </h2>
      <p className="text-sm text-center">
        Temporada 2026
      </p>
      <h2 className="text-center uppercase font-special font-semibold">Hall dos Melhores</h2>
      <div className="flex items-end justify-center border-y-1 py-4 gap-4 mt-1">
        <div className="relative h-66 w-40 bg-contain bg-no-repeat bg-[url('https://www.dropbox.com/scl/fi/45bypq04ulwzsj3uexvvl/AlanBanner.png?rlkey=ep5x38d7lpqjmiawnobvnr1bb&st=ty1h1n3p&dl=1')] backdrop-blur-sm border border-yellow-300 shadow-[0_0_8px_rgba(255,215,0,0.5),0_0_16px_rgba(255,215,0,0.3)]">
          <div className="absolute bottom-0 left-1/6 flex flex-col items-center p-1">
            {/* <span className="text-white font-semibold text-center">
              Alan Lima
            </span> */}

            <p className="text-xs text-gray-300 font-semibold">
              <span className="text-yellow-400">Gols:</span> 24 | <span className="text-gray-400">Ass:</span> 13
            </p>
          </div>
          {/* <div className="bg-gradient-to-b from-yellow-400/30 to-yellow-600/10 h-36 w-full">
            <p>Teste</p>
          </div> */}

          {/* <div className="mt-2 w-10 h-10 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center">
            1
          </div> */}
          <img
            src="https://png.pngtree.com/png-clipart/20240302/original/pngtree-first-rank-or-number-one-medal-with-paddy-symbol-in-gold-png-image_14478308.png"
            className="w-9 h-9 m-1 rounded-full border-2 border-yellow-400"
          />
        </div>

        {/*Card do Segundo Jogador */}

        <div className="relative h-66 w-40 bg-cover bg-no-repeat bg-[url('https://www.dropbox.com/scl/fi/s8v8y5p3s6h17i6wc88wh/fael.png?rlkey=wimm66y5an37u78hmmilocuok&st=ib5222ij&dl=1')] border border-gray-200/40 shadow-[0_0_40px_rgba(200,200,200,0.6)]">
          <div className="absolute bottom-0 left-1/6 flex flex-col items-center p-1">
            {/* <span className="text-white font-semibold text-center">
              Alan Lima
            </span> */}

            <p className="text-xs text-gray-300 font-semibold">
              <span className="text-yellow-400">Gols:</span> 17 | <span className="text-gray-400">Ass:</span> 9
            </p>
          </div>
          <img
            src="https://www.dropbox.com/scl/fi/l2i038wsk6tffri1eva9z/icon2.png?rlkey=puixzkknre55x7ill2np2he1t&st=kepsi0oh&dl=1"
            className="w-9 h-9 m-1 rounded-full border-2 border-gray-400"
          />
        </div>
      </div>
      <p className="text-center text-amber-200 font-semibold">Outros Atletas</p>
      <ul>
        <li className="text-gray-400"><span className="text-orange-700 font-semibold">3º</span> Gabriel Gomes</li>
        <li className="text-gray-400"><span className="text-orange-700 font-semibold">4º</span> Luan Arcandido</li>
        <li className="text-gray-400"><span className="text-orange-700 font-semibold">5º</span> Gabriel Silva</li>
      </ul>
    </div>
  );
}
