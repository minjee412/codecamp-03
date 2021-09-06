import BoardWriteUI from './BoardWrite.presenter'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_BOARD } from './BoardWrite.queries'

export default function BoardWrite(){

    const [ creatBoard ] = useMutation(CREATE_BOARD) //state와 구조가 흡사하다.
    const [ myWriter, setMyWriter ] = useState("")
    const [ myTitle, setMyTitle ] = useState("")
    const [ myContents, setMyContents ] = useState("")

    const [ zzz, setZzz ] = useState(false)
    const [ qqq, setQqq ] = useState(false)


    // myWriter, myTitle, myContents 모두 내용이 저장 되어 있따면,
    // 즉, (myWriter !== "" && myTitle !== "" && myContentes !== "")라면,
    // setQqq를 사용해서, false => true, 이모션의 버튼색을 노란색으로 변경 하기

    function onChangeMyWriter(event){
        setMyWriter(event.target.value)
        if(event.target.value !== "" && myTitle !== "" && myContents !== ""){
            setQqq(true)
        }

        // if(myWriter !== "" && myTitle !== "" && myContents !== ""){
        //     setQqq(true)
        // }
    }

    function onChangeMyTitle(event){
        setMyTitle(event.target.value)
        if(myWriter !== "" && event.target.value !== "" && myContents !== ""){
            setQqq(true)
        }

        // if(myWriter !== "" && myTitle !== "" && myContents !== ""){
        //     setQqq(true)
        // }
    }

    function onChangeMyContents(event){
        setMyContents(event.target.value)
        if(myWriter !== "" && myTitle !== "" && event.target.value !== ""){
            setQqq(true)
        }

        // if(myWriter !== "" && myTitle !== "" && myContents !== ""){
        //     setQqq(true)
        // }
    }

    async function aaa(){
        const result = await creatBoard({
            //⬇️ 변수//
            variables: { writer: myWriter, title: myTitle, contents: myContents}

        }) //실행 하기 위해서는 함수이름 뒤에 ()을 붙여야 됨. 실행은 몇번이고 가능 하다.
        console.log(result)
        console.log(result.data.createBoard.number) // create된 정보 들을 가져 온다. (여기에서는 data로 number를 가져온다는 뜻)
    }

    // return이 한줄 일때는 괄호가 생략 가능하다.
    return (
        //presenter로 넘겨 주는 곳
        <BoardWriteUI 
        onChangeMyWriter={onChangeMyWriter}
        onChangeMyTitle={onChangeMyTitle}
        onChangeMyContents={onChangeMyContents}
        aaa={aaa}

        zzz = {zzz}
        qqq = {qqq}
        /> 
    )
}