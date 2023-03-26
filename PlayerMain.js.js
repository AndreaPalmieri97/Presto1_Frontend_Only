//  I brani all'interno del music player
let tracks = [
    {'url': './audio/song-1.mp3', 'cover': './cover/cover-1.jpg', 'artist': 'Ghostrifter', 'title': 'Midnight Stroll'},
    {'url': './audio/song-2.mp3', 'cover': './cover/cover-2.jpg', 'artist': 'Ghostrifter', 'title': 'Hot Coffee'},
    {'url': './audio/song-3.mp3', 'cover': './cover/cover-3.jpg', 'artist': 'Ghostrifter', 'title': 'Merry Bay'},
    {'url': './audio/song-4.mp3', 'cover': './cover/cover-4.jpg', 'artist': 'Ghostrifter', 'title': 'Morning Routine'},
    {'url': './audio/song-5.mp3', 'cover': './cover/cover-5.jpg', 'artist': 'Ghostrifter', 'title': 'Still Awake'},
    {'url': './audio/song-6.mp3', 'cover': './cover/cover-6.jpg', 'artist': 'Ghostrifter', 'title': 'Afternoon Nap'},
    {'url': './audio/song-7.mp3', 'cover': './cover/cover-7.jpg', 'artist': 'Ghostrifter', 'title': 'Demised To Shield'},
    {'url': './audio/song-8.mp3', 'cover': './cover/cover-8.jpg', 'artist': 'Ghostrifter', 'title': 'Departue'},
    {'url': './audio/song-9.mp3', 'cover': './cover/cover-9.jpg', 'artist': 'Ghostrifter', 'title': 'Mellow Out'},
    {'url': './audio/song-10.mp3', 'cover': './cover/cover-10.jpg', 'artist': 'Ghostrifter', 'title': 'Simplicit Nights'}
];

// Catturare la colonna 2
let wrapper = document.querySelector('#wrapper');

// Inizializzare un contatore di brani
let counterTrack = 0;

// Inizializzare l'oggetto audio
let audio = null;



// Funzione per creare la sezione Audio-Cover
function createCover(array) {
    // Ripulire la sezione
    wrapper.innerHTML = ' ';

    let div = document.createElement('div');
    div.classList.add('col-12', 'col-md-3', 'd-flex', 'justify-content-center');
    div.innerHTML = `
    <!-- Immagine cover -->
    <img class="img-cover" src="${tracks[counterTrack].cover}" alt="">
    
    <!-- File audio -->
    <audio preload="metadata">
    <source src="${tracks[counterTrack].url}" type="audio/mpeg">
    </audio>
    `;
    wrapper.appendChild(div);

    // Catturare l'elemento audio ogni volta verrà  lanciata questa funzione
    audio = document.querySelector('audio');

}

  // Mappare un range di valori in un altro
  function showProgressBar( x,  in_min,  in_max,  out_min,  out_max) {
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

// Funzione per creare la sezione Info del brano
function createInfoTrack(array) {
    let div = document.createElement('div');
    div.classList.add('col-12', 'col-md-5');
    div.innerHTML = `
        <h2 class="text-light">${array[counterTrack].title}</h2>
        <h3 class="text-light">${array[counterTrack].artist}</h3>
        
        <!-- Progress bar -->
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        <div id="progressBar" class="progress-bar"></div>
        </div>
        
        <!-- Tempo inizio e fine del brano -->
        <div class="d-flex justify-content-between">
        <p id="currentTime" class="text-light">0:00</p>
        <p id="durationTrack" class="text-light">3:00</p>
        </div>
        
        <div class="d-flex justify-content-between">
        <!-- Prev -->
        <button id="btnPrev" class="btn"><i class="text-light fs-3 fa-solid fa-backward"></i></button>
        
        <!-- Play -->
        <button id="btnPlay" class="btn"><i class="text-light fs-3 fa-solid fa-play"></i></button>
        
        <!-- Next -->
        <button id="btnNext" class="btn"><i class="text-light fs-3 fa-solid fa-forward"></i></button>
        </div>
    `;
    wrapper.appendChild(div);

    // Catturare i pulsanti
    let btnPlay = document.querySelector('#btnPlay');
    let btnNext = document.querySelector('#btnNext');
    let btnPrev = document.querySelector('#btnPrev');

    // Catturare la durata audio
    let durationTrack = document.querySelector('#durationTrack');
    let currentTime = document.querySelector('#currentTime');

    // Catturare la progressBar

    let progressBar = document.querySelector('#progressBar')

  

    // Gestione Play
    btnPlay.addEventListener('click', () => {
        if(audio.paused) {
            audio.play();
            btnPlay.innerHTML = `
            <i class="text-light fs-3 fa-solid fa-pause"></i>
            `
        }else {
            audio.pause();
            btnPlay.innerHTML = `
            <i class="text-light fs-3 fa-solid fa-play "></i>
            `
        }
       
    })

    // Gestione Next
    btnNext.addEventListener('click', () => {
        if (counterTrack < array.length - 1) {
            counterTrack++;
           
        }else {
            counterTrack = 0;
        }
        createCover(tracks);
        createInfoTrack(tracks)
       
    })

    // Gestione Prev
    btnPrev.addEventListener('click', () => {
        if (counterTrack > 0) {
            counterTrack--;
        }else {
            counterTrack = array.length - 1;
        }
        createCover(tracks);
        createInfoTrack(tracks)
    })

    // Gestione tempo di un brano
    let minutesDurationAudio = 0;
    audio.addEventListener('loadedmetadata', () => {
        let audioDuration = audio.duration / 60;
        minutesDurationAudio = audioDuration.toFixed(2);
        durationTrack.innerHTML = minutesDurationAudio;
    })

    audio.addEventListener('timeupdate', () => {
        let minutes = audio.currentTime / 60;
        let currentTimeTrack = minutes.toFixed(2);
        currentTime.innerHTML = currentTimeTrack;

        progressBar.style.width = `${showProgressBar(currentTimeTrack, 0, minutesDurationAudio, 0, 100)}%`
    })
}

createCover(tracks);
createInfoTrack(tracks);





