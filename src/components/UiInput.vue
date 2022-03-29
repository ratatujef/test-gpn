<template>
  <input
    type="text"
    class="input"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    placeholder="...type here"
  />
</template>

<script>
export default {
  name: "Ui-input",
  props: ["modelValue"],
  emits: ["update:modelValue"],
};
</script>
<style lang="scss">
.input {
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  border: 2px solid rgb(153, 164, 173);
  padding: 0.5rem;
  margin-bottom: 10px;
  color: #2c3e50;
  font-size: 1.25rem;
  font-weight: 500;
}
</style>
