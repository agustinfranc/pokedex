<template>
  <div class="d-flex flex-column align-center">
    <welcome-logo class="mb-5 mt-15" />

    <v-container class="d-flex flex-column align-center">
      <h1 class="mb-4">Welcome to Pokédex</h1>

      <p class="title text-center my-4">
        The digital encyclopedia created by Professor Oak is an invaluable tool
        to Trainers in the Pokémon world.
      </p>
    </v-container>

    <custom-button nuxt to="/list" class="mt-8"> Get started </custom-button>
  </div>
</template>

<script>
import CustomButton from '~/components/CustomButton.vue'
import WelcomeLogo from '~/components/WelcomeLogo.vue'

export default {
  name: 'Welcome',

  components: {
    CustomButton,
    WelcomeLogo,
  },

  layout: 'blank',
}
</script>
