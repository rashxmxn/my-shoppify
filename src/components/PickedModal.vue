<template>
    <div class="h-screen overflow-y-auto w-[320px] bg-slate-200 py-4 px-2">
        <h2 class="text-2xl">Picked item</h2>

        <div
            v-for="{ index, counter } in items"
            class="flex justify-between items-center mt-5"
        >
            <span>Shopping item number {{ index }}: {{ counter }}</span>
        </div>

        <div class="mt-5">
            <button
                class="w-full bg-red-500 text-white p-2 rounded"
                @click="$emit('close')"
            >
                Close
            </button>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineEmits(['close'])

const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
})
</script>
