<template>
  <div class="h-screen bg-[#EAEAEA]">
    <Header :pageNum="2" />
    <div class="flex flex-col">
      <CovidInfoForm />
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import CovidInfoForm from '@/components/forms/CovidInfoForm.vue'
document.title = 'Covid Info'
</script>
