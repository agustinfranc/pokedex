<template>
  <v-list nav class="pa-0">
    <v-list-item-group color="primary">
      <v-list-item
        v-for="(pokemon, i) in pokemons"
        :key="i"
        @click.stop="$emit('open-dialog', pokemon)"
      >
        <v-list-item-content>
          <v-list-item-title
            class="custom-item__title capitalize ml-3"
            v-text="pokemon.name"
          ></v-list-item-title>
        </v-list-item-content>

        <v-list-item-icon
          @click.stop="$emit('toggle-favourite-pokemon', pokemon)"
        >
          <v-btn elevation="0" color="secondary" fab small>
            <v-icon
              :color="pokemon.isFav ? 'orange' : 'disabled'"
              v-text="'mdi-star'"
            ></v-icon>
          </v-btn>
        </v-list-item-icon>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  props: {
    pokemons: Array,
  },
}
</script>
