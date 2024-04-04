import { useEffect } from "react";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";

function Home() {
    const { todos } = todoStore;
    useEffect(() => {
        todoStore.readTodos();
    }, []);

    return (
        <>
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
