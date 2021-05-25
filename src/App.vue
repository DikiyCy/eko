<template>
  <div id="app">
    <HeaderBlock
      :isActiveInfo="isActiveHeader"
      @update="updateACtive()"
    />

    <div id="nav">
      <button
        @click="clickMain()"
      >
        Main
      </button>

      <button
        @click="clickLogin()"
      >
        Login
      </button>

    </div>
    <router-view
      @login="clickMain()"
    />
    <FooterBlock
      class="footer"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import HeaderBlock from './components/Header.vue';
import FooterBlock from './components/Footer.vue';

export default {
  name: 'app',

  components: {
    HeaderBlock,
    FooterBlock,
  },

  data() {
    return {
      isActiveHeader: false,
    };
  },

  computed: {
    ...mapState([
      'login',
    ]),
  },

  methods: {
    clickMain() {
      this.$router.push({ name: 'Main' });
      this.isActiveHeader = true;
    },

    clickLogin() {
      this.$router.push({ name: 'Login' });
      this.isActiveHeader = false;
    },

    updateACtive() {
      this.isActiveHeader = false;
    },

    chec() {
      console.log('login', this.login)
    }
  }
}
</script>

<style lang="scss">

#app {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: stretch;
  min-height: 100vh;
}

.footer {
  margin-top: auto;
}
</style>
