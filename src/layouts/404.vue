<template>
    <main class="max-w-5xl p-5 bg-blue-200 mx-auto my-10 text-center">
        <router-view />
    </main>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useMeta } from 'vue-meta'

useMeta({
    title: '404 - Not found!',
})

const router = useRouter()
</script>
