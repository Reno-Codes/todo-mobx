import BaseService from "./BaseService";

class TodoService extends BaseService {
    async getTodos(): Promise<Todo[]> {
        return this.fetch("todo-mobx");
    }

    async deleteTodo(id: string): Promise<void> {
        return this.delete("todo-mobx", id);
    }

    async addTodo(todo: Todo): Promise<string> {
        return this.create("todo-mobx", todo);
    }
}

export default TodoService;
