<template>
  <label for="name" class="block text-xl font-bold mb-3 leading-7">აირჩიე რა ეტაპზე ხარ?*</label>
  <div class="flex flex-col ml-6">
    <div class="flex">
      <Field
        type="radio"
        name="vaccination_status"
        rules="required"
        value="first_dosage_and_registered_on_the_second"
        class="mr-2 w-5 accent-black"
        @click="showPopupModal = false"
        @input="$emit('update:modelValue', $event.target.value)"
        v-model="initialValue"
      />
      <span class="ml-4 leading-7">პირველი დოზა და რეგისტრირებული ვარ მეორეზე</span>
    </div>
    <div class="flex mt-2">
      <Field
        type="radio"
        name="vaccination_status"
        rules="required"
        value="fully_vaccinated"
        class="mr-2 w-5 accent-black"
        @click="showPopupModal = false"
        @input="$emit('update:modelValue', $event.target.value)"
        v-model="initialValue"
      />
      <span class="ml-4 leading-7">სრულიად აცრილი ვარ</span>
    </div>
    <div class="flex mt-2">
      <Field
        type="radio"
        name="vaccination_status"
        rules="required"
        value="first_dosage_and_not_registered_yet"
        class="mr-2 w-5 accent-black"
        @click="
          () => {
            showPopupModal = true
            updatePopupContent('first_dosage_and_not_registered_yet')
          }
        "
        @input="$emit('update:modelValue', $event.target.value)"
        v-model="initialValue"
      />
      <span class="ml-4 leading-7">პირველი დოზა და არ დავრეგისრირებულვარ მეორეზე</span>
    </div>
  </div>
  <!-- popup -->
  <div class="mt-11 ml-10" v-if="showPopupModal">
    <span v-html="popupContent" class="font-arial font-normal"></span>
  </div>
</template>

<script setup>
import { Field } from 'vee-validate'
import { ref, inject } from 'vue'
let showPopupModal = ref(false)
let popupContent = ref('')
let initialValue = inject('vaccinationStageQuestion')

defineProps({
  modelValue: {
    type: String,
    required: true
  }
})
defineEmits(['update:modelValue'])

function updatePopupContent(element) {
  if (element === 'first_dosage_and_not_registered_yet') {
    popupContent.value =
      'რომ არ გადადო, <br/> ბარემ ახლავე დარეგისტრირდი </br> <a class="text-[#1289AE]" href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a>'
  }
}
</script>
