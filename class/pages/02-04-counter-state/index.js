import { useState } from 'react'

export default function aaa(){
    // const [ state이름, state지정도구 ] = useState("초기값")
        const [ count, setCount ] = useState(0)

        function aaa(){
            setCount(count + 1)
        }

        // CounterStatePage();

    return(
    
    <div>
        <div>{count}</div>
        <button onClick={aaa}>카운트증가</button>
    </div>
    )

}