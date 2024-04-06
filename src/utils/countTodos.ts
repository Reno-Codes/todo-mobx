export function countTodos(todos: Todo[], completeState: boolean) {
    return todos.reduce((count, todo) => {
        return todo.isCompleted === completeState ? count : count + 1;
    }, 0);
}
