<template>
  <Form @submit="handleHadCovidForm">
    <div class="flex mt-6">
      <div class="ml-10 flex flex-col lg:ml-48 lg:w-1/3">
        <div class="mt-6 font-arial font-semibold">
          <label
            for="name"
            class="block text-xl font-bold mb-3 leading-7"
            :class="{ 'text-normal': covidQuestion }"
            >გაქვთ გადატანილი Covid-19*</label
          >
          <div class="flex flex-col ml-6">
            <div class="flex">
              <Field
                type="radio"
                name="covid"
                value="covid-yes"
                rules="required"
                class="mr-2 w-5 accent-black"
                @click="showAntiBodiesQuestion = true"
                v-model="covidQuestion"
              />
              <span class="ml-4 leading-7">კი</span>
            </div>
            <div class="flex mt-2">
              <Field
                type="radio"
                name="covid"
                value="covid-no"
                rules="required"
                class="mr-2 w-5 accent-black"
                @click="
                  ;(showAntiBodiesQuestion = false), (showTestDate = false), (showCovidDate = false)
                "
                v-model="covidQuestion"
              />
              <span class="ml-4 leading-7">არა</span>
            </div>
            <div class="flex mt-2">
              <Field
                type="radio"
                name="covid"
                value="covid-now"
                rules="required"
                class="mr-2 w-5 accent-black"
                @click="
                  ;(showAntiBodiesQuestion = false), (showTestDate = false), (showCovidDate = false)
                "
                v-model="covidQuestion"
              />
              <span class="ml-4 leading-7">ახლა მაქვს</span>
            </div>
          </div>
          <!-- Antibodies -->
          <div v-if="showAntiBodiesQuestion" class="mt-11">
            <label for="name" class="block text-xl font-bold mb-3 leading-7"
              >ანტისხეულების ტესტი გაქვს გაკეთებული?*</label
            >
            <div class="flex flex-col ml-6">
              <div class="flex">
                <Field
                  type="radio"
                  name="antibodies"
                  value="antibodies-yes"
                  rules="required"
                  class="mr-2 w-5 accent-black"
                  @click=";(showTestDate = true), (showCovidDate = false)"
                  v-model="antibodiesQuestion"
                />
                <span class="ml-4 leading-7">კი</span>
              </div>
              <div class="flex mt-2">
                <Field
                  type="radio"
                  name="antibodies"
                  value="antibodies-no"
                  rules="required"
                  class="mr-2 w-5 accent-black"
                  @click=";(showCovidDate = true), (showTestDate = false)"
                  v-model="antibodiesQuestion"
                />
                <span class="ml-4 leading-7">არა</span>
              </div>
            </div>
          </div>
          <!-- Test / covid date -->
          <div v-if="showTestDate" class="mt-11">
            <label for="name" class="block text-xl font-bold mb-2"
              >თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი <br />რიცხვი და ანტისხეულების
              რაოდენობა*</label
            >
            <Field
              :type="inputType"
              placeholder="რიცხვი"
              name="antibodiesTestDate"
              rules="required"
              class="py-3 px-4 border border-black w-8/12 bg-[#EAEAEA] placeholder:text-[#232323] font-normal text-xs ml-6 mt-8"
              @blur="inputType = 'text'"
              @focus="inputType = 'date'"
              v-model="antibodiesTestDate"
            />

            <Field
              type="text"
              placeholder="ანტისხეულების რაოდენობა"
              rules="required"
              name="antibodiesAmount"
              class="py-3 px-4 border border-black w-8/12 bg-[#EAEAEA] placeholder:text-[#232323] font-normal text-xs ml-6 mt-4"
              v-model="antibodiesAmount"
            />
          </div>

          <div v-if="showCovidDate" class="mt-11">
            <label for="name" class="block text-xl font-bold mb-2"
              >მიუთითე მიახლოებითი პერიოდი(დღე/თვე/წელი) <br />
              როდის გქონდა Covid-19*</label
            >
            <Field
              :type="inputType"
              placeholder="დდ/თთ/წწ"
              rules="required"
              name="hadCovidAtDate"
              class="py-3 px-4 border border-black w-8/12 bg-[#EAEAEA] placeholder:text-[#232323] font-normal text-xs ml-6 mt-8"
              @blur="inputType = 'text'"
              @focus="inputType = 'date'"
              v-model="hadCovidAtDate"
            />
          </div>
        </div>
      </div>
      <img src="/images/covid-info.png" alt="friends" class="hidden lg:block ml-14" />
    </div>
    <div class="mt-24 mb-24 flex justify-center lg:mt-0 lg:mb-0">
      <RouterLink to="/personal-info" class="mr-14">
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
import { ref, onUnmounted, onMounted } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()
let showAntiBodiesQuestion = ref(false)
let showTestDate = ref(false)
let showCovidDate = ref(false)
let inputType = ref('text')

let covidQuestion = ref('')
let antibodiesQuestion = ref('')
let antibodiesTestDate = ref('')
let antibodiesAmount = ref('')
let hadCovidAtDate = ref('')

onMounted(() => {
  window.onbeforeunload = function () {
    storeFormDataInLocalStorage()
  }
  if (localStorage.getItem('covid-info') !== null) {
    covidQuestion.value = JSON.parse(localStorage.getItem('covid-info')).covidQuestion
    if (covidQuestion.value == 'covid-yes') {
      showAntiBodiesQuestion.value = true
      antibodiesQuestion.value = JSON.parse(localStorage.getItem('covid-info')).antibodiesQuestion
      if (antibodiesQuestion.value == 'antibodies-yes') {
        showTestDate.value = true
        antibodiesTestDate.value = JSON.parse(localStorage.getItem('covid-info')).antibodiesTestDate
        antibodiesAmount.value = JSON.parse(localStorage.getItem('covid-info')).antibodiesAmount
      } else {
        hadCovidAtDate.value = JSON.parse(localStorage.getItem('covid-info')).hadCovidAtDate
        showCovidDate.value = true
      }
    }
  }
})

onUnmounted(() => {
  storeFormDataInLocalStorage()
})

function handleHadCovidForm() {
  router.push({ name: 'vaccination-info' })
}

function storeFormDataInLocalStorage() {
  localStorage.setItem(
    'covid-info',
    JSON.stringify({
      covidQuestion: covidQuestion.value,
      antibodiesQuestion: antibodiesQuestion.value,
      antibodiesTestDate: antibodiesTestDate.value,
      antibodiesAmount: antibodiesAmount.value,
      hadCovidAtDate: hadCovidAtDate.value
    })
  )
}
</script>
