<template>
  <div>
    <search-field v-model="searchText" />

    <pokemon-list
      :pokemons="filteredPokemons"
      @open-dialog="openDialog"
      @toggle-favourite-pokemon="toggleFavouritePokemonFromStore"
    />

    <pokemon-not-found
      v-if="displayNotFound"
      @clear-search-field="clearSearchField"
    />

    <pokemon-dialog
      v-if="pokemon"
      v-model="dialog"
      :pokemon="pokemon"
      @toggle-favourite-pokemon="toggleFavouritePokemon"
    />

    <bottom-bar
      v-if="!displayNotFound"
      :favourites="listOnlyFavourites"
      @set-list-only-favourites="setListOnlyFavourites"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'List',

  data() {
    return {
      dialog: false,
      pokemons: [],
      pokemon: null,
      searchText: '',
      listOnlyFavourites: false,
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

    filteredPokemons() {
      const pokemons = this.listOnlyFavourites
        ? this.favouritePokemons.map((pokemon) => ({ ...pokemon, isFav: true }))
        : this.pokemons.map((pokemon) => {
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

    displayNotFound() {
      return this.filteredPokemons.length === 0 && this.searchText !== ''
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
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

    clearSearchField() {
      this.searchText = ''
    },

    setListOnlyFavourites(value) {
      this.listOnlyFavourites = value
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
