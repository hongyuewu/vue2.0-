const state={
	user:{
        _name:'434334'
    }

}
const getters={
	names: ({user}) => user._name
     

}


export default{
	state,
	getters
}