import { useState } from 'react';

export default function Counting(){

    const [ set , newSet ] = useState(0)

    function Counting1(){
        newSet ( set + 1 )
    }


    return(
        <>
            <div>{set}</div>
            <button onClick={Counting1}>카운트 증가</button>
        </>
    )


}