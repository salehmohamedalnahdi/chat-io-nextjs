"use client"
import {useState} from "react"


export default function FormMessage({socket}) {
  const [messages, setMessages] = useState({
    user:"",
    message:""
});
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (messages.user && messages.message) {
      socket.emit('newmessage', messages);
      window.scrollTo(0, document.body.scrollHeight)
      setMessages({
        user:"",
        message:""
    });
    }else{
      return alert("Plese All Fields Are Requiered ")
    }
  };
   
  return (
    <div className="content-form">
    <form onSubmit={handleSubmit} className='form'>
      <input className="input-name"
            placeholder="Enter your name"
            type="text"
            value={messages.user}
            onChange={(e)=>{setMessages({...messages,user:e.target.value})}}
            />
       <textarea className="textarea"
            placeholder="Enter Message"
            value={messages.message}
            onChange={(e)=>{setMessages({...messages,message: e.target.value})}}
            />
        <button className="submit" type="submit">Send</button>
      </form>
      </div>
  );
}
