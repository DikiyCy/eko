<template>
  <footer
    class="footer"
  >
    <div class="footer__line" />

    <div class="footer__banner" />

    <div class="footer__contact contact">

      <div class="contact__wrap">

        <span class="contact__title">НАШИ КОНТАКТЫ</span>

        <ul class="contact__list">

          <li class="contact__item">
            191119, Санкт-Петербург, ул. Достоевского, 40-44
          </li>

          <li class="contact__item">
            <a href="tel:+78123250305">(812) 325-03-05</a>
          </li>

          <li class="contact__item">
            Email :
            <a href="mailto:info@ecosafety.ru">info@ecosafety.ru</a>
          </li>

        </ul>

      </div>

    </div>

    <div class="footer__copy">
      © Группа компаний Эко-безопасность 2010-2021
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterBlock',
}
</script>

<style lang="scss" scoped>
.footer {

  &__line {
    width: 30%;
    height: 1.5px;
    margin: 30px auto;
    background-color: $GRAY_5;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 8px;
      height: 9px;
      background-color: #fff;
      border: 1px solid $GRAY_5;
      position: absolute;
      left: 50%;
      top: -4px;
    }
  }

  &__banner {
    width: 100%;
    height: 150px;
    background-image: url('../assets/svg/footer.svg');
    background-repeat: no-repeat;
    background-position: left center;
    background-size: cover;
  }

  &__contact {
    width: 100%;
    background-color: $BLUE_1;
    margin-top: -10px;
    color: #fff;
    padding: 50px 0;
    width: 100%;
    font-family: $FONT_MAIN;
    font-weight: 300;

    .contact {
      &__wrap {
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 0 40px;

        @media only screen and (max-width: 920px) {
          align-items: center;
        }
      }

      &__title {
        font-size: 20px;
        text-transform: uppercase;
        font-weight: 400;
        margin-top: 0;
        margin-bottom: 20px;
      }

      &__item {
        margin-bottom: 10px;
        font-size: 14px;
        font-weight: 300;
        line-height: 22px;
        padding-left: 30px;
        position: relative;

        a {
          color: $GREEN_1;
        }

        &::before {
          display: block;
          width: 13px;
          height: 14px;
          color: white;
          position: absolute;
          top: 0;
          left: 0;
        }

        /* @todo - иконки надо бы переделать под макет */
        &:nth-child(1)::before {
          content: '\1F3E0';
        }

        &:nth-child(2)::before {
          content: '\1F4DE';
        }

        &:nth-child(3)::before {
          content: '\1F4E9';
        }
      }
    }
  }

  &__copy {
    width: 100%;
    height: 52px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: $BLUE_2;
    padding-right: 15px;
    padding-left: 15px;
    color: #fff;
    font-family: $FONT_MAIN;
    font-size: 14px;

  }

}
</style>
