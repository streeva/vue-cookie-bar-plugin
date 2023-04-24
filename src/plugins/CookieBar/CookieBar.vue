<template>
  <transition name="cookie-bar-transition" appear>
    <div
      id="cookie-notification"
      class="cookie-bar"
      role="dialog"
      aria-labelledby="cookieBarDialogTitle"
      aria-describedby="cookieBarDialogDesc"
      data-display="flex"
      style="display: none"
    >
      <div class="cookie-bar__container">
        <div class="cookie-bar__notification" role="alert">
          <div class="cookie-bar__text">
            <h2 id="cookieBarDialogTitle" class="cookie-bar__title">
              <slot name="title"></slot>
            </h2>
            <p id="cookieBarDialogDesc" class="no-margin">
              <slot name="text"></slot>
            </p>
          </div>
          <div class="cookie-bar__actions">
            <div class="cookie-bar__buttons">
              <button
                id="cookie-notification__accept"
                class="cookie-bar__button cookie-bar__button--primary"
                tabindex="1"
              >
                Accept
              </button>
              <button
                id="cookie-notification__decline"
                class="cookie-bar__button cookie-bar__button--secondary"
                tabindex="2"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CookieBar',
  mounted() {
    this.$haven.create(this.$havenOptions)
  },
}
</script>

<style lang="scss">
$primary-font: 'Poppins', sans-serif;
$secondary-font: 'Open Sans', sans-serif;
$pos: 20px;
$pad: 30px;
$mobilePad: 20px;
$btn-height: 52px;
$btn-height-sm: 38px;
$primary-color: #00a8f4;
$secondary-color: #acacac;
$black: #000;
$white: #fff;

@mixin mobile-up {
  @media (min-width: 576px) {
    @content;
  }
}

@mixin buttonMixin($borderColor, $textColor, $backgroundColor) {
  color: $textColor;
  border: 2px solid $borderColor;
  background-color: $backgroundColor;

  &.hover,
  &:hover,
  &.focus,
  &:focus,
  &.active,
  &:active {
    color: darken($textColor, 5%);
    background-color: darken($backgroundColor, 5%);
    border-color: darken($borderColor, 5%);
  }

  &.focus,
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba($borderColor, 0.5);
  }
}

.cookie-bar {
  position: relative;
  z-index: 2000000000;

  &:after {
    content: '';
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background-color: rgba($black, 0.3);
    z-index: -1;
  }

  &__container {
    position: fixed;
    bottom: $pos;
    left: $pos;
    right: $pos;
    background: $white;
    padding: $mobilePad;
    box-shadow: 0 4px 30px rgba(121, 153, 175, 0.3),
      0 4px 8px rgba(121, 153, 175, 0.15), 0 0 0 1px #dee5ea inset;
    border-radius: 10px;

    @include mobile-up {
      padding: $pad;
    }
  }

  &__notification {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include mobile-up {
      flex-direction: row;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    margin-bottom: $mobilePad;

    @include mobile-up {
      margin-bottom: 0;
      margin-right: $pad;
    }
  }

  &__actions {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__buttons {
    display: flex;
    justify-content: flex-end;

    @include mobile-up {
      margin-bottom: 0;
    }

    .sa-btn {
      font-size: 14px;
      font-weight: 600;

      @include mobile-up {
        font-size: inherit;
      }
    }

    .sa-btn:first-child {
      margin-right: $mobilePad;
    }
  }

  &__button {
    box-shadow: none;
    cursor: pointer;
    font-family: $secondary-font;
    font-size: 16px;
    font-weight: 600;
    height: $btn-height-sm;
    letter-spacing: 0;
    padding: 0 20px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-style: solid;
    box-shadow: none;
    overflow: hidden;
    position: relative;
    transition: 300ms ease;
    white-space: nowrap;
    z-index: 1;

    &:hover {
      cursor: pointer;
    }

    &--primary {
      @include buttonMixin($primary-color, $white, $primary-color);
      margin-right: $pos;
    }

    &--secondary {
      @include buttonMixin($secondary-color, $white, $secondary-color);
    }
  }

  &__title {
    font-size: 17px;
    font-weight: 700;
    font-family: $primary-font;
    text-align: left;
    padding: 0;
    line-height: 1.2;
    margin: 0 0 10px 0;

    @include mobile-up {
      font-size: 20px;
      margin-bottom: $mobilePad;
    }
  }

  p {
    font-size: 14px;
    text-align: left;
    font-family: $secondary-font;

    @include mobile-up {
      font-size: inherit;
    }
  }

  p.no-margin {
    margin: 0;
    padding: 0;
  }
}

.cookie-bar-transition-enter-active,
.cookie-bar-transition-leave-active {
  transition: opacity 0.5s;
}
.cookie-bar-transition-enter, .cookie-bar-transition-leave-to /* .cookie-bar-transition-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
