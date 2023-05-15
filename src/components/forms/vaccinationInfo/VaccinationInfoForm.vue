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
                @click="
                  () => {
                    updatePopupContent('none')
                  }
                "
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
                @click="
                  () => {
                    updatePopupContent('none')
                  }
                "
                v-model="vaccinatedQuestion"
              />
              <span class="ml-4 leading-7">არა</span>
            </div>
          </div>
          <!-- vaccination form -->
          <div class="mt-11" v-if="vaccinatedQuestion === 'vaccination-yes'">
            <label for="name" class="block text-xl font-bold mb-3 leading-7"
              >აირჩიე რა ეტაპზე ხარ?*</label
            >
            <div class="flex flex-col ml-6">
              <div class="flex">
                <Field
                  type="radio"
                  name="vaccination_status"
                  rules="required"
                  value="first_dosage_and_registered_on_the_second"
                  class="mr-2 w-5 accent-black"
                  @click="updatePopupContent('none')"
                  v-model="vaccinationStageQuestion"
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
                  @click="updatePopupContent('none')"
                  v-model="vaccinationStageQuestion"
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
                  v-model="vaccinationStageQuestion"
                />
                <span class="ml-4 leading-7">პირველი დოზა და არ დავრეგისრირებულვარ მეორეზე</span>
              </div>
            </div>
          </div>

          <div class="mt-11" v-if="vaccinatedQuestion === 'vaccination-no'">
            <label for="name" class="block text-xl font-bold mb-3 leading-7">რას ელოდები?*</label>
            <div class="flex flex-col ml-6">
              <div class="flex">
                <Field
                  type="radio"
                  name="vaccination-refusal"
                  value="registered_and_waiting"
                  rules="required"
                  class="mr-2 w-5 accent-black"
                  @click="
                    () => {
                      showPopupModal = false
                      updatePopupContent('none')
                    }
                  "
                  v-model="vaccinationRefusalQuestion"
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
                  @click="
                    () => {
                      showPopupModal = true
                      updatePopupContent('not_planning')
                    }
                  "
                  v-model="vaccinationRefusalQuestion"
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
                  @click="
                    () => {
                      showPopupModal = true
                      updatePopupContent('had_covid_and_planning_to_be_vaccinated')
                    }
                  "
                  v-model="vaccinationRefusalQuestion"
                />
                <span class="ml-4 leading-7">გადატანილი მაქვს და ვგეგმავ აცრას</span>
              </div>
            </div>
          </div>
          <!-- popup -->
          <div class="mt-11 ml-10" v-if="showPopupModal">
            <span v-html="popupContent" class="font-arial font-normal"></span>
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
import { Form, Field } from 'vee-validate'
import { ref, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import { RouterLink, useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
let vaccinatedQuestion = ref('')
let showPopupModal = ref(false)
let popupContent = ref('')

let vaccinationStageQuestion = ref('')
let vaccinationRefusalQuestion = ref('')

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

function updatePopupContent(element) {
  if (element == 'first_dosage_and_not_registered_yet') {
    popupContent.value =
      'რომ არ გადადო, <br/> ბარემ ახლავე დარეგისტრირდი </br> <a class="text-[#1289AE]" href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a>'
  } else if (element == 'none') {
    popupContent.value = ''
  } else if (element == 'not_planning') {
    popupContent.value =
      '👉 <a class="text-[#1289AE]" href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a>'
  } else if (element == 'had_covid_and_planning_to_be_vaccinated') {
    popupContent.value =
      'ახალი პროტოკოლით კოვიდის გადატანიდან 1 <br/> თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება. <hr class="mt-3"> 👉 რეგისტრაციის ბმული <br/> <a class="text-[#1289AE]" href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a> '
  }
}

function handleVaccinationInfoForm() {
  router.push({ name: 'suggestions' })
  store.commit('vaccinationInfoStore/setVaccinationInfoFormValues', {
    vaccinatedQuestion: vaccinatedQuestion.value,
    vaccinationStage: vaccinationStageQuestion.value,
    vaccinationRefusalReasoning: vaccinationRefusalQuestion.value
  })
}
</script>
