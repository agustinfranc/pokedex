<template>
  <div>
    <search-field />

    <v-list nav class="pa-0">
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon v-text="'mdi-star'"></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import SearchField from '@/components/SearchField.vue'

export default {
  name: 'List',

  components: {
    SearchField,
  },

  layout: 'blank',

  data() {
    return {
      selectedItem: 0,
      items: [{ text: 'Pikachu' }, { text: 'Machamp' }, { text: 'Charizard' }],
    }
  },
}
</script>

<style lang="scss">
.v-list.v-sheet.theme--light {
  background: unset;

  .v-list-item {
    background-color: white;

    .v-list-item__title {
      font-size: 1.375rem;
    }
  }
}
</style>
