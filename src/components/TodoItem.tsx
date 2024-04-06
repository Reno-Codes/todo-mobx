import { useState } from "react";
import todoStore from "../stores/TodoStore";
import "./todoItem.css";

interface props {
    todo: Todo;
}

function TodoItem({ todo }: props) {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div
            className="todo-item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            key={todo.id}
        >
            <div className="checkbox-container">
                <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={() =>
                        todoStore.editTodo({
                            ...todo,
                            isCompleted: !todo.isCompleted,
                        })
                    }
                />
            </div>
            <div className="todo-details">
                <p className={todo.isCompleted ? "completed-todo" : ""}>
                    {todo.name}
                </p>
                <p className={todo.isCompleted ? "completed-todo" : ""}>
                    {todo.description}
                </p>
            </div>
            <div
                className={`action-buttons-container ${
                    isHovered ? "hovered" : ""
                }`}
            >
                <button
                    className="btn-delete"
                    onClick={() => todoStore.deleteTodo(todo.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default TodoItem;
