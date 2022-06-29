import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/todos",
});

export const getTodos = async () => {
    const response = await api.get("/todos");
    return response.data;
}

export const getTodo = async (id) => {
    const response = await api.get(`/todos/${id}`);
    return response.data;
}

export const addNewTodo = async (todo) => {
    const response = await api.post("/todos", todo);
    return response.data;
}

export const removeTodo = async (id) => {
    const response = await api.delete(`/todos/${id}`);
    return response.data;
}  

export const updateTodo = async (id, todo) => {
    const response = await api.put(`/todos/${id}`, todo);
    return response.data;
}
