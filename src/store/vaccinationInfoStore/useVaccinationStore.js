export default {
    namespaced:true,
    state(){
        return{
            vaccinationStatus:'',
            vaccinationStage:'',
            vaccinationRefusalReasoning:'',
        }
    },
    mutations:{
        setVaccinationInfoFormValues(state, payload){
            state.vaccinationStatus = payload.vaccinatedQuestion;
            state.vaccinationStage= payload.vaccinationStage;
            state.vaccinationRefusalReasoning = payload.vaccinationRefusalReasoning
        },
        storeVaccinationInfoInLocalStorage(_, payload){
            if(payload.vaccinatedQuestion == 'vaccination-yes'){
                localStorage.setItem('vaccination-info', JSON.stringify({
                    vaccinationStatus:payload.vaccinatedQuestion,
                    vaccinationStage:payload.vaccinationStage,
                }))
            }
            else {
                localStorage.removeItem('vaccination-info')
                localStorage.setItem('vaccination-info', JSON.stringify({
                    vaccinationStatus:payload.vaccinatedQuestion,
                    vaccinationRefusalReasoning:payload.vaccinationRefusalReasoning
                }))
            }
        },
        getVaccinationInfoFormValues(state){
            state.vaccinationStatus = JSON.parse(localStorage.getItem('vaccination-info')).vaccinationStatus
            state.vaccinationStage = JSON.parse(localStorage.getItem('vaccination-info')).vaccinationStage
            state.vaccinationRefusalReasoning = JSON.parse(localStorage.getItem('vaccination-info')).vaccinationRefusalReasoning
        }
    },
}