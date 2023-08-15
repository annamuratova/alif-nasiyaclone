 
import {faqs} from "../assets/js/questions";
import Question from "./question";
import { useState } from "react";
 
 const Questions = ()=>{
    const [click, setClick] = useState("0");
    function handleClick(index) {
        if(click === index){
            return setClick("0");
        }
        setClick(index);
    }
    
    return (
        <section className="questions">
            <div className="container-md">
            <h3 className="title">Tez-tez so'raladigan savollar</h3>
            <div className="questions__content">
                {
                    faqs.map((faq, index) => <Question key={index} faq={faq} 
                    onToogle={()=>handleClick(index)} isActive={click === index} />)
                }
            </div>
            </div>
        </section>
    )
 }

 export default Questions