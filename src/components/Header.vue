<template>
  <header
    class="header"
  >

    <a
      class="header__link"
      href="#"
    >
      <div class="header__logo" />
    </a>

    <template
      v-if="isActive"
    >
      <div
        class="header__info-user"
      >
        Ваш логин: {{ login }}
      </div>

      <Button
        @clicked="logout()"
      >
        Выход
      </Button>
    </template >

  </header>
</template>

<script>
import Button from './core/Button.vue';
import { mapState } from 'vuex';

export default {
  name: 'HeaderBlock',

  components: {
    Button,
  },

  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
    isActiveInfo: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isActive: this.isActiveInfo,
    };
  },

  computed: {
    ...mapState([
      'login',
    ]),
  },

  watch: {
    'isActiveInfo': 'updateProps'
  },

  methods: {
    logout() {
      console.log('logout from main page');
      this.isActive = false;
      this.$router.push({ name: 'Login' });
      this.$emit('update');
    },
    updateProps() {
      this.isActive = this.isActiveInfo;
    }
  },

}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 33px;
  padding: 0 10px;

  &__link {
    margin-right: auto;
  }

  &__logo {
    height: 79px;
    width: auto;
    min-width: 180px;
    background-image: url('../assets/logo.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }

  &__info-user {
    margin-top: 15px;
    color: $GRAY_1;
    font-size: 14px;
    font-family: $FONT_MAIN;
  }
}
</style>
