import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { IMutation, IMutationCreateBoardArgs } from '../../src/commons/types/generated/types'

const CREATE_BOARD = gql`
    # 여기는 자바스크립트 주석입니다
    mutation createBoard($writer: String, $title: String, $contents: String    ) {
        createBoard(writer: $writer, title: $title, contents: $contents){
            number
            message
        }
    }
`
// 여기는 자바스크립트 주석입니다
export default function DynamicBoardWrite(){
    const router = useRouter()

    const [ createBoard ] = useMutation<Pick <IMutation,'createBoard'>, IMutationCreateBoardArgs>(CREATE_BOARD) // IMutation을 쓰면 아래 variables에 요소들을 자동으로 리스트로 보여 줌
    const [myWriter, setMyWriter] = useState<string>("") //기존 코드에서 ("") 부분이 문자열로 추론이 가능 하기 떄문에 구지 <string>으로 타입 지정하지 않아도 된다.
    const [myTitle, setMyTitle] = useState<string>("") // 지금은 string이지만 나중에 number로 바뀔 수 도 있을때 사용 (이런 경우를 제외 하곤 구지 타입 지정 하지 않아도 된다.)
    const [myContents, setMyContents] = useState("")

    const ppp: string = "asdf" // 상수에 타입 지정하기

    // setMyTitle(1231) // 숫자랑 문자 모두 넣고 싶을 때

    function onChangeMyWriter(event){
        setMyWriter(event.target.value)
    }

    function onChangeMyTitle(event){
        setMyTitle(event.target.value)
    }

    function onChangeMyContents(event){
        setMyContents(event.target.value)
    }

    async function aaa(){
        try {

            const result = await createBoard({
                variables: { writer: myWriter, title: myTitle, contents: myContents}

                // const [myTitle, setMyTitle] = useState<string | number>("")
                // variables: { writer: myWriter, title: myTitle, contents: myContents}
                // 이렇게 되면 title은 string으로 지정 되어 있는데 string | number가 와서 에러 발생 >> string | number를 string으로 바꿔 주면 에러 없어짐
            })
            result.data.createBoard.number // codegen을 깔면 .만 쳐도 뒤에 어떤것들이 올수 있는지 알수 있어 오타나 에러를 최대한을 줄일 수 있다
            console.log(result)
            console.log(result.data.createBoard.number)
            // router.push('/05-06-dynamic-board-read/' + result.data.createBoard.number) // 옛날방식
            router.push(`/05-06-dynamic-board-read/${result.data.createBoard.number}`) // 최신방식(템플릿 리터럴)

        } catch(error){
            console.log(error)
        }
        
    }

    return (
        <>
            //
            작성자: <input type="text" onChange={onChangeMyWriter} /><br />
            제목: <input type="text" onChange={onChangeMyTitle} /><br />
            내용: <input type="text" onChange={onChangeMyContents} /><br />
            {/* <button onClick={aaa}>GRAPHQL-API 요청하기!!!</button> */}
        </>
    )
}