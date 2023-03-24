let recensioni = [
  { name: 'Nicola', recensione: 'Ottimo prodotto', giudizio: 'Eccellente' },
  { name: 'Anna', recensione: 'Spedizione super veloce!', giudizio: 'Ottimo' },
  { name: 'Angelo', recensione: 'Vasta e completa gamma di prodotti', giudizio: 'Buono' },
  { name: 'Daniele', recensione: 'Mi aspettavo di più', giudizio: 'Sufficiente' },
  { name: 'Maria', recensione: 'Tutto perfetto, grazie di cuore', giudizio: 'Eccellente' },
  { name: 'Paolo', recensione: 'Sito perfetto, ho trovato quello che cercavo', giudizio: 'Ottimo' },
]

let heart = document.querySelectorAll('.fa-heart')
let wrapper = document.querySelector('.swiper-wrapper')

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


heart.forEach((cuore) => {
  cuore.addEventListener('click', () => {
    cuore.classList.toggle('fa-solid')
    cuore.classList.toggle('fa-regular')
  })
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
