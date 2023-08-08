import { cardData } from "../assets/js/card"


const Payment = ()=>{
    return(
        <div className="container-md">
            <section className="payment">
                <h3 className="title">Muddatli to’lovga qanday sotib olsa bo’ladi?</h3>
                <div className="payment__cards">
                    {
                        cardData.slice(4).map((item)=>{
                            return(
                                <div className="card">
                                <div className="card__img">
                                    <img src={item.img} alt=""/>
                                </div>
                                <p className="card__text">{item.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}
export default Payment