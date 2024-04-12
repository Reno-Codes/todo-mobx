import { useEffect } from "react";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";
import NewTodo from "../components/NewTodo";
import TodoItem from "../components/TodoItem";
import { countTodos } from "../utils/countTodos";
import "./home.css";

function Home() {
    // Store states
    const { todos } = todoStore;

    useEffect(() => {
        todoStore.readTodos();
    }, [todos]);

    return (
        <>
            <NewTodo></NewTodo>

            <div className="todos-container">
                {todos.length > 0 ? (
                    <>
                        <div className="todos-section">
                            <p>
                                To-do:{" "}
                                <span className="ongoing">
                                    {countTodos(todos, true)}
                                </span>
                            </p>
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

                        <div className="todos-section">
                            <p>
                                Completed:{" "}
                                <span className="completed">
                                    {countTodos(todos, false)}
                                </span>
                            </p>
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
