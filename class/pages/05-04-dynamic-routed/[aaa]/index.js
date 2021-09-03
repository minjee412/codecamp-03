//폴더명이 반드시 [] 안에 있어야 동적 라우팅으로 된다.

import { useRouter } from 'next/router'

export default function dynamicRoutedPage(){

    const router = useRouter()

    return(
        <>
            <div>{router.query.aaa}번 페이지 입니다.</div>
            <div>동적페이지 이동 완료</div>
        </>
    )

}