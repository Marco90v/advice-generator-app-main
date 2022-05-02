const api = "https://api.adviceslip.com/advice";
const num = document.querySelector("#advice");
const frase = document.querySelector("#frase");
async function random(){
    const rest = await fetch(api,{cache: 'no-cache'}).then(response=>response.json());
    const {id, advice} = rest.slip;
    num.innerHTML = "ADVICE #" + id;
    frase.innerHTML = advice;
}
// random()
window.onload = random();