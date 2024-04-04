import BaseService from "./BaseService";

class TodoService extends BaseService {
    async getTodos(): Promise<Todo[]> {
        return this.fetchTodos("todo-mobx");
    }
}

export default TodoService;
