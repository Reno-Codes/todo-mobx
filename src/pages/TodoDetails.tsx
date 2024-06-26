import { useEffect } from "react";
import { useParams } from "react-router-dom";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";
import commonStore from "../stores/commonStore";
import todoInputStore from "../stores/TodoInputStore";
import "./todoDetails.css";

function TodoDetails() {
    const { todo } = todoStore;
    const { isEditing } = commonStore;
    const { name, description } = todoInputStore;

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        todoStore.readById(id || "");
    }, [todo]);

    if (!todo) {
        return <div>To-do not found</div>;
    }

    // If todo exists
    useEffect(() => {
        todoInputStore.setName(todo.name);
        todoInputStore.setDescription(todo.description);
    }, [todo]);

    return (
        <>
            <div>
                <p>{id}</p>
                {!isEditing ? (
                    <div>
                        <p className="todo-detail">{todo.name}</p>
                        <p className="todo-detail">{todo.description}</p>
                    </div>
                ) : (
                    // Edit inputs
                    <>
                        <input
                            className="todo-input"
                            type="text"
                            defaultValue={todo.name}
                            onChange={(e) =>
                                todoInputStore.setName(e.target.value)
                            }
                        />
                        <input
                            className="todo-input"
                            type="text"
                            defaultValue={todo.description}
                            onChange={(e) =>
                                todoInputStore.setDescription(e.target.value)
                            }
                        />
                    </>
                )}
                {/* Edit / Confirm button */}
                {!isEditing ? (
                    <button
                        className="edit-btn"
                        onClick={() => commonStore.setIsEditing(true)}
                    >
                        Edit
                    </button>
                ) : (
                    <button
                        className="edit-btn confirm"
                        onClick={() => {
                            commonStore.setIsEditing(false);
                            const newTodo = {
                                ...todo,
                                name,
                                description,
                            };
                            todoStore.editTodo(newTodo);
                            todoInputStore.clear();
                        }}
                    >
                        Confirm
                    </button>
                )}
            </div>
        </>
    );
}

export default observer(TodoDetails);
