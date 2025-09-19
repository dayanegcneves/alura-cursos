import './campo-de-formulario.estilos.css'

export function CampoDeFormulario({ children }) {
    return (
        <fieldset className='form-campo'>
            {children}
        </fieldset>
    )
}