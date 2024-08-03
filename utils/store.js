
const obj1 = []

// хранилище модели по id
export const store = {
    get(id) {
        return obj1[id]
    },
    set(id, model) {
        obj1[id] = model
    }
}