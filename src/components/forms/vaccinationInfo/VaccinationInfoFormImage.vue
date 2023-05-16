<template>
  <div>
    <div class="relative">
      <img src="/images/vaccination-doctor.png" alt="friends" class="hidden lg:block ml-14" />

      <Transition
        name="slide-down"
        enter-active-class="slide-down-enter-active"
        enter-class="slide-down-enter"
        appear
      >
        <div class="absolute top-0 w-full h-full">
          <VaccineInfoHighlight class="opacity-80 ml-6" />
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import VaccineInfoHighlight from '@/components/icons/highlights/IconVaccineInfo.vue'
</script>
<style scoped>
.slide-down-enter-active {
  transition: all 0.6s;
}

.slide-down-enter-from {
  opacity: 0.1;
  transform: translateX(-10%) translateY(30%);
}

.slide-down-enter-to {
  opacity: 0.7;
  transform: translateX(0);
}
</style>
