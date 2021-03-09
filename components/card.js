import Image from "next/image";

export default function Card(props) {
    const card = props.card;

    return (
        <div>
            <div className={`h-48 w-auto rounded-md flex ${card.bg}`}> {/* AQUI VAI A FOTO DE BACKGROUND! */}
                <div className="bg-white bg-opacity-85 text-xs w-24 h-6 flex rounded-l-none rounded-t-none rounded-md">
                    <span className={`pt-1 px-1 ml-1 ${card.categoryColor}`}>{card.category}</span>
                </div>

                <div className="bg-white bg-opacity-85 w-1/4 h-6 flex self-end justify-self-end rounded-3xl">
                    <div className="text-sm px-1 self-end">
                        <Image
                            src="/blueCam.svg"
                            alt="camera icon"
                            width={14.5}
                            height={11}
                        />
                        <span className="text-bright pl-1">| </span>
                        <span className="text-bright pl-1">{card.time}</span>
                    </div>
                </div>

                <div className="flex self-end">
                    <div className="w-3/5 h-1.5 bg-pale"/>
                    <div className="w-2/5 h-1.5 bg-primary"/>
                </div>
            </div>
            
            <div>
                <h1 className="text-gray-800 text-sm pt-4 pb-2">Lorem ipsum dolor sit amet, consectetuer adipiscing e...</h1>
                <div className="flex text-sm pb-2">
                    <h3 className="text-gray-500 pr-2">Produtos</h3>
                    <span className="text-gray-500 pr-2">| </span>
                    <Image
                        src="/clock.svg"
                        alt="clock icon"
                        width={11}
                        height={11}
                    />
                    <span className="text-gray-500 pl-1">+ 4 min</span>
                 </div>
            </div>
        </div>
    )
}