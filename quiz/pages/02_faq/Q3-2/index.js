import { useState } from 'react';


export default function random (){
    
    const [ auth, newAuth ] = useState ('000000')
    
    function send(){
        newAuth (Math.floor(Math.random() * 1000000))
    }


    return(
        <>
        <div>{auth}</div>
        <button onClick={send}>인증번호전송</button>
        </>
    )



}