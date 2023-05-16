<template>
  <div class="relative">
    <img src="/images/personal-info.png" alt="friends" class="hidden lg:ml-14 lg:mt-14 lg:block" />

    <Transition
      name="slide-down"
      enter-active-class="slide-down-enter-active"
      enter-class="slide-down-enter"
      appear
    >
      <div class="absolute top-0 w-full h-full mt-44 ml-44">
        <PersonalInfoHighlight class="opacity-70" />
      </div>
    </Transition>
  </div>
</template>
<script setup>
import PersonalInfoHighlight from '@/components/icons/highlights/IconPersonalInfo.vue'
</script>

<style scoped>
.slide-down-enter-active {
  transition: all 0.6s;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateX(-70%) translateY(60%);
}
.slide-down-enter-to {
  opacity: 0.7;
}
</style>
