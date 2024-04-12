import { useEffect } from "react";
import { useParams } from "react-router-dom";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";
import commonStore from "../stores/commonStore";
import todoInputStore from "../stores/TodoInputStore";

// TODO: Style it

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

    return (
        <>
            <div>
                <p>{id}</p>
                {!isEditing ? (
                    <div>
                        <p>{todo.name}</p>
                        <p>{todo.description}</p>
                    </div>
                ) : (
                    <>
                        <input
                            type="text"
                            defaultValue={todo.name}
                            onChange={(e) =>
                                todoInputStore.setName(e.target.value)
                            }
                        />
                        <input
                            type="text"
                            defaultValue={todo.description}
                            onChange={(e) =>
                                todoInputStore.setDescription(e.target.value)
                            }
                        />
                    </>
                )}
                {!isEditing ? (
                    <button onClick={() => commonStore.setIsEditing(true)}>
                        Edit
                    </button>
                ) : (
                    <button
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
