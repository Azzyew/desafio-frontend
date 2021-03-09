import Image from "next/image";

export default function Footer() {
    return (
        <div className="flex">
            <div className="flex-col">
                <Image
                    src="/house.svg"
                    alt="house icon"
                    width={20}
                    height={21}
                />
                <span>Início</span>
            </div>
            <div className="flex-col">
                <Image
                    src="/bookmark.svg"
                    alt="bookmark icon"
                    width={14.5}
                    height={18.5}
                />
                <span>Minha lista</span>
            </div>
            <div className="flex-col">
                <Image
                    src="/browsew.svg"
                    alt="browsing icon"
                    width={22}
                    height={21}
                />
                <span>Navegar</span>
            </div>
            <div className="flex-col">
                <Image
                    src="/categories.svg"
                    alt="categories icon"
                    width={16}
                    height={9}
                />
                <span>Categorias</span>
            </div>
            <div className="flex-col">
                <Image
                    src="/hat.svg"
                    alt="graduation hat icon"
                    width={21.5}
                    height={17}
                />
                <span>Materiais</span>
            </div>
        </div>
    )
}