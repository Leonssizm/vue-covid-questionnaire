import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView.vue'
import PersonalInfoView from '@/views/PersonalInfoView.vue'
import CovidInfoView from '@/views/CovidInfoView.vue'
import VaccinationInfoView from '@/views/VaccinationInfoView.vue'
import SuggestionsView from '@/views/SuggestionsView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingView,
    },
    {
      path: '/personal-info',
      name: 'personal-info',
      component: PersonalInfoView
    },
    {
      path: '/covid-info',
      name: 'covid-info',
      component: CovidInfoView
    },
    {
      path: '/vaccination-info',
      name: 'vaccination-info',
      component: VaccinationInfoView
    },
    {
      path: '/suggestions',
      name: 'suggestions',
      component: SuggestionsView
    },
  ]
})

export default router
