aboutus = [
    {img: 'https://picsum.photos/200', nome: 'Andrea', descrizione: 'Sommo maestro del linguaggio HTML'},
    {img: 'https://picsum.photos/200', nome: 'Gioele', descrizione: 'La pelata più bella del West'},
    {img: 'https://picsum.photos/200', nome: 'Giuseppe', descrizione: 'Il detrattore ecclesiastico'},
    {img: 'https://picsum.photos/200', nome: 'Audrick', descrizione: 'Sviluppatore da Google'},
]

let cardUsWrapper = document.querySelector('.cardUsWrapper');

aboutus.forEach((element) => {
let div = document.createElement('div')
div.classList.add('cardUs')
div.innerHTML = `
<div class="inner">
<div class="inner-face">
<img class="rounded w-75" src="${element.img}" alt="">
</div>
<div class="inner-retro">
<h3>${element.nome}</h3>
<h4>${element.descrizione}</h4>
</div> 
</div>`




cardUsWrapper.appendChild(div)
});