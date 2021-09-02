import { useState } from 'react'

export default function hello(){

    const [ state, setState ] = useState("안녕하세요")

    function hello1(){
        setState ("반갑습니다.")

    }

    return(
        <button onClick={hello1}> {state} </button>
    )

}