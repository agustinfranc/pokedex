<template>
  <v-btn
    :nuxt="to ? true : false"
    :to="to"
    :block="block"
    color="primary"
    :rounded="rounded"
    :fab="!!icon"
    :small="small"
    :large="large"
    elevation="0"
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
  },
}
</script>

<style>
.v-btn__content {
  text-transform: initial;
}
</style>
