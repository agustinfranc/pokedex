<template>
  <v-dialog
    persistent
    :value="value"
    max-width="290"
    @input="$emit('input', $event.target.value)"
  >
    <v-card width="400">
      <v-img
        height="200px"
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
                  <v-list-item-title
                    v-text="`Name: ${pokemon.name}`"
                  ></v-list-item-title>
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
                  <v-list-item-title
                    v-text="`Types: ${pokemon.types}`"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </div>

        <custom-button> Share to my friends </custom-button>
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
}
</script>
