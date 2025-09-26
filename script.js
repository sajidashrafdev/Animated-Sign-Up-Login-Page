const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');


registerBtn.addEventListener('click', ()=>{
    container.classList.add('active');
});

loginBtn.addEventListener('click', ()=>{
    container.classList.remove('active');
});

// for bg-color change 
var root = document.querySelector(':root');
var rootStyle = getComputedStyle(root);
var bgColor = rootStyle.getPropertyValue('--bg-color');
var getColor = document.getElementById('chose-color');


getColor.addEventListener('input',()=>{
    colorVal = getColor.value
    // console.log(colorVal);
    root.style.setProperty('--bg-color', colorVal);

})
