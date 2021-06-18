<template>
  <v-dialog
    persistent
    :value="value"
    max-width="570"
    @input="$emit('input', $event.target.value)"
  >
    <v-card>
      <v-img height="220px" src="/img/background.png">
        <v-img
          contain
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
      </v-img>

      <v-card-text>
        <div class="font-weight-bold mb-2">
          <v-list class="py-0 px-2">
            <v-list-item-group color="primary">
              <v-list-item class="px-0">
                <v-list-item-content>
                  <v-list-item-title>
                    <span>Name: </span>
                    <span class="capitalize">{{ pokemon.name }}</span>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>

              <v-list-item class="px-0">
                <v-list-item-content>
                  <v-list-item-title
                    v-text="`Weight: ${pokemon.weight}`"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>

              <v-list-item class="px-0">
                <v-list-item-content>
                  <v-list-item-title
                    v-text="`Height: ${pokemon.height}`"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>

              <v-list-item class="px-0">
                <v-list-item-content>
                  <v-list-item-title>
                    <span>Types: </span>
                    <span>{{ types(pokemon.types) }}</span>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>
            </v-list-item-group>
          </v-list>
        </div>

        <div class="d-flex justify-space-between mt-5 px-2">
          <div @click="copyToClipboard(pokemon)">
            <custom-button rounded large> Share to my friends </custom-button>
          </div>

          <v-btn
            fab
            small
            elevation="0"
            @click.stop="$emit('toggle-favourite-pokemon', pokemon)"
          >
            <v-icon
              :color="pokemon.isFav ? 'orange' : '#BFBFBF'"
              v-text="'mdi-star'"
            ></v-icon>
          </v-btn>
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
    async copyToClipboard({ name, weight, height, types }) {
      const pokemon = { name, weight, height, types: this.types(types) }

      const text = Object.entries(pokemon)
        .map((e) => e.join(': '))
        .join(', ')

      await navigator.clipboard.writeText(text)
      alert(text)
    },
  },
}
</script>

<style>
.capitalize {
  text-transform: capitalize;
}
</style>
