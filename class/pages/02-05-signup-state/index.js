import { useState } from 'react'

export default function SignupStatePage(){

    const [ email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")

    function onChangeEmail(event){
        setEmail(event.target.value)
    }

    function onChangePassword1(event){
        setPassword1(event.target.value)
    }

    function onChangePassword2(event){
        setPassword2(event.target.value)
    }
    
    function onClickSignup(){

        if(!email.includes("@")){
            // alert("@가 없습니다.")
            setEmailError("@가 없습니다.")
        }

        if( password1 !== password2){
            // alert("비밀번호 1 과 2가 다릅니다.")
        }

    }


    
    
    return(
        <div>
            이메일: <input type="text" onChange={onChangeEmail}></input> <br/>
            <div>{emailError}</div> {/* emotion으로 색과 사이즈 변경하기 */}
            비밀번호: <input type="password" onChange={onChangePassword1}></input> <br/>
            비밀번호 확인: <input type="password" onChange={onChangePassword2}></input> <br/>
            <button onClick={onClickSignup}>회원가입하기</button>
        </div>

    )

}