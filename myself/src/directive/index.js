export default  {
  'tel': {

    bind:function(e){
       console.log('bind')
    },
    update:function(el){
      var len=el.getAttribute('len'),
          reg=/^1[34578]\d{9}$/;
      if(el.value.length>=len){
          if(!(reg.test(el.value))){
              // twoWay=false
              el.style.border="1px solid #f00";
          }
      }
    },
    unbind: function (el){
     console.log('unbind')
     }
  }  
}
