let heart = document.querySelectorAll('.fa-heart')
let wrapper = document.querySelector('.swiper-wrapper')
let wrapper2 = document.querySelector('#wrapper2')

// let cards = [
//   { img: './media/blue-ge6cd1cac4_640.png', title: 'Queen', descrizione: 'Some quick example text to build on the card title and make up the bulk of the cards content.', prezzo: '89,90 $' },
//   { img: './media/disc-gc6443a0cc_640.png', title: 'Pink Floyd', descrizione: 'Some quick example text to build on the card title and make up the bulk of the cards content.', prezzo: '59,90 $' },
//   { img: './media/disk-g111c94b22_640.png', title: 'Beatles', descrizione: 'Some quick example text to build on the card title and make up the bulk of the cards content.', prezzo: '69,90 $' },
//   { img: './media/phonograph-record-g1a230ebcd_640.jpg', title: 'Michael Jackson', descrizione: 'Some quick example text to build on the card title and make up the bulk of the cards content.', prezzo: '59,90 $' },
//   { img: './media/record-gb37c0a610_640.png', title: 'Nirvana', descrizione: 'Some quick example text to build on the card title and make up the bulk of the cards content.', prezzo: '79,90 $' },
//   { img: './media/vinyl-gb4588005b_640.png', title: 'Best of Jazz', descrizione: 'Some quick example text to build on the card title and make up the bulk of the cards content.', prezzo: '39,90 $' },
// ]

let recensioni = [
  { name: 'Nicola', recensione: 'Ottimo prodotto', giudizio: 'Eccellente' },
  { name: 'Anna', recensione: 'Spedizione super veloce!', giudizio: 'Ottimo' },
  { name: 'Angelo', recensione: 'Vasta e completa gamma di prodotti', giudizio: 'Buono' },
  { name: 'Daniele', recensione: 'Mi aspettavo di più', giudizio: 'Sufficiente' },
  { name: 'Maria', recensione: 'Tutto perfetto, grazie di cuore', giudizio: 'Eccellente' },
  { name: 'Paolo', recensione: 'Ho trovato quello che cercavo', giudizio: 'Ottimo' },
]

heart.forEach((cuore) => {
  cuore.addEventListener('click', () => {
    cuore.classList.toggle('fa-solid')
    cuore.classList.toggle('fa-regular')
  })
})


recensioni.forEach((element) => {
  let div = document.createElement('div');
  div.classList.add('swiper-slide', 'card-recensione', 'd-flex', 'justify-content-center', 'align-items-center', 'colorCard')
  div.innerHTML = `
  <h3 class="my-3">Cliente: ${element.name}</h3>
  <h5 class="my-3">${element.recensione}</h5>
  <p class="my-3"><em>'${element.giudizio}'</em></p>
  `
  
  wrapper.appendChild(div)
})


var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});



AOS.init();
