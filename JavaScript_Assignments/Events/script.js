// // document.getElementById('snow').onclick = function(){
// //     alert('owl clicked');
// // }

// //attachEvent()
// //jQeury - onEvent

// //type, timestamp, defaultPrevented
// //target, toElement, srcElement, currentTarget
// //clientX, clientY, screenX, screenY
// //altkey, ctrlkey, shiftkey, keyCode

// //Event propagation
// //..........................
// // bubbling event - false (inside to outside)
// // Capturing event - true
// document.getElementById('images').addEventListener('click',(e)=>{
//     // alert('Green mountain clicked')
//     console.log('clicked inside the ul');
    
//     // console.log(e);   
// },false);
// document.getElementById('greenMountain').addEventListener('click',(e)=>{
//     // alert('Green mountain clicked')
//     console.log('Green Mountain clicked');
//     // console.log(e);
//     e.stopPropagation() // the outer portion will not be printed   
// },false);

// //

// document.getElementById('google').addEventListener('click',(e)=>{
//     console.log('google clicked');
//     e.stopPropagation();
//     e.preventDefault();
// },false)

document.querySelector('#images').addEventListener('click',(e)=>{
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.parentNode);

    if(e.target.tagName === 'IMG'){
        let removeIt = e.target.parentNode;
        removeIt.remove();
    }
    
    //removeIt.parentNode.removeChild(removeIt)
    
    
})
