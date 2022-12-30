<script setup>
  import { projects } from "~/components/Home/latest-works/data";
</script>

<template>
  <div class="latest-works w-full bg-[#1c1d25] py-20">
    <div class="container">
      <h2 class="ar-semi-bold-font text-4xl md:text-5xl lg:text-6xl text-center text-white mb-8">Latest Works</h2>

      <div class="projects">
        <HomeLatestWorksProject
          v-for="(project, index) in projects"
          :key="`project-${index}`"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.latest-works {
  .projects {

  }
}
</style>

