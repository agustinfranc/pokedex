export const state = () => ({
  favouritePokemons: [],
})

export const mutations = {
  ADD_FAVOURITE_POKEMON(state, payload) {
    state.favouritePokemons.push(payload)
  },

  REMOVE_FAVOURITE_POKEMON(state, payload) {
    state.favouritePokemons.splice(payload)
  },
}

export const actions = {
  toggleFavouritePokemonFromStore({ commit, state }, payload) {
    const index = state.favouritePokemons.findIndex(
      (item) => item.name === payload.name
    )

    if (index === -1) {
      commit('ADD_FAVOURITE_POKEMON', payload)

      return
    }

    commit('REMOVE_FAVOURITE_POKEMON', index)
  },
}
