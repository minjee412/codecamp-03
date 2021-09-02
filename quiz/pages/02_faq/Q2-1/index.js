export default function Count(){

    function Counting(){

        let Num = Number(document.getElementById("zero").innerText) + 1

        document.getElementById("zero").innerText = Num  

    }

    return(
        <>
        <div id="zero">0</div>
        <button onClick={Counting}>카운트증가</button>
        </>
    )

}