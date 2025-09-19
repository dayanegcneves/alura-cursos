import './titulo-do-formulario.estilos.css'

export function TituloFormulario({ children }) {
    return (
        <h2 className='form-titulo'>{children}</h2>
    )
}