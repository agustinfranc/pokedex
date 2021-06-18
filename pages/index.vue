<template>
  <div class="d-flex flex-column align-center">
    <welcome-logo class="mb-5 mt-15" />

    <v-container class="d-flex flex-column align-center">
      <h2 class="mb-4">Welcome to Pokédex</h2>

      <p class="subtitle-1 text-center my-4">
        The digital encyclopedia created by Professor Oak is an invaluable tool
        to Trainers in the Pokémon world.
      </p>
    </v-container>

    <custom-button nuxt to="/list" class="mt-8" rounded large>
      Get started
    </custom-button>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
}
</script>
