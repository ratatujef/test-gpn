<template>
  <div class="container">
    <div class="wrapper">
      <ui-input v-model="searchInput" />
      <app-character
        v-for="character in filteredCharacters"
        :key="character.id"
        :characterData="character"
        @pushToAdd="() => addHandler(character.id)"
      />
    </div>
    <div class="wrapper">
      <app-character
        v-for="character in addedCharacters"
        :key="character.id"
        :characterData="character"
      />
    </div>
  </div>
</template>

<script>
import getData from "./utils/getDataFromAPI";
import AppCharacter from "./components/AppCharacter.vue";
import UiInput from "./components/UiInput.vue";
export default {
  name: "App",
  async beforeMount() {
    const data = await getData();
    this.charactersData.push(...data);
  },

  data() {
    return {
      charactersData: [],
      searchInput: "",
    };
  },
  methods: {
    addHandler(id) {
      const index = this.charactersData.findIndex((el) => el.id === id);
      this.charactersData[index].added = true;
    },
  },
  computed: {
    filteredCharacters() {
      return this.charactersData.filter(
        (data) =>
          !data.added &&
          data.name.toLowerCase().includes(this.searchInput.toLowerCase())
      );
    },
    addedCharacters() {
      return this.charactersData.filter((data) => {
        return data.added;
      });
    },
  },
  components: { AppCharacter, UiInput },
  // routing
  // sorting
  // moving
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  box-sizing: border-box;
}
.container {
  display: flex;
}
.wrapper {
  position: relative;
  width: 50%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
}
</style>
