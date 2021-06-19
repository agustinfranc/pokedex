<template>
  <v-btn
    :nuxt="to ? true : false"
    :to="to"
    :block="block"
    :color="color"
    :rounded="rounded"
    :fab="!!icon"
    :small="small"
    :large="large"
    elevation="0"
    class="white--text"
  >
    <v-icon v-if="icon" left> {{ icon }} </v-icon>

    <slot />
  </v-btn>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: false,
    },
    block: {
      type: Boolean,
      required: false,
      default: false,
    },
    rounded: {
      type: Boolean,
      required: false,
      default: false,
    },
    small: {
      type: Boolean,
      required: false,
      default: false,
    },
    large: {
      type: Boolean,
      required: false,
      default: false,
    },
    icon: {
      type: String,
      required: false,
      default: '',
    },
    color: {
      type: String,
      required: false,
      default: 'primary',
    },
  },
}
</script>

<style lang="scss">
.v-btn:not(.v-btn--fab).v-btn:active {
  background-color: #c00e20 !important;
}
</style>
