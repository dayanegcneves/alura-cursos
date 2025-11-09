import './botao.estilos.css'

export function Botao({children}) {
    return(
        <button type='submit' className='form-botao'>
            {children}
        </button>
    )
}