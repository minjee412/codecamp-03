import { MyDiv, Title, IdInput, PwInput, LoginButton, Wrapper, Img} from '../../styles/example'

export default function Emotionpage(){

    // return 윗쪽에는 Javascript 쓰는 곳
    // retrun 아래에는 html 쓰는 곳
    return(
        //React 안에는 하나의 태그만 존재. (여러 태크 사용해도 그 전체는 묶는 하나의 태그를 설정 해야 됨)
        <Wrapper>
            <Title>로그인 화면</Title>
            아이디: <IdInput type="text" /> <br/>
            패스워드: <PwInput type="password" /><br/>
            <LoginButton>로그인</LoginButton>
            <Img src="/lotto.png" />
            {/* <MyDiv>안녕하세요!</MyDiv> */}
        </Wrapper>
    )


}