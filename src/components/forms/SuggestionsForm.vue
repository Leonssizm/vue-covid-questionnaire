<template>
  <div class="flex mt-6 font-arial text-xl">
    <div class="ml-10 flex flex-col lg:ml-48 lg:w-1/3 overflow-auto max-h-[700px]">
      <p>
        რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო, რომელსაც ჩვენი
        თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების განმავლობაში მიზნებისთვის ერთად
        ბრძოლის მიზეზი, ბევრისთვის კი — ჩვენთან გადმოსვლის.
      </p>
      <p class="mt-4">
        პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და ყოველდღიური კომუნიკაციაც
        გაიშვიათდა.
      </p>
      <Form @submit="handleSuggestionsForm">
        <div class="mt-11">
          <label class="block text-xl font-bold mb-3 leading-7">
            რა სიხშირით შეიძლება გვქონდეს საერთო <br />
            არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*
          </label>
          <div class="flex flex-col ml-6">
            <div class="flex">
              <Field
                type="radio"
                name="online_meetings"
                class="mr-2 w-5 accent-black"
                value="twice_a_week"
                rules="required"
                v-model="onlineMeetingsQuestion"
              />
              <span class="ml-4 leading-7">კვირაში ორჯერ</span>
            </div>
            <div class="flex mt-2">
              <Field
                type="radio"
                name="online_meetings"
                class="mr-2 w-5 accent-black"
                value="once_a_week"
                rules="required"
                v-model="onlineMeetingsQuestion"
              />
              <span class="ml-4 leading-7">კვირაში ერთხელ</span>
            </div>
            <div class="flex mt-2">
              <Field
                type="radio"
                name="online_meetings"
                class="mr-2 w-5 accent-black"
                value="once_in_a_two_weeks"
                rules="required"
                v-model="onlineMeetingsQuestion"
              />
              <span class="ml-4 leading-7">ორ კვირაში ერთხელ</span>
            </div>
            <div class="flex mt-2">
              <Field
                type="radio"
                name="online_meetings"
                class="mr-2 w-5 accent-black"
                value="once_in_a_month"
                rules="required"
                v-model="onlineMeetingsQuestion"
              />
              <span class="ml-4 leading-7">თვეში ერთხელ</span>
            </div>
          </div>
        </div>
        <div class="mt-11">
          <label for="name" class="block text-xl font-bold mb-3 leading-7">
            კვირაში რამდენი დღე ისურვებდი ოფისიდან <br />მუშაობას?*
          </label>
          <div class="flex flex-col ml-6">
            <div class="flex">
              <Field
                type="radio"
                name="office_workdays"
                class="mr-2 w-5 accent-black"
                value="1"
                rules="required"
                v-model="officeWorkDaysQuestion"
              />
              <span class="ml-4 leading-7">1</span>
            </div>
            <div class="flex mt-2">
              <Field
                type="radio"
                name="office_workdays"
                class="mr-2 w-5 accent-black"
                value="2"
                rules="required"
                v-model="officeWorkDaysQuestion"
              />
              <span class="ml-4 leading-7">2</span>
            </div>
            <div class="flex mt-2">
              <Field
                type="radio"
                name="office_workdays"
                class="mr-2 w-5 accent-black"
                value="3"
                rules="required"
                v-model="officeWorkDaysQuestion"
              />
              <span class="ml-4 leading-7">3</span>
            </div>
            <div class="flex mt-2">
              <Field
                type="radio"
                name="office_workdays"
                class="mr-2 w-5 accent-black"
                value="4"
                rules="required"
                v-model="officeWorkDaysQuestion"
              />
              <span class="ml-4 leading-7">4</span>
            </div>
            <div class="flex mt-2">
              <Field
                type="radio"
                name="office_workdays"
                class="mr-2 w-5 accent-black"
                value="5"
                rules="required"
                v-model="officeWorkDaysQuestion"
              />
              <span class="ml-4 leading-7">5</span>
            </div>
          </div>
        </div>
        <div class="mt-11">
          <label for="name" class="block text-xl font-bold mb-3 leading-7">
            რას ფიქრობ ფიზიკურ შეკრებებზე
          </label>
          <div class="flex flex-col">
            <div class="flex">
              <Field
                v-model="physicalGathering"
                name="physical_gathering"
                type="text"
                class="py-4 px-4 h-40 text-start border border-black lg:w-10/12 bg-[#EAEAEA] placeholder:text-[#232323] font-normal text-xs"
              />
            </div>
          </div>
        </div>
        <div class="mt-11">
          <label for="name" class="block text-xl font-bold mb-3 leading-7">
            რას ფიქრობ არსებულ გარემოზე: <br />
            რა მოგწონს, რას დაამატებდი, რას შეცვლიდი
          </label>
          <div class="flex flex-col">
            <div class="flex">
              <Field
                v-model="enviroment"
                name="enviroment"
                type="text"
                class="py-4 px-4 h-40 text-start border border-black lg:w-10/12 bg-[#EAEAEA] placeholder:text-[#232323] font-normal text-xs"
              />
            </div>
          </div>
        </div>
        <div class="flex justify-end mr-28 mt-16">
          <button
            class="text-white font-bold py-3 px-5 rounded-full bg-[#208298] capitalize text-lg text-white transition ease-in-out delay-150"
          >
            დასრულება
          </button>
        </div>
      </Form>
    </div>
    <div class="relative">
      <img src="/images/office-work.png" alt="friends" class="hidden lg:block ml-14" />

      <Transition
        name="slide-down"
        enter-active-class="slide-down-enter-active"
        enter-class="slide-down-enter"
        appear
      >
        <div class="absolute top-0 w-full h-full">
          <img
            src="/images/highlights/suggestions-highlight.png"
            alt="overlay"
            class="opacity-80 ml-36 mt-12"
          />
        </div>
      </Transition>
    </div>
  </div>
  <div class="mt-24 mb-24 flex justify-center lg:mt-0 lg:mb-0">
    <RouterLink to="/vaccination-info" class="mr-14 mt-10">
      <IconPrevious />
    </RouterLink>
  </div>
</template>
<script setup>
import IconPrevious from '@/components/icons/IconPrevious.vue'
import { Form, Field } from 'vee-validate'
import { ref, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
document.title = 'suggestions'
// import { RouterLink, useRouter } from 'vue-router'

const store = useStore()
let onlineMeetingsQuestion = ref('')
let officeWorkDaysQuestion = ref('')
let physicalGathering = ref('')
let enviroment = ref('')

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

<style scoped>
.slide-down-enter-active {
  transition: all 0.6s;
}

.slide-down-enter-from {
  opacity: 0.1;
  transform: translateX(-10%) translateY(-10%);
}

.slide-down-enter-to {
  opacity: 0.7;
  transform: translateX(0);
}
</style>
