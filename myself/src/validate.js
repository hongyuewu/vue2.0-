export default{
	install(Vue){
		Vue.prototype.validate= (value,type,reg) =>{			
			if(type=='required'&&!reg){
				if(value) {
			        return true; 
				
			    } else{
			    	return false;
			    }
			}
			if(reg){
				if(reg=='mobile'){
					if((/^1[34578]\d{9}$/.test(value))){  
				        return true; 
				    } else{
				    	return false;
				    }
				} 
				if(reg=='emil'){
					if((/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value))){  
				        return true; 
				    } else{
				    	return false;
				    }
				}

			}




		}
	}
}