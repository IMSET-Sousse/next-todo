import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Todo from "../../models/todoModel";
import connectMongoDB from "../../libs/connect";
import Delete from "./components/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PlusIcon from "./components/plusIcon";

async function getTodos() {
    try {
        await connectMongoDB();
        const todos = await Todo.find({});
        if (!todos) {
            throw new Error("Couldn't fetch the todos.");
        }
        return todos;
    } catch (error) {
        console.error("Error while fetching the todos:", error.message);
        return [];
    }
}

export default async function Home() {
    const data = await getTodos();

    return (
        <div className="wrapper">
            <div className="container">
                <span className="plusbtn">
                    <Link href="/addTodo">
                        <PlusIcon className="icon plus"/>
                    </Link>
                </span>

                {data.length > 0 && (
                    <div className="todo-list">
                        {data.map((todo) => (
                            <div key={todo._id} className="list">
                                <li>{todo.description}</li>
                                <div className="iconWrapper">
                                    <Delete id={todo._id.toString()} />
                                    <span>
                                        <Link
                                            href={{
                                                pathname: `/update/${todo._id}`,
                                                query: { description: todo.description },
                                            }}
                                        >
                                            <EditIcon className="icon" />
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
