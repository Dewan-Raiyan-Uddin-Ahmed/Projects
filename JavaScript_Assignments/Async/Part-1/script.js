const sayRaiyan = function(){
    console.log("raiyan");   
}
const changeText = function(){
    document.querySelector('h1').innerHTML = 'Best JS series'
}

const changeMe = setTimeout(changeText,2000);

const btn = document.querySelector('#stop');

btn.addEventListener('click',()=>{
    clearTimeout(changeMe);
    console.log("stopped");
    
})

