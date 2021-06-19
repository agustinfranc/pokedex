<template>
  <div v-if="loading" class="loading-page">
    <div class="loading-page-container">
      <img
        height="106"
        width="106"
        class="loader"
        alt="Loading"
        src="/img/loader.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>

<style lang="scss" scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #e5e5e5;
  z-index: 10;

  .loading-page-container {
    height: inherit;
    width: inherit;
    display: flex;
    justify-content: center;
    align-items: center;

    .loader {
      animation: scale 0.75s ease-in infinite;
    }
  }
}

@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
