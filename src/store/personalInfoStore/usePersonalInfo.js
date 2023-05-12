export default {
    namespaced:true,
    state(){
        return{
            name:'',
            lastName:'',
            email:'',
        }
    },
    mutations:{
        setPersonalInfoFormValues(state, payload){
            state.name = payload.name;
            state.lastName = payload.lastName;
            state.email = payload.email
        },
        storePersonalInfoInLocalStorage(_, payload){
            localStorage.setItem(
                'personal-info',
                JSON.stringify({
                  name: payload.name,
                  lastName: payload.lastName,
                  email: payload.email
                })
              )
        },
        getPersonalInfoFormValues(state){
            state.name = JSON.parse(localStorage.getItem('personal-info')).name
            state.lastName = JSON.parse(localStorage.getItem('personal-info')).lastName
            state.email =JSON.parse(localStorage.getItem('personal-info')).email
        }
    },
}