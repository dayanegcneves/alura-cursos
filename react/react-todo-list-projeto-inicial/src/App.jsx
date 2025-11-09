import { use } from "react"
import { ChecklistsWrapper } from "./components/ChecklistsWrapper"
import { Container } from "./components/Container"
import { Dialog } from "./components/Dialog"
import { FabButton } from "./components/FabButton"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Heading } from "./components/Heading"
import { IconPlus, IconSchool } from "./components/icons"
import { ToDoForm } from "./components/ToDoForm"
import TodoContext from "./components/ToDoProvider/TodoContext"
import { ToDoGroup } from "./components/ToDoGroup"
import { EmptyState } from "./components/EmptyState"

function App() {
  const {todos, addToDo, showDialog, openFormEditDialog, closeDialog, selectedTodo, editToDo} = use(TodoContext)

  const handleFormSubmit = (formData) => {
    if (selectedTodo) {
      editToDo(formData)
    } else {
      addToDo(formData)
    }
    closeDialog()
  }

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        <ChecklistsWrapper>
          <ToDoGroup
            heading="Para estudar"
            items={todos.filter(t => !t.completed)} />
          {todos.length == 0 && <EmptyState />}
          <ToDoGroup
            heading="Concluído"
            items={todos.filter(t => t.completed)} />
          <Footer>
            <Dialog isOpen={showDialog} onClose={closeDialog}>
              <ToDoForm onSubmit={handleFormSubmit} defaultValue={selectedTodo?.description}/>
            </Dialog>
            <FabButton onClick={() => openFormEditDialog()}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  )
}

export default App
