import todoInputStore from "../stores/TodoInputStore";
import todoStore from "../stores/TodoStore";

function NewTodo() {
    const { name, description } = todoInputStore;

    return (
        <div>
            <input
                type="text"
                value={name}
                placeholder="Enter to-do name..."
                onChange={(e) => todoInputStore.setName(e.target.value)}
            />
            <input
                type="text"
                value={description}
                placeholder="Enter a description..."
                onChange={(e) => todoInputStore.setDescription(e.target.value)}
            />

            {name && description && (
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
            )}
        </div>
    );
}

export default NewTodo;
