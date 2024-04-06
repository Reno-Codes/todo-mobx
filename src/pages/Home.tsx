import { useEffect } from "react";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";
import NewTodo from "../components/NewTodo";
import TodoItem from "../components/TodoItem";
import { countTodos } from "../utils/countTodos";

function Home() {
    const { todos } = todoStore;

    useEffect(() => {
        todoStore.readTodos();
    }, [todos]);

    return (
        <>
            <NewTodo></NewTodo>

            <div className="todos-container">
                {todos ? (
                    <>
                        <div>
                            <p>To-do: {countTodos(todos, true)}</p>
                            {todos
                                .filter((todo) => !todo.isCompleted)
                                .map((todo) => {
                                    return (
                                        <TodoItem
                                            key={todo.id}
                                            todo={todo}
                                        ></TodoItem>
                                    );
                                })}
                        </div>

                        <div>
                            <p>Completed: {countTodos(todos, false)}</p>
                            {todos
                                .filter((todo) => todo.isCompleted)
                                .map((todo) => {
                                    return (
                                        <TodoItem
                                            key={todo.id}
                                            todo={todo}
                                        ></TodoItem>
                                    );
                                })}
                        </div>
                    </>
                ) : (
                    <div>No to-dos</div>
                )}
            </div>
        </>
    );
}

export default observer(Home);
