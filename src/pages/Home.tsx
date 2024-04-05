import { useEffect } from "react";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";
import NewTodo from "../components/NewTodo";
import todoInputStore from "../stores/TodoInputStore";

function Home() {
    const { todos } = todoStore;
    const { name, description } = todoInputStore;

    useEffect(() => {
        todoStore.readTodos();
    }, [todos]);

    return (
        <>
            <NewTodo></NewTodo>
            <button
                onClick={() => {
                    const newTodo: Todo = {
                        id: crypto.randomUUID(),
                        name,
                        description,
                        isCompleted: false,
                    };

                    todoStore.createTodo(newTodo);
                    todoInputStore.clear();
                }}
            >
                Create
            </button>

            {todos.map((todo) => {
                return (
                    <div className="todo-item" key={todo.id}>
                        <h3>Todo name: {todo.name}</h3>
                        <h3>Todo description: {todo.description}</h3>
                        <h3>
                            Completed: {todo.isCompleted ? "true" : "false"}
                        </h3>
                    </div>
                );
            })}
        </>
    );
}

export default observer(Home);
