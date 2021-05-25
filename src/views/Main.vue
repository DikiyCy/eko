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

      <div class="main__panel main__panel_doc">

        <div
          v-for="(doc, ind) in answer.body"
          :key="ind"
          class="main__doc doc"
        >
          <a
            class="doc__wrapp"
            tabindex="0"
            :href="link"
            target="_blank"
            @mousedown="loadDoc(answer.body[ind].id_document, answer.body[ind].doc_type)"
          >

            <div
              :class="['doc__icon', `doc__icon_${answer.body[ind].file_ext}`]"
            />

            <div
              class="doc__descr"
              v-text="doc.doc_name"
            />

          </a>

          <hr
            v-if="ind < answer.body.length - 1"
            class="doc__line"
          />
        </div>

      </div>

    </div>

  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import Button from '../components/core/Button.vue';
import server from '../modules/server.js'

export default {
  name: 'Main',

  components: {
    Button,
  },

  data() {
    return {
      url: 'https://host1.medsafe.tech:40443/',
      hashCurent: '',
    };
  },

  computed: {
    ...mapState([
      'login',
      'auth',
      'answer',
    ]),

    ...mapGetters([
      'crypto',
    ]),

    link() {
      return `${this.url}${this.hashCurent}`;
    }
  },

  methods: {
    complaint() {
      alert('Вы оставили жалобу, молодец');
    },

    loadDoc(id, type) {
      server.download(this.auth[0].id_login, this.auth[0].TK, this.crypto, id, type)
        .then((res) => {
          this.hashCurent = res.body[0].hash;
        })
        .catch(() => {
          alert('Ошибка скачивания документа');
        })
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

    &_doc {
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-start;
    }
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
  .doc {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;

    &__wrapp {
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      background-color: white;
      border-radius: 5px;

      &:hover {
        /* transform: scale(1.08); */
        box-shadow: 0px 0px 8px 0px $GRAY_7;
        cursor: pointer;
      }

      &:active {
        box-shadow: 0px 0px 8px 0px $GREEN_1;
      }

    }

    &__icon {
      width: 48px;
      height: 48px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;

      &_pdf {
        background-image: url('../assets/svg/icon_pdf.svg');
      }
    }

    &__descr {
      font-family: $FONT_MAIN;
      font-size: 14px;
      line-height: 20px;
      color: $GRAY_2;
    }

    &__line {
      width: 100%;
      border: none;
      border-bottom: 1px solid $GRAY_9;
      margin-top: 15px;
      margin-bottom: 15px;
    }
  }
}
</style>
