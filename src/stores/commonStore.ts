import { action, makeObservable, observable, runInAction } from "mobx";

export class CommonStore {
    isEditing: boolean = false;

    constructor() {
        makeObservable(this, {
            isEditing: observable,
            setIsEditing: action,
        });
    }

    setIsEditing(state: boolean) {
        runInAction(() => {
            this.isEditing = state;
        });
    }
}

const commonStore = new CommonStore();
export default commonStore;
