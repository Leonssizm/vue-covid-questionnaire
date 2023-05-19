<template>
  <div class="h-screen bg-[#EAEAEA]">
    <BaseHeader :pageNum="3" />
    <div class="flex flex-col">
      <VaccinationInfoForm />
    </div>
  </div>
</template>

<script setup>
import BaseHeader from '@/components/BaseHeader.vue'
import VaccinationInfoForm from '@/components/forms/vaccinationInfo/VaccinationInfoForm.vue'
document.title = 'Vaccination Info'
</script>
