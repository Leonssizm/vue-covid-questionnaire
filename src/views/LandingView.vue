<template>
  <div class="bg-[#EAEAEA] h-screen lg:h-screen flex justify-center items-center text-center">
    <div>
      <Transition
        name="slide-down"
        enter-active-class="slide-down-enter-active"
        enter-class="slide-down-enter"
        appear
      >
        <IconRocketeer class="mb-24 ml-1" />
      </Transition>
      <RouterLink
        to="/personal-info"
        class="text-xl font-bold font-arial text-3xl text-[#232323] bg-opacity-50 rounded-full transform hover:scale-110 transition-transform hover:font-medium hover:text-black hover:filter-hover hover:text-shadow"
        >კითხვარის<br />
        დაწყება</RouterLink
      >
    </div>
  </div>
</template>

<script setup>
import IconRocketeer from '@/components/icons/IconRocketeer.vue'
import { RouterLink } from 'vue-router'
localStorage.clear()
</script>

<style scoped>
.hover\:font-medium:hover {
  font-weight: 500;
}

.hover\:text-black:hover {
  color: black;
}

.hover\:filter-hover:hover {
  filter: drop-shadow(0.18rem 0rem 0rem #353935);
}

.hover\:text-shadow:hover {
  text-shadow: 0px 0px 0.01rem gray;
}
.slide-down-enter-active {
  transition: all 1s;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
