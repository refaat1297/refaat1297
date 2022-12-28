<script setup>
</script>

<template>
  <div class="w-full">
    <div class="who-iam h-screen relative">
      <div class="container mx-auto h-full text-white grid justify-start items-center">
        <HomeAboutMeLogoMask class="logo-mask absolute left-1/2 top-1/2 opacity-50" />
        <div class="content select-none">
          <h1 class="ar-black-font text-6xl md:text-7xl lg:text-8xl">Ahmed Refaat</h1>
          <p class="text-3xl md:text-4xl ar-light-font italic">Interactive Front-end Developer</p>
          <a href="#" class="text-xl md:text-2xl">About Me</a>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.who-iam {
  background-color: #1c1d25;

  .logo-mask {
    transform: translate(-50%, -50%);
    z-index: 1;
    animation: jump 5s infinite;
  }

  .content {
    z-index: 2;
  }
}

@keyframes jump {
  0% {
    transform: translate(-50%, -50%);
  }

  50% {
    transform: translate(-50%, -40%);
  }

  100% {
    transform: translate(-50%, -50%);
  }
}
</style>
