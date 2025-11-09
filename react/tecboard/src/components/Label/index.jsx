import './label.estilos.css'

export function Label({ children, htmlFor }) {
    return (
        <label className='form-campo-label' htmlFor={htmlFor}>
            {children}
        </label>
    )
}