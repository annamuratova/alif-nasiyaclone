import { Icon } from '@iconify/react';
import { mobiles } from '../assets/js/mobile';

const MobileApp =()=>{
    return (
        <section className="mobile-app">
            <div className="container-md">
                <div className="mobile-app__left">
                    <h3 className="title">
                    alif nasiya sizning smartfoningizda
                    </h3>
                    <div className="mobile-app__flex">
                    {
                        mobiles.map((item)=>{
                            return(
                                <a href={item.src}>
                                <Icon icon={item.img} width={25}/>
                               <div>
                                <span>{item.text}</span>
                                <p>{item.name}</p>
                               </div>
                                </a>
                            )
                        })
                    }
                    </div>
                </div>
                <div className='mobile-app__right'>
                    <img src="images/mobil.png" alt="" className='img1'/>
                    <img src="images/mobil1.png" alt="" className='img2'/>
                </div>
            </div>
        </section>
    )
}
export default MobileApp