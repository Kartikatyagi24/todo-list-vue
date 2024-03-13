import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export async function saveTodo(todo) {
    await axios.post(`${API_BASE_URL}/todos`, todo);
}
export async function getTodos() {
    const response = await axios.get(`${API_BASE_URL}/todos`);
    return response.data;
}
export async function markTodoAsDone(todo) {
    await axios.post(`${API_BASE_URL}/dones`, todo);
    await axios.delete(`${API_BASE_URL}/todos/${todo.id}`);
}
export async function getDones() {
    const response = await axios.get(`${API_BASE_URL}/dones`);
    return response.data;
}