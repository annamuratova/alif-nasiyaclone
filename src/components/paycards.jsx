

const PayCards = ()=>{
    return(
        <div className="container-md">
            <section className="payCards">
            <h3 className="title">
            To’lovni qanday amalga oshirish mumkin?
            </h3>
            <div className="cards">
                <div className="card">
                    <div className="card__img">
                        <img src="images/logo2.jpg" alt="" width={30}/>
                    </div>
                    <p className="card__text">Alif mobi ilovasini yuklab oling. Nasiya bo’limiga o’ting, bo’lib to’lash rejasini tanlang va to’lovni amalga oshiring</p>
                    <a href="#" className="card__link">Yuklab olish ></a>
                </div>
                <div className="card">
                    <div className="card__img">
                        <img src="images/apelsin.jpg" alt="" width={50}/>
                        <img src="images/click.jpg" alt="" width={40}/>
                        <img src="images/payme.png" alt="" width={40}/>
                    </div>
                    <p className="card__text">Payme, Click yoki Apelsin kabi boshqa mobil ilovalar orqali to’lov amalga oshirishiz mumkin</p>
                </div>
                <div className="card">
                    <div className="card__img">
                        <img src="images/paynet.jpg" alt="" width={30}/>
                    </div>
                    <p className="card__text">Paynet yoki boshqa mahalliy banklar</p>
                </div>
            </div>
            </section>
        </div>
    )
}

export default PayCards