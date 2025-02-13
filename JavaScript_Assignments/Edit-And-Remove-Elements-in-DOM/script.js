function addLanguage(langName){
    const li = document.createElement('li');
    li.innerHTML = `${langName}`
    document.querySelector('.language').appendChild(li)
}
addLanguage("Python");
addLanguage("TypeScript");

function addOptiLanguage(langName){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li)
}
addOptiLanguage('golang');

//Edit
const secondLang=document.querySelector("li:nth-child(2)");
// secondLang.innerHTML = "Mojo"
const newli = document.createElement('li');
newli.textContent = "Mojo"
secondLang.replaceWith(newli)

//Edit
const firstLang = document.querySelector("li:first-child")
firstLang.outerHTML= '<li>TypeScript</li>'

//Remove
const lastLang = document.querySelector('li:last-child');
lastLang.remove()