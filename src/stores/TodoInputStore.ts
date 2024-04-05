import { action, makeObservable, observable, runInAction } from "mobx";

export class TodoInputStore {
    name: string = "";
    description: string = "";

    constructor() {
        makeObservable(this, {
            name: observable,
            description: observable,
            setName: action,
            setDescription: action,
            clear: action,
        });
    }

    setName(name: string) {
        runInAction(() => {
            this.name = name;
        });
    }

    setDescription(description: string) {
        runInAction(() => {
            this.description = description;
        });
    }

    clear() {
        runInAction(() => {
            this.name = "";
            this.description = "";
        });
    }
}

const todoInputStore = new TodoInputStore();
export default todoInputStore;
