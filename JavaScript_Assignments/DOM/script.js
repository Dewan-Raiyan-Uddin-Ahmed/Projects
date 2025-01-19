// const title = document.getElementById('title');
// document.getElementById('title').className;
// document.getElementById('title').getAttribute('class');
// document.getElementById('title').setAttribute('class','ClassHeading');

// title.style.backgroundColor = 'green'

// document.querySelector('#title2');

// const myUl = document.querySelector('ul');
// myUl.querySelector('li').style.backgroundColor = 'green';

// const tempLiList = document.querySelectorAll('li');

// tempLiList.forEach((box)=>{
//     box.style.color = 'red'
// })

const tempClassList = document.getElementsByClassName('list-item');
const myConvertedArray = Array.from(tempClassList);

myConvertedArray.forEach((item)=>{
    // console.log(item)
    console.log(item.innerHTML);
    
})