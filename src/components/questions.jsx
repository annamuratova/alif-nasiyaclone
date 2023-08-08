 
import { questionData} from "../assets/js/questions";
import Question from "./question";

 
 const Questions = ()=>{
    
    return (
        <section className="questions">
            <div className="container-md">
            <h3 className="title">Tez-tez so'raladigan savollar</h3>
            <div className="questions__content">
                {
                    questionData.map(item => <Question question={item.question} answer={item.answer} />)
                }
            </div>
            </div>
        </section>
    )
 }

 export default Questions