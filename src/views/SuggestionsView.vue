<template>
  <div class="h-full lg:h-screen bg-[#EAEAEA]">
    <Header :pageNum="4" />
    <div class="flex flex-col">
      <SuggestionsForm />
    </div>
  </div>
</template>
<script setup>
import Header from '@/components/Header.vue'
import SuggestionsForm from '@/components/forms/SuggestionsForm.vue'
document.title = 'Personal Info'
</script>
