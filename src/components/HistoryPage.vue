<template>
  <h2>APP History</h2>
  <div class="btn-group">
    <button
      v-for="tab in tabs"
      :key="tab"
      :class="{ button: true, 'button--active': tab === activeTab }"
      @click="() => changeTab(tab)"
    >
      {{ tab }}
    </button>
  </div>
  <ul>
    <app-history-item
      v-for="history in historyList"
      :key="history.actionID"
      :historyData="history"
    />
  </ul>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import AppHistoryItem from "./AppHistoryItem";
export default {
  name: "HistoryPage",
  components: { AppHistoryItem },
  setup() {
    const tabs = ["All", "add", "delete"];
    const store = useStore();
    const activeTab = ref("All");
    const changeTab = (tab) => {
      activeTab.value = tab;
    };

    const historyList = computed(() => {
      return store.state.history.filter((el) => {
        if (activeTab.value === "All") return el;
        else return el.type === activeTab.value;
      });
    });
    return {
      historyList,
      activeTab,
      tabs,
      changeTab,
    };
  },
};
</script>

<style>
.button--active {
  box-shadow: 0 0 5px 0px #2c3e50;
}
</style>
