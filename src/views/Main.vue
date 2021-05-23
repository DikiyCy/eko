<template>
  <section class="main">

    <div class="main__content">

      <div class="main__panel">
        <Button
          class="main__btn"
          @clicked="complaint()"
        >
          Оставить жалобу
        </Button>
      </div>

      <div class="main__panel">

      </div>

    </div>

  </section>
</template>

<script>
import Button from '../components/core/Button.vue';

export default {
  name: 'Main',

  components: {
    Button,
  },

  methods: {
    complaint() {
      alert('Вы оставили жалобу, молодец');
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  &__content {
    max-width: 1250px;
    margin: 0 auto;
    padding: 0 40px;
  }

  &__panel {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border: 5px solid $GRAY_8;
    background: #fff;
    border-radius: 5px;
    font-family: $FONT_MAIN;
  }

  &__btn {
    background-color: $BLUE_3;
    font-weight: 500;
    border-radius: 3px;
    color: white;
    padding: 6px 12px;
    margin-top: 10px;

    &:hover {
      background-color: $BLUE_4 ;
    }
  }
}
</style>
