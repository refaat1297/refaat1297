<script setup>
  const links = ref(null)
  onMounted(() => {
    links.value.addEventListener('click', function (e) {
      const link = e.target.closest('.link')
      if (!link) return
      const section = link.dataset.link
      document.querySelector(`.${section}`).scrollIntoView()
    })
  })
</script>

<template>
  <nav class="navbar fixed top-0 left-0 w-full h-16 md:h-22 z-10 bg-transparent backdrop-blur-sm	">
    <div class="container h-full flex justify-between items-center">
      <NuxtLink to="/">
        <SharedNavbarLogo class="w-10	md:w-14 h-10	md:h-14" />
      </NuxtLink>

      <div ref="links" class="links hidden lg:flex justify-end items-center gap-6 text-xl ar-navbar-extra-bold-font">
        <span class="link text-[#b0b2c3] hover:text-white transition ease-in-out cursor-pointer" data-link="about-me">.is()</span>
        <span class="link text-[#b0b2c3] hover:text-white transition ease-in-out cursor-pointer" data-link="work-experience">.getWorkExperience()</span>
        <span class="link text-[#b0b2c3] hover:text-white transition ease-in-out cursor-pointer" data-link="latest-works">.getLatestWorks()</span>
        <span class="link text-[#b0b2c3] hover:text-white transition ease-in-out cursor-pointer" data-link="contact-us">.contactUs()</span>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  background-color: rgba(#1c1d25, .6);
}
</style>
