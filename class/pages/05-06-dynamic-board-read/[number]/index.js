//Mutataion은 내가 하고 싶을때 할수 있었지만,
//Query는 페이지가 열리면 무조건 실행

import { useRouter } from 'next/router'
import { useQuery, gql } from '@apollo/client'

const FETCH_BOARD = gql`
    query fetchboard($number: Int){
        fetchBoard(number: $number){
            writer
            title
            contents
        }
    }

`


export default function DynaminBoardRead(){
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.number) }
    })   
    // variables에 받아오는 값이 Int 면, 앞에서 Num()을 써서 숫자로 변형 시켜준다.
    console.log(data)

    return(
        <>
            <div>게시물 상세 페이지 입니다 !!!</div>
            <div>게시글 번호: {router.query.number}</div>

            {/* 조건부렌더링 (data && data.~ : data가 있으면 data.~ 를 실행 한다.) */}
            {/* && 축약형 : ?.(옵셔널체이닝) 으로 변경 가능 */}
            <div>게시글 작성자: {data && data.fetchBoard.writer}</div> 
            <div>게시글 제목: {data && data.fetchBoard.title}</div>
            <div>게시글 내용: {data && data.fetchBoard.contents}</div>

            {/* 옵셔널 체이닝 */}
            {/* <div>게시글 작성자: {data ?. fetchBoard.writer}</div> 
            <div>게시글 제목: {data ?. fetchBoard.title}</div>
            <div>게시글 내용: {data ?. fetchBoard.contents}</div> */}

            {/* 삼항연산자 : 내용이 없을때 loading...이 나오게 하는거*/}
            {/* <div>게시글 작성자: {data ? data.fetchBoard.writer: "loading..."}</div>
            <div>게시글 제목: {data ? data.fetchBoard.title: "loading..."}</div>
            <div>게시글 내용: {data ? data.fetchBoard.contents: "loading..."}</div> */}
        </>
    )

}
//해당 페이지는 router로 변경 되는 값을 받되, 그외 안받는 내용들은 고정된 상태일때 쓴다.
