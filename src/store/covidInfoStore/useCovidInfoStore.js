export default {
    namespaced:true,
    state(){
        return{
            hadCovid:'',
            hadAntibodiesTest:'',
            antibodiesTestDate:'',
            antibodiesAmount:'',
            hadCovidDate:'',
        }
    },
    mutations:{
        setCovidFormValues(state, payload){
            state.hadCovid = payload.hadCovid
            state.hadAntibodiesTest = payload.hadAntibodiesTest
            if(payload.hadAntibodiesTest == 'antibodies-yes'){
                state.antibodiesTestDate = payload.antibodiesTestDate
                state.antibodiesAmount = payload.antibodiesAmount
                state.hadCovidDate = ''
            }
            else if(payload.hadAntibodiesTest === 'antibodies-no') {
                state.hadCovidDate = payload.hadCovidDate
                state.antibodiesTestDate = ''
                state.antibodiesAmount = ''
            }
            if(payload.hadCovid !== 'yes'){
                state.hadAntibodiesTest = ''
                state.antibodiesTestDate = ''
                state.antibodiesAmount = ''
                state.hadCovidDate = ''
            }

        },
        storePersonalInfoInLocalStorage(_,payload){
            if(payload.covidQuestion !== 'yes')
            {
                localStorage.setItem(
                    'covid-info',
                    JSON.stringify({
                      covidQuestion: payload.covidQuestion,
                    })
                )
            }
            if(payload.antibodiesQuestion === 'antibodies-yes'){
                localStorage.setItem(
                    'covid-info',
                    JSON.stringify({
                      covidQuestion: payload.covidQuestion,
                      antibodiesQuestion: payload.antibodiesQuestion,
                      antibodiesTestDate: payload.antibodiesTestDate,
                      antibodiesAmount: payload.antibodiesAmount,
                    })
                  )
            }
            else {
                localStorage.removeItem('covid-info')
                localStorage.setItem(
                    'covid-info',
                    JSON.stringify({
                      covidQuestion: payload.covidQuestion,
                      antibodiesQuestion: payload.antibodiesQuestion,
                      hadCovidAtDate: payload.hadCovidAtDate
                    })
                  )
            }
        },
        getCovidInfoFormValues(state){
            state.hadCovid = JSON.parse(localStorage.getItem('covid-info')).covidQuestion
            state.hadAntibodiesTest =  JSON.parse(localStorage.getItem('covid-info')).antibodiesQuestion
            state.antibodiesTestDate = JSON.parse(localStorage.getItem('covid-info')).antibodiesTestDate
            state.antibodiesAmount = JSON.parse(localStorage.getItem('covid-info')).antibodiesAmount
            state.hadCovidDate = JSON.parse(localStorage.getItem('covid-info')).hadCovidAtDate
        },

    },
}