import { Icon } from "@iconify/react"
import { socialLinks } from "../assets/js/social"

const Footer = ()=>{
    const year = new Date().getFullYear();
    return(
        <footer className="footer">
            <div className="container-md">
                <div className="footer__links">
                {
                    socialLinks.map((item)=>{
                        return(
                            <a href="#">
                            <Icon icon={item.icon} width={22}/>
                            </a>
                        )
                    })
                }
                </div>
                <div className="footer__right">
                <span>&copy;{year}. alif nasiya</span>
                <a href="#" className="link">
                    Ommaviy oferta
                </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer