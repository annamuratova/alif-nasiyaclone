
import { cardData } from '../assets/js/card';
import Banner from './banner';

const MainHead = () =>{
    return(
        <div className="container-md">
            <section className="main-head">
                <Banner />
                <div className='main-head__cards'>
               {
                cardData.map((item)=>{
                    return (
                        <div className='card'>
                        <div className={item.class}>
                        <img src={item.img} alt='bu icon' width={30}/>
                        </div>
                        <p className='card__text'>{item.text}</p>
                    </div>
                    )
                })
               }
                </div> 
            </section>
        </div>        
    )
}

export default MainHead