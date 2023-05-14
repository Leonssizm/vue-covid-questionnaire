import { createStore } from "vuex";
import personalInfoStore from "./personalInfoStore/usePersonalInfo.js";
import covidInfoStore from "./covidInfoStore/useCovidInfoStore.js";
import vaccinationInfoStore from './vaccinationInfoStore/useVaccinationStore.js'
import suggestionsStore from './suggestionsStore/useSuggestionsStore.js'

const store = createStore({
 modules:{
    personalInfoStore: personalInfoStore,
    covidInfoStore:covidInfoStore,
    vaccinationInfoStore:vaccinationInfoStore,
    suggestionsStore:suggestionsStore,

 }
})

export default store