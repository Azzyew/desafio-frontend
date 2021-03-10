export default function SpecialCard(props) {
    const specialCard = props.specialCard;

    return (
        <div className={`h-auto w-60 rounded-md flex bg-cover flex ${specialCard.bg}`}> {/* AQUI VAI A FOTO DE BACKGROUND! */}
            <div className="pt-8 pb-6 px-6">
                <div>
                    <h1 className="text-white font-body text-2xl">{specialCard.title}</h1>
                    <span className="text-yellow-200 font-body text-2xl">{specialCard.titleSpan}</span>

                    <div className="mt-9">
                        <h3 className="text-white font-body text-sm">Nome</h3>
                        <h3 className="text-white font-body text-sm">Sobrenome</h3> 
                    </div>
                </div>

                <div className="mt-7 flex place-self-end">
                    <button className="text-white font-body bg-primary w-auto h-auto text-sm py-2 px-3 rounded-sm">SAIBA MAIS</button>
                </div>
            </div>
        </div>
    )
}