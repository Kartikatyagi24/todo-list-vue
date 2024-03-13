<template>
    <div>
        <h2>Done List</h2>
        <ul>
            <li v-for="(done, index) in dones" :key="index">
                {{ done.title }} (Created on: {{ done.date }})
            </li>
        </ul>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getDones } from '../api';

export default {
    name: 'DoneList',
    setup() {
        const dones = ref([]);

        onMounted(async () => {
            dones.value = await getDones();
        });

        return {
            dones
        };
    }
}
</script>