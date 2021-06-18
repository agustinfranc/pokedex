<template>
  <v-dialog
    persistent
    :value="value"
    max-width="570"
    @input="$emit('input', $event.target.value)"
  >
    <v-card>
      <v-img
        height="220px"
        :src="pokemon.sprites ? pokemon.sprites.front_default : ''"
      >
        <v-app-bar flat color="rgba(0, 0, 0, 0)">
          <v-spacer></v-spacer>

          <v-btn color="black" icon @click.stop="$emit('input', false)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-app-bar>
      </v-img>

      <v-card-text>
        <div class="font-weight-bold mb-2">
          <v-list nav class="pa-0">
            <v-list-item-group color="primary">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    <span>Name: </span>
                    <span class="capitalize">{{ pokemon.name }}</span>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="`Weight: ${pokemon.weight}`"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="`Height: ${pokemon.height}`"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    <span>Types: </span>
                    <span>{{ types(pokemon.types) }}</span>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </div>

        <div class="d-flex justify-space-between">
          <custom-button> Share to my friends </custom-button>

          <v-icon
            :color="pokemon.isFav ? 'orange' : ''"
            @click.stop="$emit('toggle-favourite-pokemon', pokemon)"
            v-text="'mdi-star'"
          ></v-icon>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: Boolean,
    pokemon: Object,
  },

  methods: {
    types(types) {
      return types
        .map((type) => type.type.name)
        .map((name) => name.replace(/^\w/, (c) => c.toUpperCase()))
        .join(', ')
    },
  },
}
</script>

<style>
.capitalize {
  text-transform: capitalize;
}
</style>
