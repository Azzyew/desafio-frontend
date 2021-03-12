import Image from "next/image";

export default function Card(props) {
    const card = props.card;

    return (
        <div className="mt-5 lg:w-62">
            <div className={`h-48 w-82 rounded-md flex ${card.bg} justify-between bg-contain lg:w-62 lg:h-36`}> {/* AQUI VAI A FOTO DE BACKGROUND! */}
                <div className="bg-white bg-opacity-85 text-xs w-auto h-6 flex rounded-l-none rounded-t-none rounded-md">
                    <span className={`pt-1 px-2 ml-1 ${card.categoryColor} lg:hidden`}>{card.category}</span>
                </div>

                <div className="bg-white bg-opacity-85 mr-4 mb-4 flex self-end rounded-3xl lg:mr-0 lg:ml-32">
                    <div className="text-sm self-end px-2 py-0.5 flex-row items-center">
                        <Image
                            src={card.src}
                            alt={card.alt}
                            width={card.w}
                            height={card.h}
                        />
                        <span className="text-bright pl-1 flex-auto">| </span>
                        <span className="text-bright pl-1 flex-auto">{card.time}</span>
                    </div>
                </div>

                <div className="flex">
                    <div className="w-3/5 h-1.5 bg-pale"/>
                    <div className="w-2/5 h-1.5 bg-primary"/>
                </div>
            </div>
            
            <div>
                <h1 className="text-gray-900 text-sm pt-4 pb-1">Lorem ipsum dolor sit amet, consectetuer adipiscing e...</h1>
                <div className="flex text-sm pb-2">
                    <h3 className="text-gray-500 pr-2 text-xs">{card.area}</h3>
                    {(card.clock) ? 
                    <div>
                        <span className="text-gray-500 pr-2">| </span>
                        <Image
                            src="/clock.svg"
                            alt="clock icon"
                            width={11}
                            height={11}
                        />
                        <span className="text-gray-500 pl-1">+ 4 min</span>
                    </div>
                    : null}
                 </div>
            </div>
        </div>
    )
}