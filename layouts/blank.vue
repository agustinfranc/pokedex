<template>
  <v-app light>
    <v-main>
      <v-container class="pt-9 px-7 mw-md-main-content">
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
@media (min-width: 960px) {
  .v-application .mw-md-main-content {
    max-width: 55%;
  }
}
</style>
