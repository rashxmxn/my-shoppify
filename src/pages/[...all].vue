<template>
    <div class="py-4 text-2xl bg-red-500 text-center">Page Not found!</div>
    <v-button @click="$router.back()">go back</v-button>
</template>

<route lang="yaml">
meta:
    layout: 404
</route>

<script setup></script>
