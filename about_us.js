aboutus = [
    {img: 'https://picsum.photos/200', nome: 'Andrea', descrizione: 'Sommo maestro del linguaggio HTML'},
    {img: 'https://picsum.photos/210', nome: 'Gioele', descrizione: 'La pelata più bella del West'},
    {img: 'https://picsum.photos/220', nome: 'Giuseppe', descrizione: 'Il detrattore ecclesiastico'},
    {img: 'https://picsum.photos/230', nome: 'Audrick', descrizione: 'Sviluppatore da Google'},
]

let cardImg = document.querySelector('.img-top');
let usName = document.querySelector('#usName');
let usDescription = document.querySelector('#usDescription');
let circle = document.querySelector('.circle')
let opener = document.querySelector('.opener');
let cardCustom = document.querySelector('.cardCustom'); 

aboutus.forEach((us) => {
    let div = document.createElement('div');
    div.classList.add('moved');
    div.style.backgroundImage = `url(${us.img})`;
    circle.appendChild(div);
    
}) 


let moveDivs = document.querySelectorAll('.moved');
let check = false;

opener.addEventListener('click', () => {
  if(check == false) {
    moveDivs.forEach((div, i) => {
        let angle = (360 * i) / moveDivs.length;
        div.style.transform = `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`
    })
    opener.style.transform = 'rotate(45deg)';

    check = true;
  }else {
    moveDivs.forEach((div, i) => {
        div.style.transform = `rotate(0deg) translate(0px)`
    })
    opener.style.transform = 'rotate(0deg)';
    cardCustom.classList.add('d-none');
    
    check = false;
  }
});



moveDivs.forEach((moved, i) => {
    moved.addEventListener('click', () => {
        let prestoUs = aboutus[i];
        cardCustom.classList.remove('d-none');
        cardImg.style.backgroundImage = `url(${prestoUs.img})`
        usName.innerHTML = `${prestoUs.nome}`
        usDescription.innerHTML = `${prestoUs.descrizione}`

    })
});

