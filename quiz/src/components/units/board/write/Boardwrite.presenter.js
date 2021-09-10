import {MyButton} from './BoardWrite.styles'

export default function BoardWriteUI(props){


    return(
        <>
        작성자 : <input type="text" onChange={props.onChangeMyWriter}></input> <br/>
        제목 : <input type="text" onChange={props.onChangeMyTitle}></input> <br/>
        내용 : <input type="text" onChange={props.onChangeMyContents}></input> <br/>
        {!props. isEdit? "수정페이지" : "등록페이지" && <MyButton onClick={props.active} write={props.write}>등록하기</MyButton>}
        {props. isEdit? "수정페이지" : "등록페이지" && <MyButton onClick={props.onClickEdit} write={props.write}>등록하기</MyButton>}
        </>
    )
}