export default {
    namespaced:true,
    state(){
        return{
            onlineMeetings:'',
            officeWorkdays:'',
            physicalGatherings:'',
            enviroment:'',
        }
    },
    mutations:{
        setSuggestionsInfoFormValues(state, payload){
            state.onlineMeetings = payload.onlineMeetings;
            state.officeWorkdays = payload.officeWorkdays;
            state.physicalGatherings = payload.physicalGatherings;
            state.enviroment = payload.enviroment
        },
        storeSuggestionsInfoInLocalStorage(_, payload){
            localStorage.setItem('suggestions', JSON.stringify({
                onlineMeetings:payload.onlineMeetings,
                officeWorkdays:payload.officeWorkdays,
            }))

            if(payload.physicalGatherings == '' && payload.enviroment != ''){
                localStorage.removeItem('suggestions')
                localStorage.setItem('suggestions', JSON.stringify({
                    onlineMeetings:payload.onlineMeetings,
                    officeWorkdays:payload.officeWorkdays,
                    enviroment:payload.enviroment
                }))
            }else if(payload.enviroment == '' && payload.physicalGatherings != ''){
                localStorage.removeItem('suggestions')
                localStorage.setItem('suggestions', JSON.stringify({
                    onlineMeetings:payload.onlineMeetings,
                    officeWorkdays:payload.officeWorkdays,
                    physicalGatherings:payload.physicalGatherings
                }))
            }
            else if(payload.enviroment == '' && payload.physicalGatherings == ''){
                localStorage.removeItem('suggestions')
                localStorage.setItem('suggestions', JSON.stringify({
                    onlineMeetings:payload.onlineMeetings,
                    officeWorkdays:payload.officeWorkdays,
                }))
            }
            else{
                localStorage.removeItem('suggestions')
                localStorage.setItem('suggestions', JSON.stringify({
                    onlineMeetings:payload.onlineMeetings,
                    officeWorkdays:payload.officeWorkdays,
                    enviroment:payload.enviroment,
                    physicalGatherings:payload.physicalGatherings
                }))
            }
        },
        getSuggestionsInfoFormValues(state){
            state.onlineMeetings = JSON.parse(localStorage.getItem('suggestions')).onlineMeetings
            state.officeWorkdays = JSON.parse(localStorage.getItem('suggestions')).officeWorkdays
            state.physicalGatherings = JSON.parse(localStorage.getItem('suggestions')).physicalGatherings
            state.enviroment = JSON.parse(localStorage.getItem('suggestions')).enviroment
        }
    },
}