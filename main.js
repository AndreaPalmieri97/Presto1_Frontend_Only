let wrapper = document.querySelector('.wrapper')

function createNavbar() {
    let div = document.createElement('div');
    
    div.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-dark"  data-aos="fade-up" data-aos-duration="1400">
    <div class="container" >
                <a class="navbar-brand" href="#"><img class="img-logo" src="./media/logo.jpg" alt=""></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active text-white font-link fs-4" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <div class="dropdown">
                                <button class="btn text-white dropdown-toggle font-link fs-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Shop
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-white font-link fs-4" aria-current="page" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-white font-link fs-4" aria-current="page" href="#">Contacts</a>
                        </li>
                    </ul>
                    <!-- Icone social -->
                    <a href=""><i class="fa-brands fa-facebook text-white me-3 font-link-fb fs-4"></i></a>
                    <a href=""><i class="fa-brands fa-twitter text-white me-3 font-link-tw fs-4"></i></a>
                    <a href=""><i class="fa-brands fa-instagram text-white me-3 font-link fs-4"></i></a>
                </div>
            </div>
            </nav>
    `;
    wrapper.appendChild(div);
}

createNavbar();

AOS.init();