import { action, makeObservable, observable, runInAction } from "mobx";
import TodoService from "../services/TodoService";

export class TodoStore {
    //#region Initial states
    todos: Todo[] = [];
    todoService: TodoService;

    constructor() {
        makeObservable(this, {
            todos: observable,
            readTodos: action,
            deleteTodo: action,
            createTodo: action,
            editTodo: action,
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

    async deleteTodo(id: string) {
        try {
            await this.todoService.deleteTodo(id);
            runInAction(() => {
                this.todos = this.todos.filter((todo) => todo.id != id);
            });
        } catch (error) {
            console.error("Error deleting todo:", error);
            alert("Failed to delete selected todo. Please try again.");
        }
    }

    async createTodo(todo: Todo) {
        try {
            const data = await this.todoService.addTodo(todo);
            if (data === "success") {
                runInAction(() => {
                    this.todos.push(todo);
                });
            } else {
                alert("Failed to create new todo. Please try again.");
            }
        } catch (error) {
            console.error("Error creating new todo:", error);
            alert("Failed to create new todo. Please try again.");
        }
    }

    async editTodo(todo: Todo) {
        try {
            const data = await this.todoService.updateTodo(todo);
            if (data) {
                runInAction(() => {
                    // data is only 1 todo, not a full list
                });
            } else {
                alert("Failed to update todo. Please try again.");
            }
        } catch (error) {
            console.error("Error updating todo:", error);
            alert("Failed to update todo. Please try again.");
        }
    }
}

const todoStore = new TodoStore();
export default todoStore;
