<template>
  <Form @submit="handleVaccinationInfoForm">
    <div class="flex mt-6">
      <div class="ml-10 flex flex-col lg:ml-48 lg:w-1/3">
        <div class="mt-6 font-arial font-semibold">
          <label for="name" class="block text-xl font-bold mb-3 leading-7">უკვე აცრილი ხარ?*</label>
          <div class="flex flex-col ml-6">
            <div class="flex">
              <Field
                type="radio"
                name="covid"
                value="vaccination-yes"
                rules="required"
                class="mr-2 w-5 accent-black"
                v-model="vaccinatedQuestion"
              />
              <span class="ml-4 leading-7">კი</span>
            </div>
            <div class="flex mt-2">
              <Field
                type="radio"
                name="covid"
                rules="required"
                value="vaccination-no"
                class="mr-2 w-5 accent-black"
                v-model="vaccinatedQuestion"
              />
              <span class="ml-4 leading-7">არა</span>
            </div>
          </div>
          <!-- Vaccination Stage -->
          <div class="mt-11" v-if="vaccinatedQuestion === 'vaccination-yes'">
            <VaccinationInfoFormStage v-model="vaccinationStageQuestion"></VaccinationInfoFormStage>
          </div>
          <!-- Vaccination refusal -->
          <div class="mt-11" v-if="vaccinatedQuestion === 'vaccination-no'">
            <VaccinationInfoFormRefusal
              v-model="vaccinationRefusalQuestion"
            ></VaccinationInfoFormRefusal>
          </div>
        </div>
      </div>
      <VaccinationInfoFormImage />
    </div>
    <div class="mt-24 mb-24 flex justify-center lg:mt-0 lg:mb-0">
      <RouterLink to="/covid-info" class="mr-14">
        <IconPrevious />
      </RouterLink>
      <button class="ml-14">
        <IconNext />
      </button>
    </div>
  </Form>
</template>

<script setup>
import IconNext from '@/components/icons/IconNext.vue'
import IconPrevious from '@/components/icons/IconPrevious.vue'
import VaccinationInfoFormImage from '@/components/forms/vaccinationInfo/VaccinationInfoFormImage.vue'
import VaccinationInfoFormStage from '@/components/forms/vaccinationInfo/VaccinationInfoFormStage.vue'
import VaccinationInfoFormRefusal from '@/components/forms/vaccinationInfo/VaccinationInfoFormRefusal.vue'
import { Form, Field } from 'vee-validate'
import { ref, onMounted, onUnmounted, provide } from 'vue'
import { useStore } from 'vuex'
import { RouterLink, useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
let vaccinatedQuestion = ref('')

let vaccinationStageQuestion = ref('')
let vaccinationRefusalQuestion = ref('')

provide('vaccinationStageQuestion', vaccinationStageQuestion)
provide('vaccinationRefusalQuestion', vaccinationRefusalQuestion)

onMounted(() => {
  window.onbeforeunload = function () {
    store.commit('vaccinationInfoStore/storeVaccinationInfoInLocalStorage', {
      vaccinatedQuestion: vaccinatedQuestion.value,
      vaccinationStage: vaccinationStageQuestion.value,
      vaccinationRefusalReasoning: vaccinationRefusalQuestion.value
    })
  }
  if (localStorage.getItem('vaccination-info') !== null) {
    store.commit('vaccinationInfoStore/getVaccinationInfoFormValues')
    vaccinatedQuestion.value = store.state.vaccinationInfoStore.vaccinationStatus
    vaccinationStageQuestion.value = store.state.vaccinationInfoStore.vaccinationStage
    vaccinationRefusalQuestion.value = store.state.vaccinationInfoStore.vaccinationRefusalReasoning
  }
})

onUnmounted(() => {
  store.commit('vaccinationInfoStore/storeVaccinationInfoInLocalStorage', {
    vaccinatedQuestion: vaccinatedQuestion.value,
    vaccinationStage: vaccinationStageQuestion.value,
    vaccinationRefusalReasoning: vaccinationRefusalQuestion.value
  })
})

function handleVaccinationInfoForm() {
  router.push({ name: 'suggestions' })
  store.commit('vaccinationInfoStore/setVaccinationInfoFormValues', {
    vaccinatedQuestion: vaccinatedQuestion.value,
    vaccinationStage: vaccinationStageQuestion.value,
    vaccinationRefusalReasoning: vaccinationRefusalQuestion.value
  })

  console.log(store.state.vaccinationInfoStore)
}
</script>
