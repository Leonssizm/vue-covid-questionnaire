<template>
  <div class="h-full lg:h-screen bg-[#EAEAEA] overflow-hidden">
    <BaseHeader :pageNum="1" />
    <div class="flex flex-col">
      <PersonalInfoForm />
    </div>
  </div>
</template>

<script setup>
import BaseHeader from '@/components/BaseHeader.vue'
import PersonalInfoForm from '@/components/forms/personalInfo/PersonalInfoForm.vue'
document.title = 'Personal Info'
</script>
