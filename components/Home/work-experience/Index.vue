<script setup>
  import {experiences as expArr} from "~/components/Home/work-experience/data";

  const experiences = ref(expArr)

  function open (index) {
    experiences.value.forEach((el, i) => {
      if (index === i) return
      el.isOpened = false
    })
    experiences.value[index].isOpened = !experiences.value[index].isOpened
  }
</script>

<template>
  <div class="work-experience w-full py-14 md:py-20">
    <div class="container">
      <h2 class="ar-semi-bold-font text-4xl md:text-5xl lg:text-5xl text-center text-[#1c1d25] mb-8">Work Experience</h2>

      <div class="experiences w-full max-w-screen-md mx-auto">
        <div class="experience" v-for="(experience, index) in experiences" :key="`experience-${index}`">
          <div class="header flex justify-between items-center py-3 px-4 rounded cursor-pointer" @click="open(index)">
            <p class="title ar-semi-bold-font text-base md:text-xl">{{ experience.title }}</p>
            <div class="date flex justify-end items-center gap-2">
              <span class="hidden md:block ar-medium-font text-base md:text-xl">{{ experience.date }}</span>
              <div class="toggle-icon" :class="{'is-opened': experience.isOpened}"></div>
            </div>
          </div>
          <div class="content py-2">
            <div class="wrapper rounded" :class="{'is-visible': !experience.isOpened}">
              <div class="py-4 px-4 details">
                <div class="flex flex-col order-2 md:order-1">
                  <div class="flex justify-start items-center gap-4">
                    <p class="flex justify-start items-center gap-1">
                      <IconsMapPin class="fill-[#b0b2c3] w-5 h-5" />
                      <span class="text-[#b0b2c3] ar-navbar-medium-font text-sm">{{ experience.company.location }}</span>
                    </p>
                    <p class="flex justify-start items-center gap-1">
                      <IconsExternalLink class="fill-[#b0b2c3] w-5 h-5" />
                      <a
                        :href="experience.company.website.url"
                        target="_blank"
                        class="text-[#b0b2c3] ar-navbar-medium-font text-sm">{{ experience.company.website.name }}/</a>
                    </p>
                  </div>

                  <div class="my-3">
                    <p
                      class="text-sm md:text-base mb-4"
                      v-for="(desc, i) in experience.description"
                     :key="`desc-${i}`">{{ desc }}</p>
                  </div>

                  <div class="technologies flex justify-start items-center flex-wrap gap-2 select-none" >
                    <p
                        v-for="(technology, index) in experience.technologies"
                        :key="`technology-${index}`"
                        class="bg-[#1c1d25] flex justify-center items-end gap-1 py-2 px-4 rounded-md">
                      <component :is="technology.icon" width="22" height="22" />
                      <span class="text-white ar-semi-bold-font text-sm">{{ technology.name }}</span>
                    </p>
                  </div>

                </div>
                <div class="img-container flex shrink-0 order-1 md:order-2">
                  <img :src="experience.company.logo" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.work-experience {
  //background: linear-gradient(0deg, #235aa6, #213777);
  //background-color: #f3f3f3;
  //background-color: rgba(#b0b2c3, .6);

  background-color: rgba(#b0b2c3, .6);
  .experiences {
    .experience {
      .header {
        background: #1c1d25;
        //color: #b0b2c3;
        color: #fff;
        //background: linear-gradient(0deg, #235aa6, #213777);

        .toggle-icon {
          width: 14px;
          height: 2px;
          background-color: #fff;
          position: relative;
          transition: all .5s ease-in-out;

          &.is-opened {
            &:before {
              transform: rotate(180deg);
            }
          }

          &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 14px;
            height: 2px;
            background-color: #fff;
            transform: rotate(90deg);
            transition: all .3s ease-in-out;
          }

        }

      }




        .wrapper {
          color: #fff;
          //background-color: rgba(#1c1d25, .9);
          background: linear-gradient(143deg, #235aa6, #213777);
          //margin-top: 12px;
          transition: max-height .5s ease-in-out;
          overflow: hidden;
          max-height: 600px;

          &.is-visible {
            max-height: 0;
          }

          .details {
            display: grid;
            grid-template-columns: 1fr 150px;
            grid-template-rows: 1fr;
            align-items: center;

            @media (max-width: 768px) {
              grid-template-columns: 1fr;
            }

            .img-container {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;

              img {
                width: 100%;
                height: auto;
                object-fit: fill;
                object-position: center;

                @media (max-width: 768px) {
                  width: 60%;
                  margin-bottom: 20px;
                }
              }
            }

          }
        }

    }
  }
}
</style>
