/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAddTodo, useTodos } from "../hooks/todo";

interface Props {}
interface typeToDo {
    title: string;
    description: string;
    completed: boolean;
}

const Home = (props: Props) => {
    const { data: todos = [], isLoading, isError } = useTodos();
    const { mutate, data } = useAddTodo();

    const addTodo = (newTodo: typeToDo) => {
        mutate(newTodo);
    };
    return (
        <div>
            <h1 className="text-5xl">Hello World!</h1>
            <div>
                {isLoading && <p>Loading...</p>}
                {isError && <p>Error fetching todos</p>}
                {todos && (
                    <ul>
                        {todos?.map((todo: any) => (
                            <>
                                <li key={todo.id}>{todo.title}</li>
                                <div>{todo.description}</div>
                                <div>{todo.completed}</div>
                            </>
                        ))}
                    </ul>
                )}
            </div>

            <button
                onClick={() => {
                    addTodo({
                        title: "New todo",
                        description: "Description",
                        completed: false,
                    });
                }}
            >
                Add new
            </button>
        </div>
    );
};

export default Home;
