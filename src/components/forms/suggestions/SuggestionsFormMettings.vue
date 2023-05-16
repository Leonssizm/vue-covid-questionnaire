<template>
  <div class="mt-11">
    <label class="block text-xl font-bold mb-3 leading-7">
      რა სიხშირით შეიძლება გვქონდეს საერთო <br />
      არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*
    </label>
    <div class="flex flex-col ml-6 accent-black">
      <div class="flex">
        <Field
          type="radio"
          name="online_meetings"
          class="mr-2 w-5"
          value="twice_a_week"
          rules="required"
          @input="$emit('update:modelValue', $event.target.value)"
          v-model="initialValue"
        />
        <SuggestionsFormInputLabel label="კვირაში ორჯერ" />
      </div>
      <div class="flex mt-2">
        <Field
          type="radio"
          name="online_meetings"
          class="mr-2 w-5"
          value="once_a_week"
          rules="required"
          @input="$emit('update:modelValue', $event.target.value)"
          v-model="initialValue"
        />
        <SuggestionsFormInputLabel label="კვირაში ერთხელ" />
      </div>
      <div class="flex mt-2">
        <Field
          type="radio"
          name="online_meetings"
          class="mr-2 w-5"
          value="once_in_a_two_weeks"
          rules="required"
          @input="$emit('update:modelValue', $event.target.value)"
          v-model="initialValue"
        />
        <SuggestionsFormInputLabel label="ორ კვირაში ერთხელ" />
      </div>
      <div class="flex mt-2">
        <Field
          type="radio"
          name="online_meetings"
          class="mr-2 w-5"
          value="once_in_a_month"
          rules="required"
          @input="$emit('update:modelValue', $event.target.value)"
          v-model="initialValue"
        />
        <SuggestionsFormInputLabel label="თვეში ერთხელ" />
      </div>
    </div>
  </div>
</template>
<script setup>
import SuggestionsFormInputLabel from '@/components/forms/suggestions/SuggestionsFormInputLabel.vue'

import { Field } from 'vee-validate'
import { inject } from 'vue'

const initialValue = inject('onlineMeetingsQuestion')

defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>
