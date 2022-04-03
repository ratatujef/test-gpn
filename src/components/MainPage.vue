<template>
  <div v-if="store.state.data.length" class="wrapper">
    <ui-input v-model="searchInput" />
    <div class="column">
      <app-character
        v-for="character in filteredCharacters"
        :key="character.id"
        :characterData="character"
      />
    </div>
    <div class="column">
      <app-character
        v-for="character in addedCharacters"
        :key="character.id"
        :characterData="character"
      />
    </div>
  </div>
  <div v-else>
    <p>...loading</p>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import AppCharacter from "./AppCharacter.vue";
import UiInput from "./UiInput.vue";
export default {
  name: "Main-Page",

  setup() {
    const store = useStore();
    const searchInput = ref("");
    const sorting = (a, b) => {
      return a.name.toLowerCase().match(new RegExp(searchInput.value, "g"))
        ?.length >
        b.name.toLowerCase().match(new RegExp(searchInput.value, "g"))?.length
        ? 1
        : -1;
    };
    const filteredCharacters = computed(() => {
      const list = store.state.data?.filter((el) => {
        return (
          !el.added &&
          el.name.toLowerCase().includes(searchInput.value.toLowerCase())
        );
      });
      return searchInput.value ? list.sort(sorting) : list;
    });
    const addedCharacters = computed(() =>
      store.state.data?.filter((el) => el.added)
    );
    return {
      searchInput,
      filteredCharacters,
      addedCharacters,
      store,
    };
  },
  components: { AppCharacter, UiInput },
};
</script>

<style lang="scss">
.column {
  position: relative;
  width: calc(50% - 10px);
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  & + .column {
    margin-left: 10px;
  }
}
.wrapper {
  padding: 1rem;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
</style>
