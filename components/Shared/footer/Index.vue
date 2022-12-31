<script setup>
  function scrollToTop () {
    window.scrollTo(0, 0,)
  }
</script>

<template>
  <footer class="bg-[#1c1d25] py-4">
    <div class="container">
     <div class="flex justify-between items-center">
       <p class="ar-navbar-medium-font text-[#b0b2c3]">&copy;refaat1297, All Right Reserved.</p>
       <div class="to-top h-8	w-8 grid place-items-center rounded-md cursor-pointer" @click="scrollToTop">
         <IconsArrowUp class="fill-white" />
       </div>
     </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  .to-top {
    background: linear-gradient(0deg, #235aa6, #213777);
  }
}
</style>
