import Image from "next/image";

export default function Menu() {
    return (
        <div className="font-body text-gray-500 h-auto flex flex-col w-1/5 border border-l-2 hidden lg:flex">
            <div className="mb-2 shadow-lg">
                <Image
                    src="/next-logo.png"
                    alt="next.js logo"
                    width={244}
                    height={62}
                />
            </div>

            <div className="px-6 flex flex-col items-start text-sm">

                <button className="text-bright pt-7 pb-2.5">Início</button>
                <button className="pb-2.5">Minha Lista</button>
                <hr className="text-gray-500 bg-gray-500 w-full border my-4"/>

                <span className="text-blue-800 text-xs py-3">NAVEGAR</span>
                <button className="pb-2.5">Treinamentos</button>
                <button className="pb-2.5">Trilhas</button>
                <button className="pb-2.5">Podcasts</button>
                <hr className="text-gray-500 bg-gray-500 w-full border my-4" />

                <span className="text-blue-800 text-xs py-3">CATEGORIAS</span>
                <button className="pb-2.5">Ferramentas e Sistemas</button>
                <button className="pb-2.5">Gestão Estratégica</button>
                <button className="pb-2.5">Produtos</button>
                <div className="flex flex-row align-center">
                    <button className="text-bright ml-4 text-sm py-1">Ver todas</button>
                    <div className="ml-2 flex justify-center">
                        <Image
                            src="/rightArrow.svg"
                            alt="right arrow icon"
                            width={16}
                            height={16}
                        />
                    </div>
                </div>
                <hr className="text-gray-500 bg-gray-500 w-full border my-4" />

                <span className="text-blue-800 text-xs py-3">MATERIAL DE APOIO</span>
                <button className="pb-2.5">Ferramentas</button>
                <button className="pb-2.5">Biblioteca</button>
                <button className="pb-2.5">Anotações</button>
            </div>
        </div>
    )
}