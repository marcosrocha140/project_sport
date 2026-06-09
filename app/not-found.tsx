import Link from "next/link"

export default function notFound() {

    return(
        <div className="flex flex-col items-center">
            <h2 className="text-4xl text-center">Página 404 não encontradada</h2>
            <p>A pagina que você tentou acessar não existe.</p>
            <Link href='/'>
                <button className="bg-blue-900 p-2 rounded-md">Voltar para home</button>
            </Link>
        </div>
    )
}