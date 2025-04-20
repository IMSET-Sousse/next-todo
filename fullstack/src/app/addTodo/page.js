import { addTodo } from "../serverActions/actions";

const Page = () => {

    return (
        <div className="addTodo">
            <form action={addTodo}>
                <input
                    type="text"
                    name="description"
                    className="form-input"
                    placeholder="Enter your todo"
                    required
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};

export default Page;