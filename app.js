let contador = 0
let litros = 0
let res = document.querySelector('section#result')

function contar() {
    contador ++
    litros = (contador*200)/1000
    res.innerHTML = `<p>Você tomou <mark>${contador}</mark> Copos de Água.Que Resulta em <mark>${litros}</mark> Litros.</p>`
}

function zerar() {
    contador = 0
    res.innerHTML = null
}
