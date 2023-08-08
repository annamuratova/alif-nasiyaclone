import { useState } from "react";

  const Question = (props)=>{
    const [isActive, setActive] = useState(false);
    function handleClick(id) {
    setActive(!isActive);
    console.log(isActive);
    }
    return(
        <div className={isActive? 'question-wrapper active' : 'question-wrapper'}>
            <div className='question' id={props.id}>
            <p>{props.question}</p>
            <button onClick={() => handleClick(props.id)}>
                <svg className={isActive? 'active' : ''} viewBox="0 0 320 512" width="100" title="angle-down">
        <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
        </svg>
            </button>     
            </div>
            <div className={isActive? 'answer active' : 'answer'}>{props.answer}</div>
        </div>
    )
  }

  export default Question