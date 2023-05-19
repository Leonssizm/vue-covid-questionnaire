<template>
  <div>
    <span class="ml-4 leading-7">{{ label }}</span>
  </div>
</template>
<script setup>
defineProps({
  label: {
    type: String,
    required: true
  }
})
</script>
