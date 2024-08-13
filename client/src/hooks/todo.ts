import { useQuery, useMutation, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

interface typeToDo {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    updated_at: Date;
    created_at: Date;
}
export const useTodos = () => {
    return useQuery({
        queryKey: ["todo"],
        queryFn: async (): Promise<typeToDo[]> => {
            const res = await fetch("http://localhost:8080/api/todos");
            return res.json();
        },
        staleTime: 100,
    });
};

export const useAddTodo = () => {
    return useMutation({
        mutationFn: async (todo: {
            title: string;
            description: string;
            completed: boolean;
        }) => {
            console.log(todo);
            return fetch("http://localhost:8080/api/add-todo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(todo),
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todo"] });
        },
    });
};
