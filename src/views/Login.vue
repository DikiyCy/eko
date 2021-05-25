<template>
  <div
    class="login"
  >
    <section class="form">

      <div class="form__content">

        <h2
          class="login__title"
        >
          Вход в личный кабинет
        </h2>

        <h4
          class="login__descr"
        >
          Используйте логин и пароль из памятки
        </h4>

        <Input
          placeholder="Логин"
          v-model="login"
        />

        <Input
          class="mt-10"
          type="password"
          placeholder="Пароль"
          v-model="password"
        />

        <Button
          class="login__btn"
          @clicked="sendAuth()"
        >
          Войти
        </Button>

      </div>

    </section>

    <section class="about">

      <div class="about__content">

        <h1 class="about__title">
          ПОЧЕМУ "ЭКО-ГОСПИТАЛЬ"?
        </h1>

        <hr />

        <ul class="about__list">
          <li
            v-for="(item, index) in aboutList"
            :key="index"
            class="about__item"
          >
            <span>&#128504;</span>
            {{ item }}
          </li>
        </ul>

        <hr />

      </div>

    </section>

    <section class="features">

      <div class="features__content">

        <div class="features__item">

          <div class="features__icon" />

          <h4 class="features__title">
            Личный кабинет
          </h4>

          <p class="features__descr">
            Позволяет хранить, пересылать или скачивать в электронном виде анализы, медицинские заключения, справки и другие медицинские данные.
          </p>

        </div>

        <div class="features__item">

          <div class="features__icon" />

          <h4 class="features__title">
            Доступ в любой точке мира
          </h4>

          <p class="features__descr">
            С помощью приложения «MedSafe.connect» Вы можете пользоваться личным кабинетом всегда и везде.
            <br>
             «MedSafe.connect» осуществляет связь владельца мобильного устройства со своим личным кабинетом. Все данные хранятся на защищенном сервере медицинской организации и доступны только их владельцу.
          </p>

        </div>

        <div class="features__item">

          <div class="features__icon" />

          <h4 class="features__title">
            Забота об экологии
          </h4>

          <p class="features__descr">
            Благодаря нашим программным продуктам каждый год экономится столько бумаги, сколько можно получить от переработки древесины с лесного участка, равного площади Летнего сада Санкт-Петербурга.
          </p>

        </div>

      </div>

    </section>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Input from '../components/core/Input.vue';
import Button from '../components/core/Button.vue';
import server from '../modules/server.js'
import answerServer from '../modules/answerFromServer.js';

export default {
  name: 'Login',

  components: {
    Input,
    Button,
  },

  data() {
    return {
      login: '',
      password: '',
      aboutList: [
        ' Возможности нашего сервиса соответствуют значению латинского слова "Hospitium" - ГОСТЕПРИИМСТВО.',
        'Мы создаем максимально комфортные условия обслуживания для наших клиентов, упрощая и ускоряя процессы взаимодействия. Вам больше не нужно стоять в очередях и тратить свое время на поездки за результатами обследований!',
        'Исключая бумажный документооборот и лишние передвижения по городу, мы вместе с нашими клиентами экономим бумагу, углеводород, сохраняем лес, снижаем загрязнённость воздуха.',
        'Мы предоставляем возможность пользоваться личным кабинетом, консультироваться со специалистами по имеющейся в личном кабинете информации, получать подписку на медицинскую литературу.',
      ],
    };
  },

  computed: {
    ...mapGetters([
      'crypto',
    ]),
  },

  methods: {
    ...mapActions([
      'actionLogin',
      'actionAuth',
      'actionAnswer',
    ]),

    sendAuth() {
        server.auth(this.login, this.password, this.crypto)
          .then((res) => {

            if (!res[0].err) {

              alert('Вход в систему');
              this.actionAuth(res);

              if (res.id_login !== 0) {

                server.enter(res[0].id_login, res[0].TK, this.crypto)
                  .then((res) => {

                    if (!res.errorType) {

                      this.actionAnswer(res);
                      this.$emit('login');

                    } else {

                      throw new Error(`Could not fetch`);

                    }

                  })
                  .catch(() => {

                    alert('Ошибка, проверьте данные или свяжитесь с разработчиками');

                    // @todo - реализация для теста, если не работает апи
                    alert('Использую ответ с локального хранилища');
                    this.actionAnswer(answerServer);
                    this.$emit('login');

                  });

              }

            this.actionAnswer(res);

            } else {
              throw new Error(`Could not fetch `);
            }

          })
          .catch(() => {
            alert('Ошибка входных данных');
          });

        this.actionLogin(this.login);
    },

  },
}
</script>

<style lang="scss" scoped>
.login {

  .form {
    margin-bottom: 300px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    padding: 0 15px;

    &__content {
      max-width: 280px;
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: center;

    }
    @media only screen and (max-width: 920px) {
      align-items: flex-start;
      .form__content {
        max-width: 380px;
      }
    }

  }

  &__title {
    font-size: 30px;
    font-weight: 700;
    margin: 0 0 10px;
    color: $GRAY_2;
    font-family: $FONT_BOLD;
    text-align: center;
  }

  &__descr {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 18px;
    color: $GRAY_2;
    text-align: center;
    font-family: $FONT_MAIN;
    font-weight: 400;
  }

  &__btn {
    background-color: $GRAY_4;
    color: #fff;
    text-transform: uppercase;
    padding: 20px 40px;
    margin: 10px 0 0;
    align-self: center;
    border-radius: 4px;
    border: 1px solid transparent;
    transition: all .3s ease;

    &:hover, &:active {
      background-color: $GREEN_1;
      outline: transparent;
    }
  }

  .about {
    padding: 80px 0;
    margin-bottom: 60px;
    background-color: $GRAY_6;

    &__title {
      color: $GRAY_4;
      font-size: 52px;
      text-transform: uppercase;
      font-family: $FONT_MAIN;
      font-weight: 400;
      margin-bottom: 30px;
      text-align: center;
    }

    &__content {
      max-width: 1250px;
      padding: 0 40px;
      margin: 0 auto;
    }

    hr {
      border: none;
      border-bottom: 1px solid $GRAY_7;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    &__item {
      font-size: 20px;
      text-align: center;
      color: $GRAY_2;
      margin-bottom: 10px;
      position: relative;

      span {
        color: $GREEN_1;
        font-weight: 900;
        margin-right: 10px;
      }

    }
  }

  .features {
    max-width: 1250px;
    padding: 0 40px;
    margin: 0 auto;
    padding-bottom: 50px;

    &__content {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: flex-start;
      align-content: center;
    }

    &__item {
      max-width: 380px;
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: center;
      padding: 0 15px;
      margin-bottom: 20px;

      &:nth-child(1) .features__icon{
        background-image: url('../assets/svg/f_1.svg');
      }

      &:nth-child(2) .features__icon{
        background-image: url('../assets/svg/f_2.svg');
      }

      &:nth-child(3) .features__icon{
        background-image: url('../assets/svg/f_3.svg');
      }
    }

    &__icon {
      width: 200px;
      height: 200px;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;


    }

    &__title {
      font-size: 18px;
      font-family: $FONT_BOLD;
      font-weight: bold;
      color: $GRAY_2;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    &__descr {
      margin: 0 0 10px;
      font-size: 14px;
      color: $GRAY_2;
      line-height: 22px;
      text-align: center;
      margin-bottom: 10px;
    }
  }
}
</style>
