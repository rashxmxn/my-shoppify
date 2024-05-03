import { defineStore, acceptHMRUpdate } from 'pinia'

export const usePickedItemsStore = defineStore('pickedItems', {
    state: () => {
        return {
            pickedItems: [],
        }
    },

    getters: {},

    actions: {
        pickItem(index) {
            const item = this.pickedItems.find((item) => item.index === index)

            if (item) {
                item.counter += 1
                return
            }
            this.pickedItems.push({
                index,
                counter: 1,
            })
        },
    },
})

if (import.meta.hot)
    import.meta.hot.accept(
        acceptHMRUpdate(usePickedItemsStore, import.meta.hot)
    )
