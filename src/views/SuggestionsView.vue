<template>
  <div class="h-full lg:h-screen bg-[#EAEAEA]">
    <BaseHeader :pageNum="4" />
    <div class="flex flex-col">
      <SuggestionsForm />
    </div>
  </div>
</template>
<script setup>
import BaseHeader from '@/components/BaseHeader.vue'
import SuggestionsForm from '@/components/forms/suggestions/SuggestionsForm.vue'
document.title = 'Personal Info'
</script>
