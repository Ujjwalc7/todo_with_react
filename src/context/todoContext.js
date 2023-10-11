import { createContext, useContext } from "react";

export const todoConstext = createContext({
    todos: [
        {
            id: 1,
            todo: "message",
            completed: false,
        },
    ],
    addTodo: (todo)=>{},
    updateTodo: (id, todo)=>{},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
})

export const useTodo = () => {
    return useContext(todoConstext)
}

export const TodoProvider = todoConstext.Provider 
