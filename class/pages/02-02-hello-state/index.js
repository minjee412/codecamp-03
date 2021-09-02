// state 컴포넌트

import { useState } from 'react'
//useState는 react 기능이기 때문에 import를 통해서 react를 불러 와야 함.

export default function HelloStatePage(){
 // const [ state이름, state지정도구 ] = useState("초기값")
    const [ aaa, setAaa ] = useState("안녕하세요")

    function zzz(){

        setAaa("반갑습니다.")

    }

    return(

        <button onClick={zzz}>{aaa}</button>

    )

}