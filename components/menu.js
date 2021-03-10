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

            <div className="px-4 flex flex-col items-start">

                <button className="text-bright">Início</button>
                <button>Minha Lista</button>
                <hr className="text-gray-500 w-auto"/>

                <span className="text-blue-800">NAVEGAR</span>
                <button>Treinamentos</button>
                <button>Trilhas</button>
                <button>Podcasts</button>
                <hr />

                <span className="text-blue-800">CATEGORIAS</span>
                <button>Ferramentas e Sistemas</button>
                <button>Gestão Estratégica</button>
                <button>Produtos</button>
                <button className="text-bright ml-2 text-sm">Ver todas</button> {/* seta aqui! */}
                <hr />

                <span className="text-blue-800">MATERIAL DE APOIO</span>
                <button>Ferramentas</button>
                <button>Biblioteca</button>
                <button>Anotações</button>
            </div>
        </div>
    )
}