
import {MyDiv} from './Boardlist.styles'

export default function BoardlistUI(props){


    return(
        <>
            <MyDiv>게시물 상세 페이지 입니다 !!!</MyDiv>
            <MyDiv>게시글 번호: {props.router.query.number}</MyDiv>

            {/* 조건부렌더링 (data && data.~ : data가 있으면 data.~ 를 실행 한다.) */}
            {/* && 축약형 : ?.(옵셔널체이닝) 으로 변경 가능 */}
            {/* <MyDiv>게시글 작성자: {props.data && props.data.fetchBoard.writer}</MyDiv> 
            <MyDiv>게시글 제목: {props.data && props.data.fetchBoard.title}</MyDiv>
            <MyDiv>게시글 내용: {props.data && props.data.fetchBoard.contents}</MyDiv> */}

            {/* 옵셔널 체이닝 */}
            {/* <MyDiv>게시글 작성자: {data ?. fetchBoard.writer}</MyDiv> 
            <MyDiv>게시글 제목: {data ?. fetchBoard.title}</MyDiv>
            <MyDiv>게시글 내용: {data ?. fetchBoard.contents}</MyDiv> */}

            {/* 삼항연산자 : 내용이 없을때 loading...이 나오게 하는거*/}
            <MyDiv>게시글 작성자: {props.data ? props.data.fetchBoard.writer: "loading..."}</MyDiv>
            <MyDiv>게시글 제목: {props.data ? props.data.fetchBoard.title: "loading..."}</MyDiv>
            <MyDiv>게시글 내용: {props.data ? props.data.fetchBoard.contents: "loading..."}</MyDiv>
        </>

    )

}