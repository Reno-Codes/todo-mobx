import { useState } from "react";
import todoStore from "../stores/TodoStore";
import "./todoItem.css";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";

interface props {
    todo: Todo;
}

function TodoItem({ todo }: props) {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const navigate = useNavigate();

    return (
        <div
            className="todo-item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            key={todo.id}
        >
            {/* Checkbox */}
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
            {/* Todo Details */}
            <div
                className="todo-details"
                onClick={() => navigate(`/${todo.id}`)}
            >
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

export default observer(TodoItem);
