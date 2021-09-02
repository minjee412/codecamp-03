import { gql, useMutation } from '@apollo/client'
import { useState } from 'react'

const create_Board = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){    
        createBoard( writer: $writer, title: $title, contents: $contents){
            _id
            message
            number
        }
    }
`

export default function createBoard01(){

    const [ createBoard ] = useMutation(create_Board)
    const [ MyWriter, setMyWriter ] = useState('')
    const [ MyTitle, setMyTitle] = useState('')
    const [ MyContent, setMyContent] = useState('')

    function onChangeWriter(event){
        setMyWriter (event.target.value)
    }

    function onChangeTitle(event){
        setMyTitle (event.target.value)
    }

    function onChangeContent(event){
        setMyContent (event.target.value)
    }

    async function click(){

        const result = await createBoard({
            variables: {writer: MyWriter, title: MyTitle, contents: MyContent }
        })

        console.log(result.data.createBoard.number)

    }


    return(
        <>
            작성자 : <input type="text" onChange={onChangeWriter}></input> <br/>
            제목 : <input type="text" onChange={onChangeTitle}></input> <br/>
            내용 : <input type="text" onChange={onChangeContent}></input> <br/>
            <button onClick={click}> GRAPHQL 실행</button>
        </>
    )

}