import { supabase } from "./supabaseClient";

class BaseService {
    // Read todos
    protected async fetch(tableName: string): Promise<Todo[]> {
        let query = supabase.from(tableName).select();

        const { data, error } = await query;

        if (error) throw new Error(error.message);

        return data;
    }

    // Delete todo by ID
    protected async delete(tableName: string, id: string): Promise<void> {
        let query = supabase.from(tableName).delete().eq("id", id);

        const { error } = await query;

        if (error) throw new Error(error.message);
    }

    // Create todo
    protected async create(tableName: string, todo: Todo) {
        let query = supabase.from(tableName).insert(todo).single();

        const { error } = await query;

        if (error) throw new Error(error.message);

        return "success";
    }

    // Update todo
    protected async update(tableName: string, todo: Todo): Promise<Todo[]> {
        const { id, name, description, isCompleted } = todo;
        let query = supabase
            .from(tableName)
            .update({
                name: name,
                description: description,
                isCompleted: isCompleted,
            })
            .eq("id", id)
            .select();

        const { data, error } = await query;

        if (error) throw new Error(error.message);

        return data;
    }
}

export default BaseService;
