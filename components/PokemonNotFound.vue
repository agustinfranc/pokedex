<template>
  <div class="d-flex flex-column align-center mt-3">
    <h1>Uh-oh!</h1>
    <p>You look lost on your journey!</p>
    <div @click="$emit('clear-search-field')">
      <custom-button rounded> Go back home </custom-button>
    </div>
  </div>
</template>
