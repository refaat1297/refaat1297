<template>
  <nav class="navbar fixed top-0 left-0 w-full h-24 z-10 bg-transparent">
    <div class="container h-full flex justify-between items-center">
      <NuxtLink to="/">
        <SharedNavbarLogo width="60" height="60" />
      </NuxtLink>

      <div class="links hidden md:flex justify-end items-center gap-6 text-xl ar-navbar-extra-bold-font">
        <a href="#" class="text-[#b0b2c3] hover:text-white transition ease-in-out">.is()</a>
        <a href="#" class="text-[#b0b2c3] hover:text-white transition ease-in-out">.getLatestWorks()</a>
        <a href="#" class="text-[#b0b2c3] hover:text-white transition ease-in-out">.contactUs()</a>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
