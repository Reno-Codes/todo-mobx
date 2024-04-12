/**
 * Counts the number of todos based on the completion state.
 *
 * @param {Todo[]} todos - The array of todos to count.
 * @param {boolean} completeState - The completion state to filter by.
 * @return {number} The count of todos matching the completion state.
 */
export function countTodos(todos: Todo[], completeState: boolean): number {
    return todos.reduce((count, todo) => {
        return todo.isCompleted === completeState ? count : count + 1;
    }, 0);
}
