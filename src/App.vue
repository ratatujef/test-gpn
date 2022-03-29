<template>
  <div class="container">
    <div class="btn-group">
      <router-link to="/" class="button">Home</router-link>
      <router-link to="/history" class="button">History</router-link>
    </div>
    <router-view :mainData="charactersData" @pushed="pushHandler" />
    <!-- <main-page :mainData="charactersData" @pushed="pushHandler" /> -->
  </div>
</template>

<script>
// import MainPage from "./components/MainPage";
import getData from "./utils/getDataFromAPI";
export default {
  name: "App",
  async beforeMount() {
    const data = await getData();
    this.charactersData.push(...data);
  },
  data() {
    return {
      charactersData: [],
    };
  },
  // components: { MainPage },
  methods: {
    pushHandler(id) {
      const index = this.charactersData.findIndex((el) => el.id === id);
      this.charactersData[index].added = !this.charactersData[index].added;
    },
  },
  // routing
  // sorting
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  box-sizing: border-box;
}
.container {
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
}
.button {
  border: 2px solid rgb(153, 164, 173);
  border-radius: 4px;
  cursor: pointer;
  background: #fff;
  padding: 1rem;
  text-transform: uppercase;
  margin: 0 5px;
}
.btn-group {
  padding: 1rem;
  display: flex;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
