<template>
  <div class="loader">
    <div class="spinner-wrapper" >
      <img
          class="spinner-wrapper__spinner"
          src="@/assets/icons/z-icon.png"
          alt=""
      >
      <span class="spinner-wrapper__title" :class="color">
        {{ title }}
        <span class="loader-dots" :class="color"></span>
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const props = defineProps({title: { type: String, default: 'Loading' }})
const title = props.title;

const color = computed(() => {
  return store.getters.getTheme ? 'dark' : 'light'
} )

</script>

<style scoped lang="scss">
@import '../assets/scss/utils/vars';

.dark {
  color: $txt-primary-blue;
}

.light {
  color: $txt-primary-violet;
}

.loader {
  height: 100%;
  min-height: 200px;
  width: 100%;
  position: relative;
  background-color: inherit;

  .spinner-wrapper {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: $phoneWidth) {
      left: 0;
      transform: translate(0);
    }

    &__spinner {
      width: 47px;
      height: 45px;
      opacity: 0.7;
      animation: rotation 2.5s linear infinite normal;

      @keyframes rotation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }
    }

    &__title {
      margin-top: 10px;
      background-color: inherit;

      .loader-dots {
        display: inline-block;
        vertical-align: middle;
        overflow: hidden;
        width: 1.2em;
        text-align: left;
        background-color: inherit;

        &::after {
          content: '\2026';
          position: relative;
          animation: loader-dots 1.5s infinite linear;
        }

        @keyframes loader-dots {
          0% {
            left: -0.2em;
          }
          20% {
            left: 0.1em;
          }
          40% {
            left: 0.4em;
          }
          60% {
            left: 0.7em;
          }
          80% {
            left: 1.0em;
          }
          100% {
            left: 1.3em;
          }
        }
      }
    }
  }
}
</style>