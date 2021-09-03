import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'

const CREATE_BOARD = gql`
mutation  createBoard($writer: String, $title: String, $contents:String     )  {
    createBoard(writer:$writer, title: $title, contents: $contents){
        _id
        message
        number
    }
}
`


export default function DynamicBoardWrite(){
    const router = useRouter()


    const [ creatBoard ] = useMutation(CREATE_BOARD) //state와 구조가 흡사하다.
    const [ myWriter, setMyWriter ] = useState("")
    const [ myTitle, setMyTitle ] = useState("")
    const [ myContents, setMyContents ] = useState("")

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
        //try{}catch(){}를 사용하지 않으면 서버끊김이나 문제가 발생했을때 동작이 하지 않는데
        //try{}catch(){}를 사용해서 try{}안에 문제가 발생하면 catch(){}안에서 문제가 발생되면 메신저로 연락이 오거나 하는 방식으로 설정 가능
        try{
            const result = await creatBoard({
                //⬇️ 변수//
                variables: { writer: myWriter, title: myTitle, contents: myContents}
    
            }) //실행 하기 위해서는 함수이름 뒤에 ()을 붙여야 됨. 실행은 몇번이고 가능 하다.
            console.log(result)
            console.log(result.data.createBoard.number) // create된 정보 들을 가져 온다. (여기에서는 data로 number를 가져온다는 뜻)
            //router.push('/05-06-dynamic-board-read/'+ result.data.createBoard.number) // + 로 연결 해야 숫자 변수로 옴, 옛날 방식
            router.push( `/05-06-dynamic-board-read/${result.data.createBoard.number}` ) // 최신방식 (템플릿 리터럴), `/주소/${불러올번호값}` >>${} 안에 내용이 number 변수로 인식 된다.
        } catch(error){
            console.log(error)
        }
        
    }

    return(
        <>
            작성자 : <input type="text" onChange={onChangeMyWriter}></input> <br/>
            제목 : <input type="text" onChange={onChangeMyTitle}></input> <br/>
            내용 : <input type="text" onChange={onChangeMyContents}></input> <br/>
            <button onClick={aaa}>GRAPHQL-API 요청하기!!!</button>
        </>
    )


}