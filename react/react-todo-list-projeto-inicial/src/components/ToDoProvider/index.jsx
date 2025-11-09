import { useEffect, useState } from "react";
import TodoContext from "./TodoContext";

const TODOS = 'todos'

export function ToDoProvider({ children }) {

    const [showDialog, setShowDialog] = useState(false)
    const [selectedTodo, setSelectedTodo] = useState()

    const openFormEditDialog = (todo) => {
        if (todo) {
            setSelectedTodo(todo)
        }
        setShowDialog(true)
    }

    const closeDialog = () => {
        setShowDialog(false)
        setSelectedTodo(null)
    }

    const savedTodos = localStorage.getItem(TODOS)

    const [todos, setTodos] = useState(savedTodos ? JSON.parse(savedTodos) : [])

    useEffect(() => {
        localStorage.setItem(TODOS, JSON.stringify(todos))
    }, [todos])

    const addToDo = (formData) => {
        const description = formData.get('description')
        setTodos(prevTodos => {
            const newTodo = {
                id: prevTodos.length,
                description,
                completed: false,
                createdAt: new Date().toISOString()
            }

            return [...prevTodos, newTodo]
        })
    }

    const toggleTodoCompleted = (todo) => {
        setTodos(prevTodos => {
            return prevTodos.map(t => {
                if (todo.id == t.id) {
                    return {
                        ...t,
                        completed: !t.completed
                    }
                }
                return t
            })
        })
    }

    const editToDo = (formData) => {
        setTodos(prevTodos => {
            return prevTodos.map(t => {
                if (t.id == selectedTodo.id) {
                    return {
                        ...t,
                        description: formData.get('description')
                    }
                }
                return t
            })
        })
    }

    const deleteTodo = (todo) => {
        setTodos(prevTodos => {
            return prevTodos.filter(t => t.id != todo.id)
        })
    }

    return (
        <TodoContext value={{
            todos,
            addToDo,
            toggleTodoCompleted,
            deleteTodo,
            showDialog,
            openFormEditDialog,
            closeDialog,
            selectedTodo,
            editToDo
        }}>
            {children}
        </TodoContext>
    )
}