<template>
  <div class="bg-[#232323]">
    <div class="flex items-center justify-center h-screen">
      <div class="relative">
        <div class="mb-16">
          <Transition
            name="slide-up"
            enter-active-class="slide-down-enter-active"
            enter-class="slide-down-enter"
            appear
          >
            <div class="absolute top-0 w-full h-full">
              <IconStars class="opacity-80" />
            </div>
          </Transition>
        </div>
        <h1 class="text-white text-6xl tracking-wide font-arial font-bold">მადლობა</h1>
        <Transition
          name="slide-down"
          enter-active-class="slide-down-enter-active"
          enter-class="slide-down-enter"
          appear
        >
          <div class="absolute top-0 w-full h-full">
            <IconStars class="opacity-80 ml-64 mt-36" />
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>
<script setup>
import IconStars from '@/components/icons/highlights/IconStars.vue'
import { onMounted } from 'vue'

let personalInfo = JSON.parse(localStorage.getItem('personal-info'))
let covidInfo = JSON.parse(localStorage.getItem('covid-info'))
let vaccinationInfo = JSON.parse(localStorage.getItem('vaccination-info'))
let suggestions = JSON.parse(localStorage.getItem('suggestions'))

let antibodiesTest = covidInfo.antibodiesQuestion === 'antibodies-yes' ? true : false
let vaccinationTest = vaccinationInfo.vaccinationStatus === 'vaccination-yes' ? true : false

onMounted(() => {
  fetch('https://covid19.devtest.ge/api/create', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      first_name: personalInfo.name,
      last_name: personalInfo.lastName,
      email: personalInfo.email,
      had_covid: covidInfo.covidQuestion,
      ...(covidInfo.covidQuestion === 'yes' && {
        had_antibody_test: antibodiesTest
      }),
      ...(antibodiesTest && {
        antibodies: {
          test_date: covidInfo.antibodiesTestDate,
          number: covidInfo.antibodiesAmount
        }
      }),
      ...(covidInfo.covidQuestion === 'yes' && {
        covid_sickness_date: covidInfo.hadCovidAtDate
      }),
      had_vaccine: vaccinationTest,
      ...(vaccinationTest && {
        vaccination_stage: vaccinationInfo.vaccinationStage
      }),
      ...(!vaccinationTest && {
        i_am_waiting: vaccinationInfo.vaccinationRefusalReasoning
      }),
      non_formal_meetings: suggestions.onlineMeetings,
      number_of_days_from_office: suggestions.officeWorkdays,
      ...(suggestions.physicalGatherings && {
        what_about_meetings_in_live: suggestions.physicalGatherings
      }),
      ...(suggestions.enviroment && {
        tell_us_your_opinion_about_us: suggestions.enviroment
      })
    })
  }).then((response) => {
    console.log(response)
    if (response.status === 201) {
      localStorage.clear()
    }
  })
})
</script>

<style scoped>
.slide-down-enter-active {
  transition: all 0.6s;
}

.slide-down-enter-from {
  opacity: 0.1;
  transform: translateX(-30%) translateY(-90%);
}

.slide-down-enter-to {
  opacity: 0.7;
  transform: translateX(0);
}

.slide-up-enter-active {
  transition: all 0.6s;
}

.slide-up-enter-from {
  opacity: 0.1;
  transform: translateX(30%) translateY(90%);
}

.slide-up-enter-to {
  opacity: 0.7;
  transform: translateX(0);
}
</style>
