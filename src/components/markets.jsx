import { marketsData } from "../assets/js/markets"

const Markets = ()=>{
   
    return(
        <div className="container-md">
            <section className="markets">
                <h3 className="title">Bizning hamkorlar</h3>
                <div className="markets__grid">
                {
                    marketsData.map((item)=>{
                        return(
                            <a href="3" className="brend">
                                <img src={item.img} alt="" />
                            </a>
                        )
                    })
                }
                </div>
                <button className="markets__btn btn"><a href="https://alifnasiya.uz/shops?locale=uz">Barcha do'konlarni ko'rish</a></button>
            </section>
        </div>
    )
} 

export default Markets