<template>
  <button
    class="btn"
    @click="click()"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',

  methods: {
    click() {
      this.$emit('clicked');
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  border: none;
  margin-top: 15px;
  margin-left: 30px;
  background-color: white;
  cursor: pointer;
  color: $GRAY_1;
  font-size: 14px;
  font-family: $FONT_MAIN;
}
</style>
