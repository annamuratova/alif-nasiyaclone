import { Icon } from '@iconify/react';
import { cardData } from '../assets/js/card';

const MainHead = () =>{
    return(
        <div className="container-md">
            <section className="main-head">
                <div className="banner">
                    <img src="images/baner.png" alt="" />
                </div>
                <div className='main-head__cards'>
               {
                cardData.slice(0, 4).map((item)=>{
                    return (
                        <div className='card'>
                        <div className={item.class}>
                        <img src={item.img} alt='' width={30}/>
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