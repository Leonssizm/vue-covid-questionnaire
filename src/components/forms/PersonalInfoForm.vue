<template>
  <Form @submit="submitForm()">
    <div class="flex mt-6">
      <div class="flex flex-col ml-8 font-sans lg:ml-48 lg:w-1/3">
        <div class="mt-6 font-arial flex flex-col">
          <label for="name" class="block text-xl font-bold mb-2">სახელი*</label>
          <Field
            type="text"
            name="name"
            rules="name"
            placeholder="იოსებ"
            class="py-4 px-4 border border-black lg:w-10/12 bg-[#EAEAEA] placeholder:text-[#232323] font-normal text-xs"
            v-model="name"
          />
          <ErrorMessage class="lg:ml-5 text-red-500 mt-1" name="name" />
        </div>

        <div class="mt-6 font-arial flex flex-col">
          <label for="lastname" class="block text-xl font-bold mb-2">გვარი*</label>
          <Field
            type="text"
            placeholder="ჯუღაშვილი"
            name="lastName"
            rules="lastName"
            class="py-4 px-4 border border-black lg:w-10/12 bg-[#EAEAEA] placeholder:text-[#232323] font-normal text-xs"
            v-model="lastName"
          />
          <ErrorMessage class="lg:ml-5 text-red-500 mt-1" name="lastName" />
        </div>

        <div class="mt-6 font-arial flex flex-col">
          <label for="email" class="block text-xl font-bold mb-2">მეილი*</label>
          <Field
            placeholder="fbi@redberry.ge"
            name="email"
            rules="redberry_email"
            class="py-4 px-4 border border-black lg:w-10/12 bg-[#EAEAEA] placeholder:text-[#232323] font-normal text-xs"
            v-model="email"
          />
          <ErrorMessage name="email" class="lg:ml-5 text-red-500 mt-1" />
        </div>

        <footer class="mt-28 font-arial">
          <div class="border-black border-b-2 w-60 border-slate-400"></div>
          <p class="mt-4 text-[#626262] text-sm">
            *-ით მონიშნული ველების შევსება <br />
            სავალდებულოა
          </p>
        </footer>
      </div>
      <img
        src="/images/personal-info.png"
        alt="friends"
        class="hidden lg:ml-14 lg:mt-14 lg:block"
      />
    </div>
    <div class="mb-16 flex justify-center mt-20 lg:mb-0">
      <button>
        <IconNext />
      </button>
    </div>
  </Form>
</template>

<script setup>
import IconNext from '@/components/icons/IconNext.vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { useRouter } from 'vue-router'
import { onMounted, onUnmounted, ref } from 'vue'
import { useStore } from 'vuex'
// import { computed } from 'vue'

const router = useRouter()
const store = useStore()

let name = ref('')
let lastName = ref('')
let email = ref('')

onMounted(() => {
  window.onbeforeunload = function () {
    store.commit('personalInfoStore/storePersonalInfoInLocalStorage', {
      name: name.value,
      lastName: lastName.value,
      email: email.value
    })
  }
  if (localStorage.getItem('personal-info') !== null) {
    store.commit('personalInfoStore/getPersonalInfoFormValues')
    name.value = store.state.personalInfoStore.name
    lastName.value = store.state.personalInfoStore.lastName
    email.value = store.state.personalInfoStore.email
  }
})

onUnmounted(() => {
  store.commit('personalInfoStore/storePersonalInfoInLocalStorage', {
    name: name.value,
    lastName: lastName.value,
    email: email.value
  })
})

function submitForm() {
  router.push({ name: 'covid-info' })
  store.commit('personalInfoStore/setPersonalInfoFormValues', {
    name: name.value,
    lastName: lastName.value,
    email: email.value
  })
}
</script>
