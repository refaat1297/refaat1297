<script setup>
  const props = defineProps({
    project: {
      type: Object,
      required: true
    }
  })
</script>

<template>
  <div class="project min-h-[270px] h-auto lg:h-max rounded grid gap-4 grid-rows-1 grid-cols-1 lg:grid-cols-[400px_1fr] px-4 py-6 mb-6">
    <div class="img-container w-full h-full">
      <img class="object-fill	w-full h-full block rounded" :src="project.image"/>
    </div>
    <div class="content relative pb-11">
      <h5 class="text-[#b0b2c3] ar-navbar-medium-font text-sm">{{ project.type }}</h5>
      <h3 class="text-white text-2xl md:text-3xl ar-semi-bold-font">{{ project.name }}</h3>
      <p class="text-[#b0b2c3] text-base md:text-lg my-4">{{ project.description }}</p>
      <div class="technologies flex justify-start items-center flex-wrap gap-2 select-none" >
        <p
            v-for="(technology, index) in project.technologies"
            :key="`technology-${index}`"
            class="bg-[#1c1d25] flex justify-center items-end gap-1 py-2 px-4 rounded-md">
          <component :is="technology.icon" width="22" height="22" />
          <span class="text-white ar-semi-bold-font text-sm">{{ technology.name }}</span>
        </p>
      </div>

      <div class="links bottom-0 right-0 absolute flex justify-end items-center gap-1">
        <a :href="project.demo" target="_blank"><IconsDemo class="w-6	h-6 md:w-8 md:h-8 fill-white" /></a>
        <a :href="project.repo" target="_blank"><IconsGithub class="w-6	h-6 md:w-8 md:h-8 fill-white"  /></a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.project {
  background: linear-gradient(0deg, #235aa6, #213777);
}
</style>
