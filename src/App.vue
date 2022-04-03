<template>
  <div class="container">
    <div class="btn-group">
      <router-link
        v-for="(path, routeName) in pages"
        :key="routeName"
        :to="path"
        :class="{
          button: true,
          'button--active': routeName === $route.name,
        }"
        >{{ routeName }}</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<script>
import getData from "./utils/getDataFromAPI";

export default {
  name: "App",
  beforeMount() {
    setTimeout(async () => {
      const data = await getData();
      if (!data) return;
      this.$store.commit("ADD_DATA", data);
    }, 1000);
  },
  setup() {
    return {
      pages: { home: "/", history: "/history" },
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  font-size: 18px;
  margin-top: 20px;
  box-sizing: border-box;
}
a,
a:visited,
a:active {
  text-decoration: none;
  color: #2c3e50;
  cursor: pointer;
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
