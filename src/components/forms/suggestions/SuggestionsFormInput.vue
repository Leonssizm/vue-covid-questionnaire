<template>
  <div class="mt-11">
    <label for="name" class="block text-xl font-bold mb-3 leading-7">
      {{ inputLabel }}
    </label>
    <div class="flex flex-col">
      <div class="flex">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps(['inputLabel'])
</script>
