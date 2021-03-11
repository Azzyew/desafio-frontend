import Image from "next/image";

export default function Footer() {
    return (
        <div className="flex justify-evenly mb-1 shadow-top2xl lg:hidden">
            <button className="flex flex-col items-center justify-center text-bright font-body text-xs bg-blue-50 rounded-md w-16 h-12">
                <Image
                    src="/house.svg"
                    alt="house icon"
                    width={20}
                    height={21}
                />
                Início
            </button>
            <button className="flex flex-col items-center justify-center text-gray-500 font-body text-xs rounded-md w-16 h-12">
                <Image
                    src="/bookmark.svg"
                    alt="bookmark icon"
                    width={14.5}
                    height={18.5}
                />
                Minha lista
            </button>
            <button className="flex flex-col items-center justify-center text-gray-500 font-body text-xs rounded-md w-16 h-12">
                <Image
                    src="/browse.svg"
                    alt="browsing icon"
                    width={22}
                    height={21}
                />
                Navegar
            </button>
            <button className="flex flex-col items-center justify-center text-gray-500 font-body text-xs rounded-md w-16 h-12">
                <Image
                    src="/categories.svg"
                    alt="categories icon"
                    width={20}
                    height={20}
                />
                Categorias
            </button>
            <button className="flex flex-col items-center justify-center text-gray-500 font-body text-xs rounded-md w-16 h-12">
                <Image
                    src="/hat.svg"
                    alt="graduation hat icon"
                    width={21.5}
                    height={19}
                />
                Materiais
            </button>
        </div>
    )
}