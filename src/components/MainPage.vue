<template>
  <div class="wrapper">
    <ui-input v-model="searchInput" />
    <div class="column">
      <app-character
        v-for="character in filteredCharacters"
        :key="character.id"
        :characterData="character"
        @pushed="(id) => $emit('pushed', id)"
      />
    </div>
    <div class="column">
      <app-character
        v-for="character in addedCharacters"
        :key="character.id"
        :characterData="character"
        @pushed="(id) => $emit('pushed', id)"
      />
    </div>
  </div>
</template>

<script>
import AppCharacter from "./AppCharacter.vue";
import UiInput from "./UiInput.vue";
export default {
  name: "Main-Page",
  props: {
    mainData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      searchInput: "",
    };
  },
  computed: {
    filteredCharacters() {
      return this.mainData.filter(
        (data) =>
          !data.added &&
          data.name.toLowerCase().includes(this.searchInput.toLowerCase())
      );
    },
    addedCharacters() {
      return this.mainData.filter((data) => {
        return data.added;
      });
    },
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
