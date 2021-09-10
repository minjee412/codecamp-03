import BoardWriteUI from './Boardwrite.presenter'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { CREATE_BOARD, UPDATE_BOARD } from './Boardwrite.queries'


export default function BoardWrite (props){ 
    const router = useRouter()
    const [updateBoard] = useMutation(UPDATE_BOARD)

    const [ creatBoard ] = useMutation(CREATE_BOARD) //state와 구조가 흡사하다.

    const [ myWriter, setMyWriter ] = useState("")
    const [ myTitle, setMyTitle ] = useState("")
    const [ myContents, setMyContents ] = useState("")

    const [ write, setWrite ] = useState(false)




    function onChangeMyWriter(event){
        setMyWriter(event.target.value)
       if(event.target.value !== "" && myTitle !== "" && myContents !== ""){
        setWrite (true)
       }  
    }

    function onChangeMyTitle(event){
        setMyTitle(event.target.value)
        if(myWriter !== "" && event.target.value !== "" && myContents !== ""){
            setWrite (true)
           }
    }

    function onChangeMyContents(event){
        setMyContents(event.target.value)
        if(myWriter !== "" && myTitle !== "" && event.target.value !== ""){
            setWrite (true)
            }
    }

    async function active(){
        //try{}catch(){}를 사용하지 않으면 서버끊김이나 문제가 발생했을때 동작이 하지 않는데
        //try{}catch(){}를 사용해서 try{}안에 문제가 발생하면 catch(){}안에서 문제가 발생되면 메신저로 연락이 오거나 하는 방식으로 설정 가능
        try{
            const result = await creatBoard({
                //⬇️ 변수      DOCS에 있는 변수 값 그대로 써야 됨//
                variables: { writer: myWriter, title: myTitle, contents: myContents}

            }) //실행 하기 위해서는 함수이름 뒤에 ()을 붙여야 됨. 실행은 몇번이고 가능 하다.
            console.log(result)
            console.log(result.data.createBoard.number) // create된 정보 들을 가져 온다. (여기에서는 data로 number를 가져온다는 뜻)
            //router.push('/05-06-dynamic-board-read/'+ result.data.createBoard.number) // + 로 연결 해야 숫자 변수로 옴, 옛날 방식
            //router.push( `/05_faq/05-06-dynamic-board-read/${result.data.createBoard.number}` ) // 최신방식 (템플릿 리터럴), `/주소/${불러올번호값}` >>${} 안에 내용이 number 변수로 인식 된다.
                                                                            //------ (내가 만든 []폴더의 이름을 넣어야 한다.)   
            router.push(`/07-01-board-detail/${result.data.createBoard.number}`)
        } catch(error){
            console.log(error)
        }
        
    }

    async function onClickEdit(){

        try{
            await updateBoard({
            variables: {number: Number(router.query.number), writer: myWriter, title: myTitle, contents: myContents}
            }) 
                router.push(`/07-01-board-detail/${router.query.number}`)
        } catch(error){
            console.log(error)
        }
        

    }

    return(
        <BoardWriteUI 
        onChangeMyWriter = {onChangeMyWriter}
        onChangeMyTitle = {onChangeMyTitle}
        onChangeMyContents = {onChangeMyContents}
        active={active}
        write={write}
        isEdit={props.isEdit}
        onClickEdit={onClickEdit}
        
        />
        
    )

}

