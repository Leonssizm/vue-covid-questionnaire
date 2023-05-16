<template>
  <div class="mt-11">
    <label for="name" class="block text-xl font-bold mb-3 leading-7">
      კვირაში რამდენი დღე ისურვებდი ოფისიდან <br />მუშაობას?*
    </label>
    <div class="flex flex-col ml-6 accent-black">
      <div class="flex">
        <Field
          type="radio"
          name="office_workdays"
          class="mr-2 w-5"
          value="1"
          rules="required"
          @input="$emit('update:modelValue', $event.target.value)"
          v-model="initialValue"
        />
        <SuggestionsFormInputLabel label="1" />
      </div>
      <div class="flex mt-2">
        <Field
          type="radio"
          name="office_workdays"
          class="mr-2 w-5"
          value="2"
          rules="required"
          @input="$emit('update:modelValue', $event.target.value)"
          v-model="initialValue"
        />
        <SuggestionsFormInputLabel label="2" />
      </div>
      <div class="flex mt-2">
        <Field
          type="radio"
          name="office_workdays"
          class="mr-2 w-5"
          value="3"
          rules="required"
          @input="$emit('update:modelValue', $event.target.value)"
          v-model="initialValue"
        />
        <SuggestionsFormInputLabel label="3" />
      </div>
      <div class="flex mt-2">
        <Field
          type="radio"
          name="office_workdays"
          class="mr-2 w-5"
          value="4"
          rules="required"
          @input="$emit('update:modelValue', $event.target.value)"
          v-model="initialValue"
        />
        <SuggestionsFormInputLabel label="4" />
      </div>
      <div class="flex mt-2">
        <Field
          type="radio"
          name="office_workdays"
          class="mr-2 w-5"
          value="5"
          rules="required"
          @input="$emit('update:modelValue', $event.target.value)"
          v-model="initialValue"
        />
        <SuggestionsFormInputLabel label="5" />
      </div>
    </div>
  </div>
</template>

<script setup>
import SuggestionsFormInputLabel from '@/components/forms/suggestions/SuggestionsFormInputLabel.vue'
import { Field } from 'vee-validate'
import { inject } from 'vue'

const initialValue = inject('officeWorkDaysQuestion')

defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>
