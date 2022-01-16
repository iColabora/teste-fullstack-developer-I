import { writable } from 'svelte/store'

// main use App.svelte
const dataTicket = writable()
const selectedTask = writable('Todos')

export {
    dataTicket,
    selectedTask,
}
