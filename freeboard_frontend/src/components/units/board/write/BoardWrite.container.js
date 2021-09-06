import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { CREATE_BOARD } from './BoardWrite.queries'
import BoardWriteUI from './BoardWrite.presenter'



export default function BoardWrite(){
    const router = useRouter()
    const [creatBoard ] = useMutation(CREATE_BOARD)
                                    // ⬆️위에 CREATE_BOARD 값을 불러오겠다
    const [writer, setWriter] = useState('')
    const [password, setPassword] = useState('')
    const [title, setTitle] = useState('')
    const [contents, setContents] = useState('')

    const [ typed, setTyped ] = useState(false)
    
    const [writerError, setWriterError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [titleError, setTitleError] = useState('')
    const [contentsError, setContentsError] = useState('')


    function onChangeWriter(event){
        setWriter(event.target.value)
        if(event.target.value === ""){
            setWriterError("");} 
        
        if (event.target.value !== "" && password !== ""  && title !== "" && contents !== ""){
        setTyped (true)
        } else {
            setTyped (false)
        }
    }

    function onChangePassword(event){
        setPassword(event.target.value)
        if(event.target.value !== ""){
            setPasswordError("")
        }
        
        if (writer !== "" && event.target.value !== ""  && title !== "" && contents !== ""){
            setTyped (true)
        } else {
            setTyped (false)
        }
    }

    function onChangeTitle(event){
        setTitle(event.target.value)
        if(event.target.value !== ""){
            setTitleError("")
        }
        
        if (writer !== "" && password !== ""  && event.target.value !== "" && contents !== ""){
            setTyped (true)
        } else {
            setTyped (false)
        }
    }

    function onChangeContents(event){
        setContents(event.target.value)
        if(event.target.value !== ""){
            setContentsError("")
        }
        
        if (writer !== "" && password !== ""  && title !== "" && event.target.value !== ""){
            setTyped (true)
        } else {
            setTyped (false)
        }
    }

        async function onClickSubmit(){
        if(writer === ""){
            setWriterError("작성자를 입력해주세요.")
        }
        if(password === ""){
            setPasswordError("비밀번호를 입력해주세요.")
        }
        if(title === ""){
            setTitleError("제목을 입력해주세요.")
        }
        if(contents === ""){
            setContentsError("내용을 입력해주세요.")
        }
        if(writer !== "" && password !== "" && title !== "" && contents !== ""){
            alert('게시물을 등록합니다~')
            try{
            const result = await creatBoard({
                // const 이름은 꼭 result가 아니어도 된다.
                variables: {
                    createBoardInput:{
                    // 키값과 value값이 같으면 생략이 가능 하다. (자바스크립트 내에서) 
                    // 즉, writer : writer를 그냥 writer로 설정 할 수 있다.
                    writer: writer, 
                    password: password,
                    title: title,
                    contents: contents
                    } 
                }
            })
                console.log(result.data.createBoard._id)
                router.push(`/board/board_check/${result.data.createBoard._id}`)
            } catch(error){
            console.log(Error)
            }
        }
        
    }

    return(
        <BoardWriteUI 
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        onClickSubmit={onClickSubmit}
        writerError={writerError}
        passwordError={passwordError}
        titleError={titleError}
        contentsError={contentsError}
        typed={typed}
        />
    )
}