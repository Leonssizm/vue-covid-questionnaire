import { createStore } from "vuex";
import personalInfoStore from "./personalInfoStore/usePersonalInfo.js";
import covidInfoStore from "./covidInfoStore/useCovidInfoStore.js";

const store = createStore({
 modules:{
    personalInfoStore: personalInfoStore,
    covidInfoStore:covidInfoStore,

 }
})

export default store