import { supabase } from "./supabaseClient";

class BaseService {
    // Read todos
    protected async fetchTodos(tableName: string): Promise<Todo[]> {
        let query = supabase.from(tableName).select();

        const { data, error } = await query;

        if (error) throw new Error(error.message);

        return data;
    }
}

export default BaseService;
