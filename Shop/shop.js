fetch('./presto.json').then((Response) => Response.json()).then((data) => {
    let wrapperShop = document.querySelector('#wrapperShop');
    
    function showCards(array) {

        wrapperShop.innerHTML = '';
        array.forEach(element => {
            let div = document.createElement('div');
            
            div.classList.add('card-shop', 'd-flex', 'flex-column', 'justify-content-around', 'align-items-center');
            
            div.innerHTML = `
            <h4>${element.cantante}</h4>
            <h5>${element.genere}</h5>
            <p>${element.prezzo} $</p>
            `;
            
            wrapperShop.appendChild(div);
        });
    }
    
    showCards(data);
    
    let radioWrapper = document.querySelector('#radioWrapper')
    
    function showgeneri() {
        let Totgeneri = data.map((element) => element.genere)
        

        let uniqueGeneri = [];

        Totgeneri.forEach((element) => {
            if(!uniqueGeneri.includes(element)) {
                uniqueGeneri.push(element);
            }
            
        })


        uniqueGeneri.forEach((element) => {
            let div = document.createElement('div');
            div.classList.add('form-check');
            div.innerHTML = `
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="${element}">
                <label class="form-check-label" for="${element}">
                 ${element}
                </label>
            `;
            radioWrapper.appendChild(div);
        })

    }

    showgeneri();

    let radios = document.querySelectorAll('.form-check-input');


    function filterGeneri(generi) {
        if(generi != 'all'){
            let filtered = data.filter((element) => element.genere == generi);
            showCards(filtered);
        }else {
            showCards(data);
        }
    }

    filterGeneri();

    radios.forEach((button) => {
        button.addEventListener('click', () => {
            filterGeneri(button.id)
        })

       

    })
    
    



})








