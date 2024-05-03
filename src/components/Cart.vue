<template>
    <div class="h-full w-[320px] bg-slate-600">
        <div class="bg-white p-5 h-full">
            <h2 class="text-2xl">Cart</h2>

            <div class="mt-5">
                <button
                    class="w-full bg-red-500 text-white p-2 rounded"
                    @click="$emit('close')"
                >
                    Close
                </button>
            </div>

            <div class="flex justify-between items-center mt-5">
                <span>Items</span>
                <span>0</span>
            </div>
            <div class="flex justify-between items-center mt-5">
                <span>Total</span>
                <span>0</span>
            </div>
            <div class="mt-5">
                <button class="w-full bg-red-500 text-white p-2 rounded">
                    Checkout
                </button>
            </div>
        </div>
    </div>
</template>

<script setup></script>
