<template>
  <div class="flex mt-6 font-arial text-xl">
    <div class="ml-10 flex flex-col lg:ml-48 lg:w-1/3 overflow-auto max-h-[700px]">
      <SuggestionsFormInfo />
      <Form @submit="handleSuggestionsForm">
        <SuggestionsFormMettings v-model="onlineMeetingsQuestion"> </SuggestionsFormMettings>
        <SuggestionsFormOffice v-model="officeWorkDaysQuestion"> </SuggestionsFormOffice>
        <SuggestionsFormInput>
          <Field
            v-model="physicalGathering"
            name="physical_gathering"
            type="text"
            class="py-4 px-4 h-40 text-start border border-black lg:w-10/12 bg-[#EAEAEA] placeholder:text-[#232323] font-normal text-xs"
          />
        </SuggestionsFormInput>
        <SuggestionsFormInput>
          <Field
            v-model="enviroment"
            name="enviroment"
            type="text"
            class="py-4 px-4 h-40 text-start border border-black lg:w-10/12 bg-[#EAEAEA] placeholder:text-[#232323] font-normal text-xs"
          />
        </SuggestionsFormInput>
        <div class="flex justify-end mr-28 mt-16">
          <button
            class="text-white font-bold py-3 px-5 rounded-full bg-[#208298] capitalize text-lg text-white transition ease-in-out delay-150"
          >
            დასრულება
          </button>
        </div>
      </Form>
    </div>
    <SuggestionsFormImage />
  </div>
  <div class="mt-24 mb-24 flex justify-center lg:mt-0 lg:mb-0">
    <RouterLink to="/vaccination-info" class="mr-14 mt-10">
      <IconPrevious />
    </RouterLink>
  </div>
</template>
<script setup>
import IconPrevious from '@/components/icons/IconPrevious.vue'
import SuggestionsFormInfo from '@/components/forms/suggestions/SuggestionsFormInfo.vue'
import SuggestionsFormImage from '@/components/forms/suggestions/SuggestionsFormImage.vue'
import SuggestionsFormMettings from '@/components/forms/suggestions/SuggestionsFormMettings.vue'
import SuggestionsFormOffice from '@/components/forms/suggestions/SuggestionsFormOffice.vue'
import SuggestionsFormInput from '@/components/forms/suggestions/SuggestionsFormInput.vue'
import { Form, Field } from 'vee-validate'
import { ref, onMounted, onUnmounted, provide } from 'vue'
import { useStore } from 'vuex'
// import { RouterLink, useRouter } from 'vue-router'
document.title = 'suggestions'

const store = useStore()
let onlineMeetingsQuestion = ref('')
let officeWorkDaysQuestion = ref('')
let physicalGathering = ref('')
let enviroment = ref('')

provide('onlineMeetingsQuestion', onlineMeetingsQuestion)
provide('officeWorkDaysQuestion', officeWorkDaysQuestion)

onMounted(() => {
  window.onbeforeunload = function () {
    store.commit('suggestionsStore/storeSuggestionsInfoInLocalStorage', {
      onlineMeetings: onlineMeetingsQuestion.value,
      officeWorkdays: officeWorkDaysQuestion.value,
      physicalGatherings: physicalGathering.value,
      enviroment: enviroment.value
    })
  }
  if (localStorage.getItem('suggestions') != null) {
    store.commit('suggestionsStore/getSuggestionsInfoFormValues')

    onlineMeetingsQuestion.value = store.state.suggestionsStore.onlineMeetings
    officeWorkDaysQuestion.value = store.state.suggestionsStore.officeWorkdays
    physicalGathering.value = store.state.suggestionsStore.physicalGatherings
    enviroment.value = store.state.suggestionsStore.enviroment
  }
})

onUnmounted(() => {
  store.commit('suggestionsStore/storeSuggestionsInfoInLocalStorage', {
    onlineMeetings: onlineMeetingsQuestion.value,
    officeWorkdays: officeWorkDaysQuestion.value,
    physicalGatherings: physicalGathering.value,
    enviroment: enviroment.value
  })
})

function handleSuggestionsForm() {
  store.commit('suggestionsStore/setSuggestionsInfoFormValues', {
    onlineMeetings: onlineMeetingsQuestion.value,
    officeWorkdays: officeWorkDaysQuestion.value,
    physicalGatherings: physicalGathering.value,
    enviroment: enviroment.value
  })

  console.log(store.state.suggestionsStore)
}
</script>
