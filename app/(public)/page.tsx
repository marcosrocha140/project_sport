import Card from "@/components/Card";
import Highlights from "@/components/Highlights";
import TopPlayers from "@/components/TopPlayers";
import { CgFeed } from "react-icons/cg";

import { posts } from "../data/posts";

export default function HomePage() {
  return (
    <main className="min-h-screen mt-15 pt-5 bg-[url('https://www.dropbox.com/scl/fi/v8ix80vbc2nzs1ryhe9jx/bg-ranking.png?rlkey=87zqpyn1g7bzvn3ip1ygupsjd&st=4yq3x35n&dl=1')]">
      <section className="w-[90%] md:w-[88%] mx-auto text-white dark:text-black pb-20">
        <header className="flex text-white items-center gap-1">
          <CgFeed className="text-2xl" />
          <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Últimas Notícias
          </h2>
        </header>

        <hr className="border-black/20 dark:border-black/10" />

        <div className="flex flex-col gap-4 mt-6">
          
          {
            posts.map((post) =>(
              <Card key={post.id} {...post}/>
            ))
          }

          <aside className="hidden md:flex flex-col gap-2">
            <Highlights />
            <TopPlayers />
          </aside>
        </div>
      </section>
    </main>
  );
}

