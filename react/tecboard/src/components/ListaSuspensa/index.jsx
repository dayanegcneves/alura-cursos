import './lista-suspensa.estilos.css'

export function ListaSuspensa({itens, ...rest}) {
    return (
        <select {...rest} className='form-lista' name="tema" id="tema" defaultValue="">
            <option value="" disabled >Selecione uma opção</option>
            {itens.map((tema) => {
                return (
                    <option key={tema.id} value={tema.id}>{tema.nome}</option>
                )
            })}
        </select>
    )
}