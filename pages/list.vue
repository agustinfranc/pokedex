<template>
  <div>
    <search-field />

    <pokemon-list :pokemons="pokemons" @open-dialog="openDialog" />

    <pokemon-dialog v-model="dialog" :pokemon="pokemon" />
  </div>
</template>

<script>
export default {
  name: 'List',

  layout: 'blank',

  data() {
    return {
      dialog: false,
      pokemons: [],
      pokemon: {},
    }
  },

  async fetch() {
    try {
      const url = 'https://pokeapi.co/api/v2/pokemon'
      const res = await this.$axios.$get(url)

      this.pokemons = res.results
    } catch (error) {
      console.error(error.response ?? error)
    }
  },

  methods: {
    toggleFromFavorites() {
      console.log('addto')
    },
    openDialog(item) {
      this.dialog = true

      this.fetchPokemon(item)
    },
    async fetchPokemon(item) {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${item.name}`
        const res = await this.$axios.$get(url)

        this.pokemon = res
      } catch (error) {
        console.error(error.response ?? error)
      }
    },
  },
}
</script>

<style lang="scss">
.v-list.v-sheet.theme--light {
  background: unset;

  .v-list-item {
    background-color: white;

    .v-list-item__title.custom-item__title {
      font-size: 1.375rem;
    }
  }
}
</style>
