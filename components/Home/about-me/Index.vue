<script setup>
</script>

<template>
  <div class="w-full">
    <div class="who-iam h-screen relative">

      <div class="social-links absolute right-0	top-1/2	-translate-y-1/2	px-6">
        <a href="https://github.com/refaat1297" class="w-8 h-8 block mb-4" target="_blank">
          <IconsGithub class="w-full h-full" />
        </a>
        <a href="https://www.linkedin.com/in/refaat1297" class="w-8 h-8 block mb-4" target="_blank">
          <IconsLinkedIn class="w-full h-full" />
        </a>
        <a href="https://twitter.com/refaat1297" class="w-8 h-8 block mb-4" target="_blank">
          <IconsTwitter class="w-full h-full" />
        </a>
        <a href="https://facebook.com/refaat1297" class="w-8 h-8 block mb-4" target="_blank">
          <IconsFacebook class="w-full h-full" />
        </a>
        <a href="https://www.instagram.com/arefaat1297/" class="w-8 h-8 block mb-4" target="_blank">
          <IconsInstagram class="w-full h-full" />
        </a>
      </div>

      <div class="container mx-auto h-full text-white grid justify-start items-center">
        <HomeAboutMeLogoMask class="logo-mask absolute left-1/2 top-1/2 opacity-50 -translate-y-1/2 -translate-x-1/2" />
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
    z-index: 1;
    animation: jump 5s infinite;
  }

  .content {
    z-index: 2;
  }

  .social-links {
    a {
      svg {
        fill: #b0b2c3;
        transition: all .3s ease-in-out;

        &:hover {
          fill: #fff;
        }
      }
    }
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
