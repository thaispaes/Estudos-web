const textoNum = document.getElementById('valor');
const botao = document.getElementById('bt-incrementar');
const botaoE2 = document.getElementById('bt-reset');
const botaoE3 = document.getElementById('bt-decremento');
let num = 0;

botao.addEventListener("click", () =>{
    num++
    textoNum.innerText = num
})

botaoE2.addEventListener("click", () => {
    textoNum.innerText = 0
    num = 0;

})

botaoE3.addEventListener("click", () => {
    num--
    textoNum.innerText = num

})

