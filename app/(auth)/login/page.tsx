'use client'
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault();

    setErro("");
    setCarregando(true);

    try {

      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {"Content-Type": "application/json" 
        },
        body: JSON.stringify({email, senha}),
      });

      const data = await response.json();

      console.log("LOGIN:", response.status, data);

      if(!response.ok){
        setErro(data.error || "erro ao fazer login" );
        return;
      }

      router.push("/");
      router.refresh();
      
    } catch (error) {
      setErro("Erro ao se conectar com oservidor");
    }finally{
      setCarregando(false);
    }
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-5 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          src="https://res.cloudinary.com/dq0dfseeu/image/upload/v1786118197/Logo_zj4dyx.png"
          alt="Logo Sport"
          className="mx-auto w-28"
        />
        <h2 className="mt-4 text-left text-2xl/9 font-bold tracking-tight text-white">
          Olá, Bem vindo 👋
        </h2>
        <p className="text-[#a0a0a063] font-light text-[12px]">
          Sentimos sua falta.
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-2">
          <div>
            <label
              className="block text-sm/6 font-medium text-gray-100"
            >
              Email ou Telefone
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                name="email"
                required
                autoComplete="email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                className="block text-sm/6 font-medium text-gray-100"
              >
                Senha
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-400 hover:text-indigo-300"
                >
                  Esqueceu a senha?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                name="password"
                required
                autoComplete="current-password"
                onChange={(event) => setSenha(event.target.value)}
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>

          {erro && <p className="text-yellow-300">{erro}</p>}

          <div>
            <button
              type="submit"
              disabled={carregando}
              className="flex w-full justify-center rounded-md bg-green-700 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              {carregando ? "Carregando" : "Entrar"}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-400">
          Não possui conta?{" "}
            <Link href='/register' className="font-semibold text-indigo-400 hover:text-indigo-300">Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
}
