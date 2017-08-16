import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import aboutmeList from './models/aboutme.js'
import morelist from './models/more.js'
export default new Vuex.Store({
	modules:{
		aboutmeList,
		morelist
	}
})