<template>
  <Form>
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
                    vaccinatedQuestion = 'yes'
                    updatePopupContent('none')
                  }
                "
              />
              <span class="ml-4 leading-7">კი</span>
            </div>
            <div class="flex mt-2">
              <Field
                type="radio"
                name="covid"
                value="vaccination-no"
                class="mr-2 w-5 accent-black"
                @click="
                  () => {
                    vaccinatedQuestion = 'no'
                    updatePopupContent('none')
                  }
                "
              />
              <span class="ml-4 leading-7">არა</span>
            </div>
          </div>
          <!-- vaccination form -->
          <div class="mt-11" v-if="vaccinatedQuestion === 'yes'">
            <label for="name" class="block text-xl font-bold mb-3 leading-7"
              >აირჩიე რა ეტაპზე ხარ?*</label
            >
            <div class="flex flex-col ml-6">
              <div class="flex">
                <input
                  type="radio"
                  name="antibodies"
                  value="antibodies-yes"
                  class="mr-2 w-5 accent-black"
                />
                <span class="ml-4 leading-7">პირველი დოზა და რეგისტრირებული ვარ მეორეზე</span>
              </div>
              <div class="flex mt-2">
                <input
                  type="radio"
                  name="antibodies"
                  value="antibodies-no"
                  class="mr-2 w-5 accent-black"
                />
                <span class="ml-4 leading-7">სრულიად აცრილი ვარ</span>
              </div>
              <div class="flex mt-2">
                <input
                  type="radio"
                  name="antibodies"
                  value="antibodies-no"
                  class="mr-2 w-5 accent-black"
                  @click="
                    () => {
                      showPopupModal = true
                      updatePopupContent('vaccinated-once')
                    }
                  "
                />
                <span class="ml-4 leading-7">პირველი დოზა და არ დავრეგისრირებულვარ მეორეზე</span>
              </div>
            </div>
          </div>

          <div class="mt-11" v-if="vaccinatedQuestion === 'no'">
            <label for="name" class="block text-xl font-bold mb-3 leading-7">რას ელოდები?*</label>
            <div class="flex flex-col ml-6">
              <div class="flex">
                <input
                  type="radio"
                  name="antibodies"
                  value="antibodies-yes"
                  class="mr-2 w-5 accent-black"
                  @click="
                    () => {
                      showPopupModal = false
                      updatePopupContent('none')
                    }
                  "
                />
                <span class="ml-4 leading-7">დარეგისტრირებული ვარ და ველოდები რიცხვს</span>
              </div>
              <div class="flex mt-2">
                <input
                  type="radio"
                  name="antibodies"
                  value="antibodies-no"
                  class="mr-2 w-5 accent-black"
                  @click="
                    () => {
                      showPopupModal = true
                      updatePopupContent('not-planning')
                    }
                  "
                />
                <span class="ml-4 leading-7">არ ვგეგმავ</span>
              </div>
              <div class="flex mt-2">
                <input
                  type="radio"
                  name="antibodies"
                  value="antibodies-no"
                  class="mr-2 w-5 accent-black"
                  @click="
                    () => {
                      showPopupModal = true
                      updatePopupContent('planning-to-vaccinate')
                    }
                  "
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
      <img src="/images/vaccination-doctor.png" alt="friends" class="hidden lg:block ml-14" />
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
import { Form, Field } from 'vee-validate'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

let vaccinatedQuestion = ref('')
let showPopupModal = ref(false)
let popupContent = ref('')

function updatePopupContent(element) {
  if (element == 'vaccinated-once') {
    popupContent.value =
      'რომ არ გადადო, <br/> ბარემ ახლავე დარეგისტრირდი </br> <a class="text-[#1289AE]" href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a>'
  } else if (element == 'none') {
    popupContent.value = ''
  } else if (element == 'not-planning') {
    popupContent.value =
      '👉 <a class="text-[#1289AE]" href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a>'
  } else if (element == 'planning-to-vaccinate') {
    popupContent.value =
      'ახალი პროტოკოლით კოვიდის გადატანიდან 1 <br/> თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება. <hr class="mt-3"> 👉 რეგისტრაციის ბმული <br/> <a class="text-[#1289AE]" href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a> '
  }
}
</script>
