<template>
  <div class="h-screen bg-[#EAEAEA]">
    <BaseHeader :pageNum="2" />
    <div>
      <CovidInfoForm />
    </div>
  </div>
</template>

<script setup>
import BaseHeader from '@/components/BaseHeader.vue'
import CovidInfoForm from '@/components/forms/covidInfo/CovidInfoForm.vue'
document.title = 'Covid Info'
</script>
