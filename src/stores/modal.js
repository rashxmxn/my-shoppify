import { defineStore, acceptHMRUpdate } from 'pinia'

export const useModalStore = defineStore('modal', {
    state: () => {
        return {
            isCartOpen: false,
            isPickedItemsOpen: false,
        }
    },

    getters: {},

    actions: {
        showModal(title) {
            switch (title) {
                case 'cart':
                    this.isCartOpen = true
                    this.isPickedItemsOpen = false
                    break
                case 'pickedItems':
                    this.isPickedItemsOpen = true
                    this.isCartOpen = false
                    break
                default:
                    break
            }
        },
        closeModal(title) {
            switch (title) {
                case 'cart':
                    this.isCartOpen = false
                    break
                case 'pickedItems':
                    this.isPickedItemsOpen = false
                    break
                default:
                    break
            }
        },
    },
})

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useModalStore, import.meta.hot))
