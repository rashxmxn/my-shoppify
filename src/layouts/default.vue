<template>
    <main class="flex bg-red-500 pr-[320px] h-[100vh] w-screen">
        <Header @open-cart="modalStore.showModal('cart')"></Header>
        <div class="relative h-full w-full bg-green-500">
            <router-view />
        </div>

        <Cart
            v-if="modalStore.isCartOpen"
            @close="modalStore.closeModal('cart')"
            class="absolute right-0 top-0"
        />

        <PickedModal
            v-if="modalStore.isPickedItemsOpen"
            class="absolute right-0 top-0"
            @close="modalStore.closeModal('pickedItems')"
            :items="pickedItemsStore.pickedItems"
        />
    </main>
</template>

<script setup>
import { ref } from 'vue'
import Cart from '~/components/Cart.vue'
import Header from '~/components/Header.vue'
import { useModalStore } from '~/stores/modal'
import { usePickedItemsStore } from '~/stores/pickedItems'

const pickedItemsStore = usePickedItemsStore()

const modalStore = useModalStore()
</script>
