<template>
  <aside class="h-full bg-white  w-[93px]">
    <ul class="flex flex-col gap-3 items-center h-full bg-green-100 gap-16">
      <li class="mb-auto mt-5">
        <router-link src="src/assets/logo.svg" class="" to="/">
          <img src="src/assets/logo.svg" alt="Logo" class="cursor-pointer" />
        </router-link>
      </li>

      <li class="flex items-center">
        <div class="absolute h-[45px] w-1 bg-orange-500 left-0 rounded-[4px]" v-if="$route.path === '/'"></div>
        <router-link class="" to="/">  
            <img src="src/assets/items.svg" alt="items" class="cursor-pointer h-[26px]" />
        </router-link>
      </li>
      <li class="flex items-center ">
        <div class="absolute h-[45px] w-1 bg-orange-500 left-0 rounded-[4px] " v-if="$route.path === '/item'"></div>
        <router-link class="" to="/item">
            <img src="src/assets/history.svg" alt="history" class="cursor-pointer " />
        </router-link>
      </li>
      <li class="flex items-center">
        <div class="absolute h-[45px] w-1 bg-orange-500 left-0 rounded-[4px]" v-if="$route.path === '/statistics'"></div>
        <router-link class="" to="/statistics">
            <img src="src/assets/stats.svg" alt="stats" class="cursor-pointer" />
             </router-link>
      </li>

      <li class="mt-auto mb-10 relative " >
        <button
          class="bg-[#F9A109] rounded-full w-12 h-12 flex items-center justify-center"
          @click="$emit('open-cart')"
        >
        <img src="src/assets/cart.svg" alt="cart" class="invert"/>
        </button>
        <div class="absolute top-0 right-0 bg-red-500 rounded w-[20px] h-[20px] flex items-center justify-center text-white cursor-pointer">
          {{ itemsNumber }}
        </div>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { computed, ref } from "vue";
import { usePickedItemsStore } from "~/stores/pickedItems";
import { useMeta } from "vue-meta";

const pickedItemsStore = usePickedItemsStore();

const itemsNumber = computed(() => {
  return pickedItemsStore.pickedItems.reduce(
    (acc, item) => acc + item.counter,
    0
  );
});
</script>
