import React from 'react'
import '../../css/message.css'
import { runInThisContext } from 'vm'

const Messages= (props)=>{

    const{messages,loggedin_user}=props;
    const message_list = messages.map((info,index)=>{
        if (loggedin_user===info.username){
            return(
                <div key={index} id="your_message">
                    <span className='message_sender'>you said:</span>
                    <p className='message_content'>{info.message}</p>
                </div>
            )   
        }else{
            return(
                <div key={index} id="others_message">
                    <span className='message_sender'>{info.username} said:</span>
                    <p className='message_content'>{info.message}</p>
                </div>
            )   
        }


    })

    return(
        <div className="messages">
            {message_list}
        </div>
    )
}
export default Messages;