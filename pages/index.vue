<script setup>
const dot = ref({})
const circle = ref({})
onMounted(() => {
  window.addEventListener('mousemove', function (e) {
    circle.value.style = `opacity: 1; transform: translateY(${e.pageY - 14}px) translateX(${e.pageX - 14}px)`
    dot.value.style = `opacity: 1; transform: translateY(${e.pageY - 3}px) translateX(${e.pageX - 3}px)`
  })
})
</script>

<template>
  <div class="home-page">
    <HomeWhoAmI />
  </div>
</template>

<style></style>

