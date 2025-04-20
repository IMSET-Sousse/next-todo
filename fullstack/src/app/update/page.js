import { updateTodo } from "../serverActions/actions";

const Page = ({ params, searchParams }) => {
    return (
        <div className="addTodo">
            <form action={updateTodo}>
                <span>Current Todo = {searchParams.description}</span>
                <input 
                    type="text" 
                    name="description" 
                    placeholder="Enter updated todo" 
                    defaultValue={searchParams.description}
                />
                <input 
                    type="hidden" 
                    name="id" 
                    value={params.id} 
                    readOnly 
                />
                <button className="update">Update Todo</button>
            </form>
        </div>
    )
}

export default Page;