"use client"
import React, { useEffect, useState ,useRef} from 'react';
import io from 'socket.io-client';
import FormMessage from './form'

const socket = io('https://back-zsxy.onrender.com');

export default function FetchMessage() {

  const [data,setData]= useState([])
  useEffect(() => {

      socket.on('message',(result) => {
        setData((prevData) => [...prevData, result]);
      });
  }, [socket]);

  return (
    <div  className="contet-page">
         {data.map((item)=><>
          <div className="main">
            <h3 className="name">{item.user}</h3>
          <div className="message-createdAt">
              <article   className="message">{item.message}</article>
              <div   className="createdAt">
                <small>createdAt</small>
             </div>
            </div>
            </div>
          </>
          )}

          <FormMessage socket={socket}/>
    </div>
  );
}
