
const Header = ()=>{
    return(
        <>
        <header className="header">
            <div className="container-md header__container">
                <nav className="navbar">
                    <button class="menu-burger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><span></span></button>
                    <a href="#" className="navbar__logo">
                        <img src="images/Alif_logo.png" alt="" width={70} />
                        <span>nasiya</span>
                    </a>
                    <div className="navbar__links">
                       <a href="#">Do'konlar</a> 
                       <a href="#">Hamkor bo'ling</a> 
                       <a href="#">alif Juma</a> 
                    </div>
                </nav>
                <div className="header__buttons">
                        <button className="btn-lang">
                        <img src="images/rusbayrog'i.png" alt="" width={30}/>
                        <span>Rus</span>
                        </button>
                        <button className="btn-signin btn">Kirish</button>
                        <button className="btn-registr btn">Ro'yhatdan o'tish</button>
                    </div>  
            </div> 
        </header>
        <div class="offcanvas offcanvas-start w-75 p-2" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div class="offcanvas-header">
                    <a class="offcanvas-title d-flex align-items-end" id="offcanvasWithBothOptionsLabel" href="#">
                    <img src="images/Alif_logo.png" alt="" width={90} />
                        <span className="fs-2 p-1">nasiya</span>
                    </a>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body menu">
                    <div className="menu__buttons">
                        <button>Kirish</button>
                        <button>Ro'yhatdan o'tish</button>
                    </div>
                    <a href="#" className="menu__link">Do'konlar</a>
                    <a href="#" className="menu__link">alif Juma</a>
                    <div className="height"></div>
                    <a href="#" className="menu__link text-center">Hamkor bo'ling</a>
                    <a href="tel:998887909011" className="menu__link text-center">88790 9011</a>
                </div>
            </div>
        </>
    )
}

export default Header