<template>
  <label for="name" class="block text-xl font-bold mb-3 leading-7">რას ელოდები?*</label>
  <div class="flex flex-col ml-6">
    <div class="flex">
      <Field
        type="radio"
        name="vaccination-refusal"
        value="registered_and_waiting"
        rules="required"
        class="mr-2 w-5 accent-black"
        @input="$emit('update:modelValue', $event.target.value)"
        v-model="initialValue"
      />
      <span class="ml-4 leading-7">დარეგისტრირებული ვარ და ველოდები რიცხვს</span>
    </div>
    <div class="flex mt-2">
      <Field
        type="radio"
        name="vaccination-refusal"
        value="not_planning"
        rules="required"
        class="mr-2 w-5 accent-black"
        @input="$emit('update:modelValue', $event.target.value)"
        v-model="initialValue"
      />
      <span class="ml-4 leading-7">არ ვგეგმავ</span>
    </div>
    <div class="flex mt-2">
      <Field
        type="radio"
        name="vaccination-refusal"
        value="had_covid_and_planning_to_be_vaccinated"
        rules="required"
        class="mr-2 w-5 accent-black"
        @input="$emit('update:modelValue', $event.target.value)"
        v-model="initialValue"
      />
      <span class="ml-4 leading-7">გადატანილი მაქვს და ვგეგმავ აცრას</span>
    </div>
  </div>
  <!-- popup -->
  <div class="mt-11 ml-10" v-if="initialValue === 'not_planning'">
    <span class="font-arial font-normal">
      👉
      <a class="text-[#1289AE]" href="https://booking.moh.gov.ge/"
        >https://booking.moh.gov.ge/</a
      ></span
    >
  </div>
  <div class="mt-11 ml-10" v-if="initialValue === 'had_covid_and_planning_to_be_vaccinated'">
    <span class="font-arial font-normal">
      ახალი პროტოკოლით კოვიდის გადატანიდან 1 <br />
      თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.
      <hr class="mt-3" />
      👉 რეგისტრაციის ბმული <br />
      <a class="text-[#1289AE]" href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a>
    </span>
  </div>
</template>
<script setup>
import { Field } from 'vee-validate'
import { inject } from 'vue'

let initialValue = inject('vaccinationRefusalQuestion')

defineProps({
  modelValue: {
    type: String,
    required: true
  }
})
defineEmits(['update:modelValue'])
</script>
