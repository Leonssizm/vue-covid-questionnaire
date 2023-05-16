<template>
  <div>
    <div class="relative">
      <img src="/images/covid-info.png" alt="infected" class="hidden lg:block ml-14" />

      <Transition
        name="slide-down"
        enter-active-class="slide-down-enter-active"
        enter-class="slide-down-enter"
        appear
      >
        <div class="absolute top-0 w-full h-full">
          <CovidInfoHighlight class="opacity-80 mt-52 ml-20" />
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import CovidInfoHighlight from '@/components/icons/highlights/IconCovidInfo.vue'
</script>

<style scoped>
.slide-down-enter-active {
  transition: all 0.6s;
}

.slide-down-enter-from {
  opacity: 0.1;
  transform: translateX(20%) translateY(-10%);
}

.slide-down-enter-to {
  opacity: 0.7;
  transform: translateX(0);
}
</style>
