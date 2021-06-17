<template>
  <v-list nav class="pa-0">
    <v-list-item-group color="primary">
      <v-list-item
        v-for="(item, i) in pokemons"
        :key="i"
        @click.stop="$emit('open-dialog', item)"
      >
        <v-list-item-content>
          <v-list-item-title
            class="custom-item__title"
            v-text="item.name"
          ></v-list-item-title>
        </v-list-item-content>

        <v-list-item-icon @click.stop="toggleFromFavorites">
          <v-icon v-text="'mdi-star'"></v-icon>
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
