import './card-evento.estilos.css'

export function CardEvento({ evento }) {
    return (
        <div className='card-evento'>
            <img src={evento.capa} alt={evento.titulo} />
            <div className="corpo">
                <p className="corpo-tag">{evento.tema.nome}</p>
                <p className="corpo-data">{evento.data.toLocaleDateString('pt-BR')}</p>
                <h3 className='corpo-titulo'>{evento.titulo}</h3>
            </div>
        </div>
    )
}