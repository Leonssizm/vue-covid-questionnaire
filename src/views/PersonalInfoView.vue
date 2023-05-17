<template>
  <div class="h-full lg:h-screen bg-[#EAEAEA] overflow-hidden">
    <Header :pageNum="1" />
    <div class="flex flex-col">
      <PersonalInfoForm />
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import PersonalInfoForm from '@/components/forms/personalInfo/PersonalInfoForm.vue'
document.title = 'Personal Info'
</script>
