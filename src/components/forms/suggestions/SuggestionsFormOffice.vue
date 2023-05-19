<template>
  <div class="mt-11">
    <label for="name" class="block text-xl font-bold mb-3 leading-7">
      კვირაში რამდენი დღე ისურვებდი ოფისიდან <br />მუშაობას?*
    </label>
    <div class="flex flex-col ml-6 accent-black">
      <div class="flex">
        <SuggestionsFormOfficeField
          value="1"
          rules="required"
          @input="$emit('update:modelValue', $event.target.value)"
          v-model="initialValue"
        />
        <SuggestionsFormInputLabel label="1" />
      </div>
      <div class="flex mt-2">
        <SuggestionsFormOfficeField
          value="2"
          rules="required"
          @input="$emit('update:modelValue', $event.target.value)"
          v-model="initialValue"
        />
        <SuggestionsFormInputLabel label="2" />
      </div>
      <div class="flex mt-2">
        <SuggestionsFormOfficeField
          value="3"
          rules="required"
          @input="$emit('update:modelValue', $event.target.value)"
          v-model="initialValue"
        />
        <SuggestionsFormInputLabel label="3" />
      </div>
      <div class="flex mt-2">
        <SuggestionsFormOfficeField
          value="4"
          rules="required"
          @input="$emit('update:modelValue', $event.target.value)"
          v-model="initialValue"
        />
        <SuggestionsFormInputLabel label="4" />
      </div>
      <div class="flex mt-2">
        <SuggestionsFormOfficeField
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
import SuggestionsFormOfficeField from '@/components/forms/suggestions/SuggestionsFormOfficeField.vue'
import { inject } from 'vue'

const initialValue = inject('officeWorkDaysQuestion')

defineProps({
  modelValue: {
    type: String,
    required: true
  }
})
defineEmits(['update:modelValue'])
</script>
