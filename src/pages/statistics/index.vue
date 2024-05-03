<template>
    <div>
        <h1 class="text-2xl font-bold">Statistics</h1>

        <p class="my-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
            voluptatem consequuntur molestiae cumque recusandae eos non,
            consectetur, repellat architecto illo nobis, voluptatum dolor!
            Reprehenderit, nam veniam quibusdam ab nulla rem.
        </p>

        <input type="text" v-model="name" />

        <router-link to="/">
            <v-button>Back to home</v-button>
        </router-link>

        <router-link :to="'/statistics/' + name + '?age=' + age">
            <v-button>Go to item's page</v-button>
        </router-link>

        <v-button @click="$router.go(-1)">go back</v-button>
    </div>
</template>

<script setup>
import { useMeta } from 'vue-meta'
import { ref } from 'vue'
import { useUsersStore } from '~/stores/useUsersStore'

const name = ref('')
const age = ref(0)

useMeta({
    title: 'Statistics',
})

// const usersStore = useUsersStore()
</script>
