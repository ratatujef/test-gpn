import { createStore } from "vuex";
let actionID = 100;
export const store = createStore({
  state() {
    return {
      data: [],
      history: [],
    };
  },
  mutations: {
    ADD_DATA(state, newData) {
      state.data = [...state.data, ...newData];
    },
    TOGGLE_ITEM(state, id) {
      const index = state.data.findIndex((el) => el.id === id);
      state.data[index].added = !state.data[index].added;
    },
    PUSH_HISTORY(state, item) {
      state.history.push({
        id: item.id,
        type: item.added ? "add" : "delete",
        name: item.name,
        date: new Date().toLocaleString("ru"),
        actionID: actionID++,
      });
    },
  },
  actions: {
    CHANGE_ITEM(context, itemData) {
      context.commit("TOGGLE_ITEM", itemData.id);
      context.commit("PUSH_HISTORY", itemData);
    },
  },
});
