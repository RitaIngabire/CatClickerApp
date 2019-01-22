var cat= document.querySelector('#imageHolder');
var link1 = document.querySelector('.cat1');
var link2 = document.querySelector('.cat2');
var link3 = document.querySelector('.cat3');
var link4 = document.querySelector('.cat4');
var link5 = document.querySelector('.cat5');

link1.addEventListener('click',function(){
    cat.src = 'images/cat.jpeg';
    modal.style.display="none";
});

link2.addEventListener('click',function(){
    cat.src = 'images/cat2.jpeg';
    clickCounts1 = 0;
    modal.style.display="none";
});

link3.addEventListener('click',function(){
    cat.src = 'images/cat3.jpeg';
    clickCounts1 = 0;
    modal.style.display="none";
});

link4.addEventListener('click',function(){
    cat.src = 'images/cat4.jpeg';
    clickCounts1 = 0;
    modal.style.display="none";
});

link5.addEventListener('click',function(){
    cat.src = 'images/cat5.jpeg';
    clickCounts1 = 0;
    modal.style.display="none";
});

let clickCounts1 = 0;
let modal = document.querySelector('.modal');
let message = document.querySelector('.clicksNo');

cat.addEventListener('click',function(){
    clickCounts1 += 1;
    modal.style.display = 'block';  
    message.innerHTML = `You clicked the cat ${clickCounts1} times`;    
});