<template>
  <v-footer app bottom>
    <v-col class="text-center pl-md-custom" cols="6">
      <div @click.stop="$emit('set-list-only-favourites', false)">
        <custom-button
          block
          icon="mdi-format-list-bulleted-square"
          rounded
          small
          :color="!favourites ? 'primary' : '#BFBFBF'"
        >
          All {{ favourites }}
        </custom-button>
      </div>
    </v-col>
    <v-col class="text-center pr-md-custom" cols="6">
      <div @click.stop="$emit('set-list-only-favourites', true)">
        <custom-button
          block
          icon="mdi-star"
          rounded
          small
          :color="favourites ? 'primary' : '#BFBFBF'"
        >
          Favorites
        </custom-button>
      </div>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  props: {
    favourites: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style>
@media (min-width: 960px) {
  div.pl-md-custom {
    padding-left: 265px;
  }

  div.pr-md-custom {
    padding-right: 265px;
  }
}
</style>
