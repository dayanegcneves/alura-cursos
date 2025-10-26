import { FormButton } from '../FormButton'
import { TextInput } from '../TextInput'
import './todo-form.style.css'

export function ToDoForm({ onSubmit, defaultValue }) {
    return (
        <form action={onSubmit} className="form-task">
            <TextInput
                placeholder='Digite o item que deseja adicionar'
                required
                name='description' 
                defaultValue={defaultValue} />
            <FormButton>Salvar item</FormButton>
        </form>
    )
}