
function verificar() {
var nomeDig = document.querySelector('input#name')
var valorXp = document.querySelector('input#numeroXp')
var res = document.querySelector('div#res')
var heroi = valorXp.value

     
if (heroi <= 1000) {
    
        res.innerHTML = `O Herói chamado de ${nomeDig.value} está classificado em <strong>Ferro</strong>.`
                        
} else if (heroi >= 1001 && heroi <= 2000) {
        res.innerHTML = `O Herói chamado de ${nomeDig.value} está classificado em <strong>Bronze</strong>.`
          

} else if (heroi >= 2001 && heroi <= 5000) {
        res.innerHTML = `O Herói chamado de ${nomeDig.value} está classificado em <strong>Prata</strong>.`
          
    
} else if (heroi >= 5001 && heroi <= 7000) {
        res.innerHTML = `O Herói chamado de ${nomeDig.value} está classificado em <strong>Ouro</strong>.`
          

} else if (heroi >= 7001 && heroi <= 8000) {
        res.innerHTML = `O Herói chamado de ${nomeDig.value} está classificado em <strong>Platina</strong>.`
              

} else if (heroi >= 8001  && heroi <= 9000) {
        res.innerHTML = `O Herói chamado de ${nomeDig.value} está classificado em <strong>Ascendente</strong>.`
          

} else if (heroi >= 9001 && heroi <= 10000) {
        res.innerHTML = `O Herói chamado de ${nomeDig.value} está classificado em <strong>Imortal</strong>.`
          

} else {
        res.innerHTML = `O Herói chamado de ${nomeDig.value} está classificado em <strong>Radiante</strong>.`
          
}                        
   
}
