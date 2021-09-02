import { useState } from 'react';

export default function signUp (){

    const[email, newEmail] = useState("")
    const[Error, setError] = useState("")
    const[password, newPassword] = useState("")
    const[pwError, pwsetError] = useState("")
    const[C_password, new_C_Password] = useState("")


    function on_newEmail(event){
        newEmail(event.target.value)
    }

    function on_newPassword(event){
        newPassword(event.target.value)
    }

    function on_new_C_Password(event){
        new_C_Password(event.target.value)
    }


    function onClickApply(){
        
        if(email.includes("@")){
        setError(" ")
        } else{
        setError ("@가 없습니다.")}
    
    
        if( password === C_password ){
        pwsetError(" ")
        } else {pwsetError ("비밀번호가 다릅니다.")}
    

    
    }


    return(

        <div>
        이메일 : <input type = "text" onChange={on_newEmail}></input> <br/><br/>
        <div style={{color:"red"}}>{Error}</div>
        비밀번호 : <input type = "text"  onChange={on_newPassword}></input> <br/><br/>
        비밀번호 확인 : <input type = "text"  onChange={on_new_C_Password}></input> 
        <div style={{color:"red"}}>{pwError}</div><br/><br/>
        <button onClick={onClickApply}>가입하기</button>
        </div>


    )

}