<template>
  <v-text-field
    class="custom-input"
    prepend-inner-icon="mdi-magnify"
    label="Search"
    solo
  ></v-text-field>
</template>

<style lang="scss">
#app .v-input.custom-input.v-text-field .v-input__slot {
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
}
</style>
