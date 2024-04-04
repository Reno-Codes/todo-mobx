import { action, makeObservable, observable, runInAction } from "mobx";
import TodoService from "../services/TodoService";

export class TodoStore {
    todos: Todo[] = [];
    todoService: TodoService;

    constructor() {
        makeObservable(this, {
            todos: observable,
            readTodos: action,
        });

        this.todoService = new TodoService();
    }

    async readTodos() {
        try {
            const data = await this.todoService.getTodos();
            if (data) {
                runInAction(() => {
                    this.todos = data;
                });
            }
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    }
}

const todoStore = new TodoStore();
export default todoStore;
