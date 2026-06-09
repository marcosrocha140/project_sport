"use client";
import { IoSearchSharp } from "react-icons/io5";
import { MdFilterAlt } from "react-icons/md";
import { SearchMatchCard } from "@/components/ui/SearchMatchCard";
import { SearchCardClub } from "@/components/ui/SearchClubCard";
import { SearchPlayerCard } from "@/components/ui/SearchPlayerCard";
import { teams } from "@/app/data/teams";
import { players } from "@/app/data/players";
import { matches } from "@/app/data/matches";
import { useState } from "react";

export default function SearchPage() {
  const [search, setSearch] = useState("");

  const filterClubs = teams.filter((team) =>
    team.teamName.toLocaleLowerCase().includes(search.toLowerCase()),
  );

  const filterPlayers = players.filter((player) =>
    `${player.FirstName} ${player.LastName}`
      .toLocaleLowerCase()
      .includes(search.toLowerCase()),
  );

   const filterMatches = matches.filter((matche) =>
    `${matche.nameClub1} ${matche.nameClub2}`.toLocaleLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="my-20 px-2 flex flex-col gap-1.5">
      <div className="flex items-center rounded-3xl border border-[#ffffff36] gap-1 bg-[#1f1e1e] p-2">
        <IoSearchSharp className="text-2xl" />
        <input
          className="w-full text-sm"
          type="search"
          placeholder="Pesquise times, jogadores, jogos e mais..."
          name="busca"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex items-center gap-1">
          <MdFilterAlt className="text-xl" />
          <p>Filtro</p>
        </div>
      </div>

      {!search.trim() ? (
        <div>
          <p className="text-center text-gray-400 mt-8">Pesquisa aí...</p>
          <img
            src="https://www.dropbox.com/scl/fi/m8cd2omz1t97wx5xkzlvq/dogSearch.png?rlkey=f5z8s6o1vuu7hg84rn3fs0e9t&st=otyd6kqt&dl=1"
            alt="search Background"
          />
        </div>
      ) : (
        <>
        <div className="flex justify-between p-1 text-sm text-gray-300">
          <p className="text-green-500 font-bold border-b">Todos</p>
          <p>Jogadores</p>
          <p>Clubes</p>
          <p>Jogos</p>
          <p>Campeonatos</p>
        </div>
          {filterPlayers.length > 0 && (
            <>
              <h2 className="text-gray-400 font-semibold mt-2">Jogadores</h2>

              {filterPlayers.map((player) => (
                <SearchPlayerCard key={player.id} {...player} />
              ))}
            </>
          )}

          {filterClubs.length > 0 && (
            <>
              <h2 className="text-gray-400 font-semibold mt-2">Clubes</h2>

              {filterClubs.map((club) => (
                <SearchCardClub
                  key={club.id}
                  clubName={club.teamName}
                  clubImage={club.teamImg}
                  clubCity={club.teamCity}
                  clubCategory={club.teamCategory}
                />
              ))}

              {filterMatches.length > 0 && (
                <>
                  <h2 className="text-gray-400 font-semibold mt-2">
                    Jogos Recentes
                  </h2>

                  {filterMatches.map((matche) => (
                    <SearchMatchCard key={matche.id} {...matche} />
                  ))}
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
