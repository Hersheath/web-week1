import "./styles.css";

//task2
const button = document.getElementById('my-button');
button.addEventListener('click',function(){
  console.log('hello world');//print hello world when button is clicked
})
//task3
const h1 = document.getElementById('h1');
button.addEventListener('click',function(){
  h1.innerText='My notebook';//heading h1 text is also changed
})
//task4 & 5
const ul=document.getElementById('unordered-list');
const addDataButton=document.getElementById('add-data');
//--- add custom text to unordered list.
const text=document.getElementById('input');
addDataButton.addEventListener('click',function(){
  const list=document.createElement('li');
  //list.innerText='text';
  list.innerText=text.value;
  ul.appendChild(list);
})

