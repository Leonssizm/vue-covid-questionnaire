<template>
  <Form @submit="handleHadCovidForm">
    <div class="flex mt-6">
      <div class="ml-10 flex flex-col lg:ml-48 lg:w-1/3">
        <div class="mt-6 font-arial font-semibold">
          <label
            for="name"
            class="block text-xl font-bold mb-3 leading-7"
            :class="{ 'text-red-500': covidQuestion }"
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
                <input
                  type="radio"
                  name="antibodies"
                  value="antibodies-yes"
                  class="mr-2 w-5 accent-black"
                  @click=";(showTestDate = true), (showCovidDate = false)"
                />
                <span class="ml-4 leading-7">კი</span>
              </div>
              <div class="flex mt-2">
                <input
                  type="radio"
                  name="antibodies"
                  value="antibodies-no"
                  class="mr-2 w-5 accent-black"
                  @click=";(showCovidDate = true), (showTestDate = false)"
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
            <input
              :type="inputType"
              placeholder="რიცხვი"
              class="py-3 px-4 border border-black w-8/12 bg-[#EAEAEA] placeholder:text-[#232323] font-normal text-xs ml-6 mt-8"
              @blur="inputType = 'text'"
              @focus="inputType = 'date'"
            />

            <input
              type="text"
              placeholder="ანტისხეულების რაოდენობა"
              class="py-3 px-4 border border-black w-8/12 bg-[#EAEAEA] placeholder:text-[#232323] font-normal text-xs ml-6 mt-4"
            />
          </div>

          <div v-if="showCovidDate" class="mt-11">
            <label for="name" class="block text-xl font-bold mb-2"
              >მიუთითე მიახლოებითი პერიოდი(დღე/თვე/წელი) <br />
              როდის გქონდა Covid-19*</label
            >
            <input
              :type="inputType"
              placeholder="დდ/თთ/წწ"
              class="py-3 px-4 border border-black w-8/12 bg-[#EAEAEA] placeholder:text-[#232323] font-normal text-xs ml-6 mt-8"
              @blur="inputType = 'text'"
              @focus="inputType = 'date'"
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
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

let showAntiBodiesQuestion = ref(false)
let showTestDate = ref(false)
let showCovidDate = ref(false)
let inputType = ref('text')

let covidQuestion = ref('')
const router = useRouter()

function handleHadCovidForm() {
  router.push({ name: 'vaccination-info' })
}
</script>
