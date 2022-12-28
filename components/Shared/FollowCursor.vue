<script setup>
  const dot = ref({})
  const circle = ref({})
  onMounted(() => {
    window.addEventListener('mousemove', function (e) {
      circle.value.style = `opacity: 1; transform: translateY(${e.y - 15}px) translateX(${e.x - 15}px)`
      dot.value.style = `opacity: 1; transform: translateY(${e.y - 3}px) translateX(${e.x - 3}px)`
    })
  })
</script>

<template>
  <div class="follow-cursor" ref="followCursor">
    <span class="dot" ref="dot"></span>
    <span class="circle" ref="circle"></span>
  </div>
</template>

<style lang="scss" scoped>
.follow-cursor {
  transition: all .3s;
  .circle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid #66d9ed;
    position: fixed;
    left: 0;
    top: 0;
    pointer-events: none;
    z-index: 10000000;
    transition: transform .09s;
    opacity: 0;
    place-items: center;
  }

  .dot {
    width: 6px;
    height: 6px;
    background-color: rgba(#66d9ed, .8);
    border-radius: 50%;
    position: fixed;
    left: 0;
    top: 0;
    pointer-events: none;
    z-index: 10000000;
    opacity: 0;
    transition: transform .01s;
  }
}
</style>
