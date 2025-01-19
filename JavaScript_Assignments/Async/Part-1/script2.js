const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');


// const sayDate = function(str){
//     console.log(str, Date.now());
    
// }

// const intervalID = setInterval(sayDate,1000,'hi');

// clearInterval(intervalID);

//...........................................................

const sayDate = function(){
    console.log(Date.now()); 
}

function intF(){
    const Interval = setInterval(sayDate,1000);
}

startBtn.addEventListener('click',()=>{
    intF()
})

stopBtn.addEventListener('click',()=>{
    const x = intF();
    clearInterval(x)
})