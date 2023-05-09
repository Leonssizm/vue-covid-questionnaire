<template>
  <div class="flex justify-around lg:flex lg:justify-between lg:mx-48">
    <div class="mt-24 flex items-center">
      <RedberryHeader />
    </div>
    <div class="mt-24">
      <h2 class="font-bold text-4xl font-anonymous uppercase">{{ pageNum }}/4</h2>
    </div>
  </div>
  <div class="lg:border-black border-b-2 mt-6 mx-48"></div>
</template>

<script setup>
import RedberryHeader from './icons/RedberryHeader.vue'

defineProps(['pageNum'])
</script>
