import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store= new Vuex.Store({
    state:{
        user:{
            name:'吴红月',
            age:'24',
            phone:'13370123965'
        },
        type:{
            status:true,
            swichText:"隐藏"
        },
        info:{
            name:'',
            password:''
        }

    },
    getters: {
        name: ({user}) => user.name,
        age: ({user}) => user.age,
        phone:({user})=>user.phone,
        type:({type})=>type,
        more:({info})=>info      
    },
    mutations:{
        setType ({type}){
            if(type.status==true){
               type.status=false;
               type.swichText="显示"
            }else{
               type.status=true;
               type.swichText="隐藏"                
            }
            
        },
        submitFnX({user},form){
            if(form.name){
                user.name=form.name;
            }
        },
        rigisterInfo({info},more){
            if(more.userName){
                info.name=more.userName;
            }
            if(more.passWord){
                info.password=more.passWord
            }
            
        }
    },
    actions:{
        increment ({ commit }) {
            commit('increment')
        },
        setType ({ commit }) {
            commit('setType')
        },
        submitFnX ({ commit },i) {
            commit('submitFnX',i)
        },
        rigisterInfo({commit},more){
            commit('rigisterInfo',more)
        }
    }
})
export  {store};


