export default function idNumber (){


    function Auth(){

        let nums = String(Math.floor(Math.random()*1000000)). padStart(6,"0")
        document.getElementById("Auth").innerText = nums
        
    }

    return(
        
        <>
        <div id="Auth">000000</div>
        <button onClick={Auth}>인증번호전송</button>
        </>

    )


}