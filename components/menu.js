import Image from "next/image";

export default function Menu() {
    return (
        <div className="font-body text-gray-500 h-screen flex flex-col w-1/5">
            <div>
                <Image
                    src="/next-logo.png"
                    alt="next.js logo"
                    width={244}
                    height={62}
                />
            </div>

            <div className="px-6 flex flex-col items-start">

                <button className="text-bright py-1">Início</button>
                <button className="py-1">Minha Lista</button>
                <hr className="text-gray-500 w-auto"/>

                <span className="text-blue-800 py-3">NAVEGAR</span>
                <button className="py-1">Treinamentos</button>
                <button className="py-1">Trilhas</button>
                <button className="py-1">Podcasts</button>
                <hr />

                <span className="text-blue-800 py-3">CATEGORIAS</span>
                <button className="py-1">Ferramentas e Sistemas</button>
                <button className="py-1">Gestão Estratégica</button>
                <button className="py-1">Produtos</button>
                <button className="text-bright ml-2 text-sm py-1">Ver todas</button> {/* seta aqui! */}
                <hr />

                <span className="text-blue-800 py-3">MATERIAL DE APOIO</span>
                <button className="py-1">Ferramentas</button>
                <button className="py-1">Biblioteca</button>
                <button className="py-1">Anotações</button>
            </div>
        </div>
    )
}