// Tu códgigo aquí
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');

button.addEventListener("click", async function(){

    const answer = await fetch("https://api.chucknorris.io/jokes/random");
    const info = await answer.json();
    
    jokeDIV.textContent = info.value;
});