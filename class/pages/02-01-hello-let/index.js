// 기존의 let형 컴포넌트
export default function HelloLetPage(){
// export default : 화면에 보여주는 역할 

    function zzz(){
        document.getElementById("aaa").innerText = "반갑습니다."
    }

    return(
        <button id="aaa" onClick={zzz}>안녕하세요.</button>
    )

}