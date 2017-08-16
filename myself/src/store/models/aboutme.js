const state={
	user:{
        name:'吴红月',
        age:'24',
        phone:'13370123965',
        emil:'768028030@qq.com'
    },
    type:{
        status:true,
        swichText:"隐藏"
    },
    info:{
        name:'',
        password:''
    }

}
const getters={
	name: ({user}) => user.name,
    age: ({user}) => user.age,
    phone:({user})=>user.phone,
    emil: ({user}) => user.emil,
    type:({type})=>type,
    more:({info})=>info  

}
const actions={
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
const mutations={
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

}

export default{
	state,
	getters,
	actions,
	mutations
}