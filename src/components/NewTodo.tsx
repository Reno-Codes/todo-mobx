import todoInputStore from "../stores/TodoInputStore";

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
        </div>
    );
}

export default NewTodo;
