import { Request, Response } from "express";
import { addNewTodo, getAllTodo } from "../queries/queries";

export const getAllTodos = async (req: Request, res: Response) => {
    const todos = await getAllTodo();
    res.status(200).send(todos);
};

// export const getTodoById = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const todo = await TodoService.getTodoById(parseInt(id));
//     if (todo) {
//         res.status(200).json(todo);
//     } else {
//         res.status(404).json({ message: "Todo not found" });
//     }
// };

export const addTodo = async (req: Request, res: Response) => {
    try {
        const { title, description, completed } = req.body;
        const todo: {
            title: string;
            description: string;
            completed: boolean;
        } = {
            title,
            description,
            completed,
        };
        const [id] = await addNewTodo(todo);
        res.status(201).json({ id });
    } catch (error) {
        console.log("error: ", error);
        res.status(501).send(error);
    }
};

// export const updateTodo = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const { title, completed } = req.body;
//     const updated = await TodoService.updateTodo(parseInt(id), {
//         title,
//         completed,
//     });
//     if (updated) {
//         res.status(200).json({ message: "Todo updated" });
//     } else {
//         res.status(404).json({ message: "Todo not found" });
//     }
// };

// export const deleteTodo = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const deleted = await TodoService.deleteTodo(parseInt(id));
//     if (deleted) {
//         res.status(200).json({ message: "Todo deleted" });
//     } else {
//         res.status(404).json({ message: "Todo not found" });
//     }
// };
