<template>
  <div class="character">
    <img
      class="character__img"
      :src="characterData.image"
      :alt="characterData.name"
    />
    <h3>{{ characterData.name }}</h3>
    <button @click="$emit('pushToAdd')" class="button button--add">+</button>
  </div>
</template>

<script>
export default {
  name: "app-character",
  emits: ["pushToAdd"],
  props: {
    characterData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.character {
  position: relative;
  display: flex;
  max-height: 100px;
  border: 2px solid rgb(153, 164, 173);
  align-items: center;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 10px;
  box-sizing: border-box;
  overflow: hidden;
  &__img {
    height: 100%;
    width: 100px;
    margin-right: 10px;
  }
}
.button {
  outline: none;
  border: 2px solid rgb(153, 164, 173);
  border-radius: 4px;
  cursor: pointer;
  background: #fff;
  &--add {
    position: absolute;
    padding: 1rem 2rem;
    font-size: 18px;
    font-weight: bold;
    right: 1rem;
  }
}
</style>
