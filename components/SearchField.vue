<template>
  <v-text-field
    class="custom-input"
    prepend-inner-icon="mdi-magnify"
    label="Search"
    solo
    :value="value"
    @input="$emit('input', $event)"
  ></v-text-field>
</template>

<script>
export default {
  props: {
    value: String,
  },
}
</script>

<style lang="scss">
#app .v-input.custom-input.v-text-field .v-input__slot {
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
}
</style>
