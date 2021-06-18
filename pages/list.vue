<template>
  <div>
    <search-field v-model="searchText" />

    <pokemon-list
      :pokemons="allPokemons"
      @open-dialog="openDialog"
      @toggle-favourite-pokemon="toggleFavouritePokemonFromStore"
    />

    <pokemon-not-found v-show="allPokemons.length === 0 && searchText !== ''" />

    <pokemon-dialog
      v-if="pokemon"
      v-model="dialog"
      :pokemon="pokemon"
      @toggle-favourite-pokemon="toggleFavouritePokemon"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'List',

  layout: 'blank',

  data() {
    return {
      dialog: false,
      pokemons: [],
      pokemon: null,
      searchText: '',
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

  computed: {
    ...mapState(['favouritePokemons']),

    allPokemons() {
      const pokemons = this.pokemons.map((pokemon) => {
        const isFav = !!this.favouritePokemons.find(
          (favouritePokemon) => favouritePokemon.name === pokemon.name
        )

        return {
          ...pokemon,
          isFav,
        }
      })

      if (typeof this.searchText !== 'string' || this.searchText.length === 0) {
        return pokemons
      }

      return pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(this.searchText.toLowerCase())
      )
    },
  },

  methods: {
    ...mapActions(['toggleFavouritePokemonFromStore']),

    openDialog(item) {
      this.dialog = true

      this.fetchPokemon(item)
    },
    async fetchPokemon(item) {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${item.name}`
        const res = await this.$axios.$get(url)

        this.pokemon = {
          ...res,
          isFav: item.isFav,
        }
      } catch (error) {
        console.error(error.response ?? error)
      }
    },
    toggleFavouritePokemon() {
      if (this.pokemon.isFav) {
        this.toggleFavouritePokemonFromStore(this.pokemon)
        this.pokemon.isFav = false
      } else {
        this.pokemon.isFav = true
        this.toggleFavouritePokemonFromStore(this.pokemon)
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
