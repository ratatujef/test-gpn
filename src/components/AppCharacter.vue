<template>
  <div class="character">
    <img
      class="character__img"
      :src="characterData.image"
      :alt="characterData.name"
    />
    <h3>{{ characterData.name }}</h3>
    <button @click="clickHandler" class="button" :class="classes"></button>
  </div>
</template>

<script>
export default {
  name: "app-character",

  props: {
    characterData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    classes() {
      return {
        "button--add": !this.characterData.added,
        "button--delete": this.characterData.added,
      };
    },
  },
  methods: {
    clickHandler() {
      this.$store.dispatch("CHANGE_ITEM", this.characterData);
    },
  },
};
</script>

<style scoped lang="scss">
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
  position: absolute;
  padding: 1rem 2rem;
  font-size: 18px;
  font-weight: bold;
  right: 1rem;
  &:hover {
    box-shadow: 0 0 5px 0px #2c3e50;
  }
  &--add:after {
    content: "+";
  }
  &--delete:before {
    content: "-";
  }
}
</style>
