export default function specialCard(props) {
    const specialCard = props.specialCard;

    return (
        <div>
            <div className={`h-48 w-auto rounded-md flex ${specialCard.bg} justify-between`}> {/* AQUI VAI A FOTO DE BACKGROUND! */}
                <div>
                    <h1 className="text-white font-body">{specialCard.title}</h1>
                    <span className="text-yellow-400 font-body">{specialCard.titleSpan}</span>

                    <h3 className="text-white font-body">Nome</h3>
                    <h3 className="text-white font-body">Sobrenome</h3>
                </div>

                <button className="text-white font-body">SAIBA MAIS</button>
            </div>
        </div>
    )
}