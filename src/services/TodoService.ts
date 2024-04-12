import BaseService from "./BaseService";

class TodoService extends BaseService {
    async getTodos(): Promise<Todo[]> {
        return this.fetch("todo-mobx");
    }

    async getTodo(id: string): Promise<Todo[]> {
        return this.fetchById("todo-mobx", id);
    }

    async deleteTodo(id: string): Promise<void> {
        return this.delete("todo-mobx", id);
    }

    async addTodo(todo: Todo): Promise<string> {
        return this.create("todo-mobx", todo);
    }

    async updateTodo(todo: Todo): Promise<Todo[]> {
        return this.update("todo-mobx", todo);
    }
}

export default TodoService;
