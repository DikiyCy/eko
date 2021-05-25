<template>
  <input
    class="input"
    :type="type"
    :placeholder="placeholder"
    :value="value"
    @input="input($event)"
  />
</template>

<script>
export default {
  name: 'Input',

  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    }
  },

  methods: {
    input(event) {
      this.$emit('input', event.target.value)
    }
  }
};
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  max-height: 34px;
  border: 1px solid $GRAY_3;
  border-radius: 2px;
  padding: 8px 12px;
  outline: transparent;
  color: $GRAY_2;
  font-family: $FONT_MAIN;

  &::placeholder {
    color: $GRAY_2;
    font-family: $FONT_MAIN;
  }
}
</style>
