import db from "../db/database";

interface ToDo {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    updated_at: Date;
    created_at: Date;
}

export const getAllTodo = async (): Promise<ToDo[]> => {
    return db("todos").select("*");
};

export const getTodoById = async (id: number): Promise<ToDo> => {
    return db("todos").where({ id }).first();
};
export const addNewTodo = async (todo: any): Promise<number[]> => {
    return db("todos").insert(todo);
};
