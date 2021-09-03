import { useRouter } from 'next/router'



export default function staticRoutingPage(){

    const router = useRouter()

    function onClickMove(){
        router.push('/05-02-static-routed/1')
    }


    return(
        <button onClick={onClickMove}> 정적 라우팅 페이지 이동 !!!</button>
    )


}