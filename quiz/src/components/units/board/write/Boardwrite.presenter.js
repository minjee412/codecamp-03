import {MyButton} from './BoardWrite.styles'

export default function BoardWriteUI(props){


    return(
        <>
        작성자 : <input type="text" onChange={props.onChangeMyWriter}></input> <br/>
        제목 : <input type="text" onChange={props.onChangeMyTitle}></input> <br/>
        내용 : <input type="text" onChange={props.onChangeMyContents}></input> <br/>
        <MyButton onClick={props.active} write={props.write}>GRAPHQL-API 요청하기!!!</MyButton>
        </>
    )
}