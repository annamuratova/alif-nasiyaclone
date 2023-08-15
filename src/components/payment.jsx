
import { payMent } from "../assets/js/payment"


const Payment = ()=>{
    return(
        <div className="container-md">
            <section className="payment">
                <h3 className="title">Muddatli to’lovga qanday sotib olsa bo’ladi?</h3>
                <div className="payment__cards">
                    {
                        payMent.map((item)=>{
                            return(
                                <div className="card">
                                <div className="card__img">
                                    <img src={item.img} alt="bu rasm"/>
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