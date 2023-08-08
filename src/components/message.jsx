import {useState} from "react";
import { Icon } from '@iconify/react';

const Message = ()=>{
    const [show, setShow] = useState(false);
    const [btn, setBtn] = useState (false);
    const [value, setValue] = useState("");
    
   
  setTimeout(
    ()=>{
        setBtn(true);
    }, 5000)

    const handleShow = ()=>{
       if(!show){
        setShow(true);
       }
    }

    const hide = ()=>{
        setShow(false);
    }
    return (
        <div className="message">
           {
            btn ?  <button className="open" onClick={handleShow}>Напишите нам, мы онлайн</button> : ""
           }
            <div className={ show ? 'send-message show' : 'send-message'}>
            <button className="btn-close" onClick={hide}></button>
                <div className="send-message__head">
                    <p>Напишите ваше сообщение</p>
                    <span>Оператор онлайн</span>
                </div>
                <div className="send-message__content">
                    <div className="answer">
                        <img src="images/124.jpg" alt="" width={30}/>
                        Assalomu alaykum😊
                        Sizga qanday yordam bera olamiz?
                    </div>
                </div>
                <form className="send-message__form">
                    <input type="text" placeholder="Введете сообщение" value={value} onChange={(e)=> setValue(e.target.value)}/>
                    <span className={value !== "" ? 'green' : ''}><Icon icon="tabler:arrow-up" width={24}/></span>
                    </form>
            </div>
        </div>
    )
}

export default Message