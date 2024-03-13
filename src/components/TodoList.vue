<template>
    <div>
        <h2>Todo List</h2>
        <input v-model="newTodo" placeholder="Add a new todo">
        <button @click="addTodo">Add</button>
        <ul>
            <li v-for="(todo, index) in todos" :key="index">
                {{ todo.title }} (Created on: {{ todo.date }})
                <button @click="markAsDone(index)">Done</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { saveTodo, getTodos, markTodoAsDone } from '../api';

export default {
    name: 'TodoList',
    setup() {
        const newTodo = ref('');
        const todos = ref([]);

        const addTodo = async () => {
            if (newTodo.value !== '') {
                const todo = {
                    title: newTodo.value,
                    date: new Date().toLocaleString()
                };
                await saveTodo(todo);
                newTodo.value = '';
                fetchTodos();
            }
        };

        const markAsDone = async (index) => {
            const todo = todos.value[index];
            await markTodoAsDone(todo);
            fetchTodos();
        };

        const fetchTodos = async () => {
            todos.value = await getTodos();
        };

        onMounted(fetchTodos);

        return {
            newTodo,
            todos,
            addTodo,
            markAsDone
        };
    }
}
</script>