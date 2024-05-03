<template>
  <div class="flex justify-around mt-8 align-center">
    <p class="text-[26px]">
      <a class="text-[#F9A109]">Shoppingify</a> allows you take your
      <br />shopping list wherever you go
    </p>

    <div
      class="flex w-[275px] h-[50px] rounded-lg border-2 pl-2 overflow-hidden bg-white"
    >
      <img class="w-[26px]" src="src/assets/search.svg" />
      <input
        type="text"
        class="w-full rounded-lg pl-5 focus:outline-none"
        placeholder="search item"
      />
    </div>
  </div>

  <div class="flex flex-wrap gap-3 p-5 grid-cols-4">
    <div
      v-for="index in 8"
      class="flex items-center w-[182px] h-[56px] rounded-[12px] shadow-xl bg-[#FFF] hover:bg-red-500 cursor-pointer pl-4 pr-1 justify-between items-center"
    >
      {{ items[index - 1] }}
      <div
        class="w-[40px] h-[40px] text-[#C1C1C4] text-[28px] flex items-center justify-center"
        @click="
          () => {
            pickedItemsStore.pickItem(items[index - 1]);
            modalStore.showModal('pickedItems');
          }
        "
      >
        +
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useModalStore } from "~/stores/modal";
import { usePickedItemsStore } from "~/stores/pickedItems";

const items = ref([
  "Avocado",
  "Banana",
  "Bunch of carrots 5pcs",
  "Chicken 1kg",
  "Pre-cooked corn 450g",
  "Mandarin Nadorcott",
  "Piele De Sapo Melon",
  "Watermelon",
]);

const pickedItemsStore = usePickedItemsStore();
const modalStore = useModalStore();
</script>
