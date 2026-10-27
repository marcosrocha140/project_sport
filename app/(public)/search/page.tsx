"use client";
import { IoSearchSharp } from "react-icons/io5";
import { MdFilterAlt } from "react-icons/md";
import { SearchMatchCard } from "@/components/ui/SearchMatchCard";
import { SearchCardClub } from "@/components/ui/SearchClubCard";
import { SearchPlayerCard } from "@/components/ui/SearchPlayerCard";
import { useEffect, useState } from "react";

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const [dbClubs, setDbClubs] = useState<any[]>([]);
  const [dbUsers, setDbUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!search.trim()) {
        setDbClubs([]);
        setDbUsers([]);
        return;
      }
      setLoading(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(search)}`);
        const data = await res.json();
        setDbClubs(data.clubs || []);
        setDbUsers(data.users || []);
      } catch (error) {
        setDbClubs([]);
        setDbUsers([]);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(fetchData, 300);
    return () => clearTimeout(timeoutId);
  }, [search]);

  const filterClubs = dbClubs.filter((team) =>
    team.nome.toLocaleLowerCase().includes(search.toLowerCase()),
  );

  const filterPlayers = dbUsers.filter((player) =>
    `${player.nome}`
      .toLocaleLowerCase()
      .includes(search.toLowerCase()),
  );

  // const filterMatches = matches.filter((matche) =>
  //   `${matche.nameClub1} ${matche.nameClub2}`.toLocaleLowerCase().includes(search.toLowerCase()),
  // );

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
            src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1792972559/dogSearch_pbzpsh.png"
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

          {loading && <p className="text-center text-gray-400 mt-4">Buscando...</p>}

          {!loading && filterPlayers.length === 0 && filterClubs.length === 0 && dbClubs.length === 0 && dbUsers.length === 0 && (
            <p className="text-center text-gray-400 mt-4">Nenhum resultado encontrado</p>
          )}

          {dbUsers.length > 0 && (
            <>
              <h2 className="text-gray-400 font-semibold mt-2">Usuários Cadastrados</h2>
              {dbUsers.map((user: any) => (
                <SearchPlayerCard
                  key={user.id}
                  image={user.imagem}
                  FirstName={user.nome.split(" ")[0]}
                  LastName={user.nome.split(" ").slice(1).join(" ") || ""}
                  position={user.tipo === "ADMIN" || user.tipo === "Administrador" ? "Administrador" : "Usuário"}
                />
              ))}
            </>
          )}

          {filterPlayers.length > 0 && (
            <>
              <h2 className="text-gray-400 font-semibold mt-2">Jogadores</h2>
              {filterPlayers.map((player: any) => (
                <SearchPlayerCard key={player.id} {...player} />
              ))}
            </>
          )}

          {dbClubs.length > 0 && (
            <>
              <h2 className="text-gray-400 font-semibold mt-2">Times Cadastrados</h2>
              {dbClubs.map((club: any) => (
                <SearchCardClub
                  key={club.id}
                  clubName={club.nome}
                  clubImage={club.logo}
                  clubCity={club.cidade}
                  clubCategory={club.categoria}
                />
              ))}
            </>
          )}

          {filterClubs.length > 0 && (
            <>
              <h2 className="text-gray-400 font-semibold mt-2">Clubes</h2>
              {filterClubs.map((club: any) => (
                <SearchCardClub
                  key={club.id}
                  clubName={club.teamName}
                  clubImage={club.teamImg}
                  clubCity={club.teamCity}
                  clubCategory={club.teamCategory}
                />
              ))}
            </>
          )}

          {/* {filterMatches.length > 0 && (
            <>
              <h2 className="text-gray-400 font-semibold mt-2">Jogos Recentes</h2>
              {filterMatches.map((matche: any) => (
                <SearchMatchCard key={matche.id} {...matche} />
              ))}
            </>
          )} */}
        </>
      )}
    </div>
  );
}
