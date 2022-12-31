<template>
  <nav class="navbar fixed top-0 left-0 w-full h-16 md:h-22 z-10 bg-transparent backdrop-blur-sm	">
    <div class="container h-full flex justify-between items-center">
      <NuxtLink to="/">
        <SharedNavbarLogo class="w-10	md:w-14 h-10	md:h-14" />
      </NuxtLink>

      <div class="links hidden lg:flex justify-end items-center gap-6 text-xl ar-navbar-extra-bold-font">
        <a href="#" class="text-[#b0b2c3] hover:text-white transition ease-in-out">.is()</a>
        <a href="#" class="text-[#b0b2c3] hover:text-white transition ease-in-out">.getWorkExperience()</a>
        <a href="#" class="text-[#b0b2c3] hover:text-white transition ease-in-out">.getLatestWorks()</a>
        <a href="#" class="text-[#b0b2c3] hover:text-white transition ease-in-out">.contactUs()</a>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  background-color: rgba(#1c1d25, .6);
}
</style>
