<template>
  <div class="h-screen bg-[#EAEAEA]">
    <Header :pageNum="3" />
    <div class="flex flex-col">
      <VaccinationInfoForm />
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import VaccinationInfoForm from '@/components/forms/vaccinationInfo/VaccinationInfoForm.vue'
document.title = 'Vaccination Info'
</script>
