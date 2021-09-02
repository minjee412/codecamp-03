

export default function hello (){
    
    function hello1(){
        document.getElementById("hello").innerText="반갑습니다."
    }

    return(
        <button id="hello" onClick={hello1}>안녕하세요</button>
    )

}

