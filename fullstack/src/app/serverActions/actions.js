"use server";
import { revalidatePath } from "next/cache";
import connectMongoDB from "../../../libs/connect";
import Todo from "../../../models/todoModel";
import { redirect } from "next/navigation";

export async function addTodo(formData) {
    try {
        const description = formData.get("description");
        await connectMongoDB();
        await Todo.create({ description });
        redirect("/");
    } catch (error) {
        return { message: "Failed to create todo" };
    }
}

export async function updateTodo(formData) {
    try {
        const id = formData.get("id");
        const description = formData.get("description");
        await connectMongoDB();
        await Todo.findByIdAndUpdate({_id:id}, { description }, { new: true });
        redirect("/");
    } catch (error) {
        return { message: "Failed to update todo" };
    }
}

export async function deleteTodo(formData) {
    try {
        const id = formData.get("id");
        await connectMongoDB();
        await Todo.findByIdAndDelete({_id:id});
        revalidatePath("/");
    } catch (error) {
        return { message: "Failed to Delete todo" };
    }
}