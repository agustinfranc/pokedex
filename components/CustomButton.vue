<template>
  <v-btn :nuxt="to" :to="to" color="primary" rounded>
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
  },
}
</script>
