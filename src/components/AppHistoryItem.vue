<template>
  <li>
    <div class="item">
      <div class="wrapper">
        <span>{{ data.id }}</span>
        <span>{{ data.name }}</span>
      </div>
      <div class="wrapper">
        <span>{{ data.type }}</span>
        <span>{{ data.date }}</span>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "app-history-item",
  props: {
    historyData: Object,
  },
  setup(props) {
    return {
      data: props.historyData,
    };
  },
};
</script>

<style lang="scss">
li {
  list-style-type: none;
}
span:first-child {
  margin-right: 20px;
}
.wrapper {
  display: flex;
  justify-content: flex-start;
  & + .wrapper {
    justify-content: space-between;
  }
}
.item {
  position: relative;
  display: flex;
  max-height: 100px;
  border: 2px solid rgb(153, 164, 173);
  align-items: center;
  border-radius: 4px;
  width: 100%;
  max-width: 700px;
  margin: 0 auto 10px;

  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
}
</style>
