<template>
    <div class="py-4 text-2xl text-center">Items!</div>

    <router-link
        class="px-4 mr-3 py-2 bg-blue-500 text-white rounded-md mt-4 hover:bg-blue-700"
        to="/"
    >
        Go back to home
    </router-link>

    <router-link
        to="/statistics"
        class="px-4 py-2 bg-blue-500 text-white rounded-md mt-4 hover:bg-blue-700"
    >
        Go to statistics
    </router-link>
</template>

<script setup></script>
