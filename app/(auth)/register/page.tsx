import { RiAiGenerate } from "react-icons/ri";
import { FaArrowsAltH } from "react-icons/fa";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex min-h-full flex-col justify-center px-4 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          src="https://www.dropbox.com/scl/fi/cpnw0mduyyleazzd3zuew/LogoAjustada-removebg-preview.png?rlkey=veukdos60rljaw0jtogmbwwe8&st=ohgj7rgd&dl=1"
          alt="Logo Sport"
          className="mx-auto w-28"
        />
        <h2 className="mt-4 text-left text-2xl/9 font-bold tracking-tight text-white">
          Crie sua conta
        </h2>
        <p className="text-[#a0a0a063] font-light text-[12px]">
          E fique por dentro dos jogos da sua região
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" className="space-y-2">
          <div>
            <label className="block text-sm/6 font-medium text-green-400">
              Nome e Sobrenome
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                placeholder="Asfarifas Souza"
                required
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm/6 font-medium text-green-400">
              Email ou Telefone
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                placeholder="asfarifas@foratemer.org"
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm/6 font-medium text-green-400">
                Senha
              </label>
              <div className="text-sm flex items-center gap-1">
                <a
                  href="#"
                  className="font-semibold text-indigo-400 hover:text-indigo-300"
                >
                  Matenha-me conectado
                </a>
                <input type="checkbox" />
              </div>
            </div>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                placeholder="********"
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-green-700 px-3 py-1.5 text-sm/6 text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Cadastrar
            </button>
          </div>
          <p className="text-[11px] text-center">
            Ao se cadastrar você concorda com os nossos{" "}
            <a href="#" className="text-blue-500">
              Termos de uso
            </a>
          </p>
        </form>
        <div className="flex items-center justify-between my-3 gap-1">
          <hr className="w-full" />
          <p className="text-gray-400 w-full font-extralight text-center">
            Ou entre com
          </p>
          <hr className="w-full" />
        </div>

        <div className="flex gap-2 items-center justify-center">
          <div className="bg-amber-50 w-full mb-1 rounded-sm flex items-center gap-2 p-1 justify-center text-black font-semibold hover:text-amber-50 hover:bg-blue-400">
            <img
              className="w-8.5"
              src="https://www.dropbox.com/scl/fi/ucr51d4u6l984aji0re0i/logo-google.png?rlkey=hb5jmz8nt2pd32u4rt7zlbrxz&st=qh6xokl1&dl=1"
              alt="Logo google"
            />
            <p>Google</p>
          </div>

          <div className="bg-amber-50 w-full mb-1 rounded-sm flex items-center gap-2 p-1 justify-center text-black font-semibold hover:text-amber-50 hover:bg-blue-400">
            <img
              className="w-8.5"
              src="https://www.dropbox.com/scl/fi/iupritw1epbs0pjdetqed/apple-logo.png?rlkey=72tn5eaqxxu64ro5w2e2qlnzn&st=gjwogl66&dl=1"
              alt="Logo google"
            />
            <p>Apple</p>
          </div>
        </div>
      </div>
    </div>
  );
}
