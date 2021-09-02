import { useMutation, gql } from '@apollo/client'
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


export default function GraphqlMutationBoard2Page(){
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
        const result = await creatBoard({
            //⬇️ 변수//
            variables: { writer: myWriter, title: myTitle, contents: myContents}

        }) //실행 하기 위해서는 함수이름 뒤에 ()을 붙여야 됨. 실행은 몇번이고 가능 하다.
        console.log(result)
        console.log(result.data.createBoard.number) // create된 정보 들을 가져 온다. (여기에서는 data로 number를 가져온다는 뜻)
    }

    return(
        <>
            작성자 : <input type="text" onChange={onChangeMyWriter}></input> <br/>
            제목 : <input type="text" onChange={onChangeMyTitle}></input> <br/>
            내용 : <input type="text" onChang={onChangeMyContents}></input> <br/>
            <button onClick={aaa}>GRAPHQL-API 요청하기!!!</button>
        </>
    )


}