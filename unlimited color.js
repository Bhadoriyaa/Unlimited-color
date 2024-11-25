// generating random colors
/* From Uiverse.io by reshades */ 
/* From Uiverse.io by reshades */ 

const randomColors = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i =0; i<6; i++){
    color += hex[Math.floor(Math.random()* 16)]
    }
    return color;
  };
  let intervalId;
  let startChangingColor = function(){
     intervalId = setInterval(changeBgColor,1000);
    
   function changeBgColor() {
     document.body.style.backgroundColor = randomColors();
  }
  };
  
  let stopChangingColor = function(){
  clearInterval(intervalId);
  }
  
  
  document.querySelector('#start').addEventListener('click',startChangingColor);
  
  document.querySelector('#stop').addEventListener('click',stopChangingColor);
  
  