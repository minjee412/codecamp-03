import { useMutation, gql } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Address, ButtonWrapper, CancelButton, Contents, Error_Text, ImageWrapper, InputWrapper, Label, Label_Wrapper, OptionWrapper, Password,
        RadioButton, RadioLabel, SearchButton, Subject, SubmitButton, Title, UploadButton, Wrapper, Writer, WriterWrapper, Youtube, Zipcode, ZipcodeWrapper,
} from "../../../styles/BoardsNew.styles";

//                        ⬇️ 구조 방식선언 (string인지 int인지 , DOCS확인)
export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput:CreateBoardInput!) {
    createBoard(createBoardInput:$createBoardInput) {
      _id
    }
  }
`


export default function BoardsNewPage() {
    const router = useRouter()
    const [creatBoard ] = useMutation(CREATE_BOARD)
                                    // ⬆️위에 CREATE_BOARD 값을 불러오겠다
    const [writer, setWriter] = useState('')
    const [password, setPassword] = useState('')
    const [title, setTitle] = useState('')
    const [contents, setContents] = useState('')
    
    const [writerError, setWriterError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [titleError, setTitleError] = useState('')
    const [contentsError, setContentsError] = useState('')


    function onChangeWriter(event){
      setWriter(event.target.value)
      if(event.target.value !== ""){
        setWriterError("")
      }
    }

    function onChangePassword(event){
      setPassword(event.target.value)
      if(event.target.value !== ""){
        setPasswordError("")
      }
    }

    function onChangeTitle(event){
      setTitle(event.target.value)
      if(event.target.value !== ""){
        setTitleError("")
      }
    }

    function onChangeContents(event){
      setContents(event.target.value)
      if(event.target.value !== ""){
        setContentsError("")
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

  return (
    <Wrapper>
      <Title>게시판 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label_Wrapper>
            <Label>작성자</Label>
            <Error_Text>{writerError}</Error_Text>
          </Label_Wrapper>
          <Writer 
            name="writer" 
            type="text" 
            placeholder="이름을 적어주세요." 
            onChange={onChangeWriter}
          />
          
        </InputWrapper>
        <InputWrapper>
        <Label_Wrapper>
          <Label>비밀번호</Label>
          <Error_Text>{passwordError}</Error_Text>
        </Label_Wrapper>

          <Password
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={onChangePassword}
          />
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
      <Label_Wrapper>
        <Label>제목</Label>
        <Error_Text>{titleError}</Error_Text>
      </Label_Wrapper>
        <Subject 
          name="title" 
          type="text" 
          placeholder="제목을 작성해주세요." 
          onChange={onChangeTitle} 
        />
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Error_Text>{contentsError}</Error_Text>
        <Contents 
          name="contents" 
          placeholder="내용을 작성해주세요." 
          onChange={onChangeContents} 
        /> 
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode 
            name="zipcode" 
            placeholder="07250" 
            // onChange={onChangeZipcode} 
          /> 
          <SearchButton>우편번호 검색</SearchButton>
        </ZipcodeWrapper>
        <Address /> 
        <Address /> 
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube 
          name="youtube" 
          placeholder="링크를 복사해주세요." 
          // onChange={onChangeYoutube}
        /> 
      </InputWrapper>
      <ImageWrapper>
        <Label>사진첨부</Label>
        <UploadButton>
          {/* <input
              type="file"
              style={{ display: "none" }}
              ref={fileRef}
            /> */}
          <div>+</div>
          <div>Upload</div>
        </UploadButton>
        <UploadButton>
          <div>+</div>
          <div>Upload</div>
        </UploadButton>
        <UploadButton>
          <div>+</div>
          <div>Upload</div>
        </UploadButton>
      </ImageWrapper>
      <OptionWrapper>
        <Label>메인설정</Label>
        <RadioButton type="radio" id="youtube" name="radio-button" />
        <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
        <RadioButton type="radio" id="image" name="radio-button" />
        <RadioLabel htmlFor="image">사진</RadioLabel>
      </OptionWrapper>
      <ButtonWrapper>
        <CancelButton>취소하기</CancelButton>
        <SubmitButton onClick={onClickSubmit}>등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
