import { useMutation, gql } from '@apollo/client';
import { useState } from 'react';
import {
  Address,
  ButtonWrapper,
  CancelButton,
  Contents,
  Error_Text,
  ImageWrapper,
  InputWrapper,
  Label,
  Label_Wrapper,
  OptionWrapper,
  Password,
  RadioButton,
  RadioLabel,
  SearchButton,
  Subject,
  SubmitButton,
  Title,
  UploadButton,
  Wrapper,
  Writer,
  WriterWrapper,
  Youtube,
  Zipcode,
  ZipcodeWrapper,
} from "../../styles/BoardsNew.styles";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput:CreateBoardInput!){
    createBoard(createBoardInput:$createBoardInput)
      {_id}
  }
`
//


export default function BoardsNewPage() {

    const [creatBoard] = useMutation(CREATE_BOARD)

    const [ writer, newWriter ] = useState ("")
    const [ password, newPassword ] = useState ("")
    const [ title, newTitle ] = useState ("")
    const [ contents, setContents] = useState('')
    const [ MyContent, setMyContent] = useState('')
    const [ MyZipcode,setMyZipcod] = useState('')
    const [ MyAddress, setMyAddress] = useState('')
    const [ MyAddressDetail, setMyAddressDetail] = useState('')
    const [ MyYoutube, setMyYoutube] = useState('')

    
    
    const [ titleError, setTitleError ] = useState ("")
    const [ writerError, setWriterError ] = useState ("")
    const [ passwordError, setPasswordError ] = useState ("")
    const [ contentsError, setContentsError] = useState('')



    function onChangeWriter(event){
      newWriter(event.target.value)
    }
    function onChangePassword(event){
      newPassword(event.target.value)
    }
    function onChangeTitle(event){
      newTitle(event.target.value)
    }

    function onChangeContents(event){
      setContents(event.target.value)
      if(event.target.value !== ""){
        setContentsError("")
      }
    }

    function onChageContent(event){
      setMyContent(event.target.value)
    }

    function onChangeZipcode(event){
      setMyZipcod(event.target.value)
    }

    function onChangeAddress (event){
      setMyAddress(event.target.value)
    }

    function onChangeAddressDetail (event){
      setMyAddressDetail(event.target.value)
    }

    function onChangeYoutube(event){
      setMyYoutube(event.target.value)
    }


      
    async function onClickSignup(){
      
        if(writer.includes(" ")){
          setWriterError("올바른 이름이 아닙니다.")
        }else{setWriterError (" ")}


        if(password.includes(" ")){
          setPasswordError("올바른 비밀번호가 아닙니다.")
        }else{setPasswordError(" ")}


        if(title.includes("  ")){
          setTitleError("올바른 제목을 입력하세요.")
        }else{setTitleError(" ")}

        if(contents === ""){
          setContentsError("내용을 입력해주세요.")

        if(writer !== "" && password !== "" && title !== "" && contents !== ""){
          alert('게시물을 등록합니다~')
        }

        
      }
      const result = await creatBoard({
        variables: {
          createBoardInput:{ 
          writer: writer,
                    password: password,
                    title: title,
                    contents: MyContent,
                    youtubeUrl: MyYoutube,
                    boardAddress:{zipcode: MyZipcode,
                                  address: MyAddress,
                                  addressDetail: MyAddressDetail}
          }
        }
      })

      console.log(result.data.createBoard._id)
        
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
          <Writer name="writer" type="text" placeholder="이름을 적어주세요." onChange={onChangeWriter}/>
          
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
        <Subject name="title" type="text" placeholder="제목을 작성해주세요." onChange={onChangeTitle} />
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents name="contents" placeholder="내용을 작성해주세요." onChange={onChageContent} /> 
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode name="zipcode" placeholder="07250" onChange={onChangeZipcode} /> 
          <SearchButton>우편번호 검색</SearchButton>
        </ZipcodeWrapper>
        <Address onChange={onChangeAddress}/> 
        <Address onChange={onChangeAddressDetail}/> 
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube name="youtube" placeholder="링크를 복사해주세요." onChange={onChangeYoutube}/> 
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
        <SubmitButton onClick={onClickSignup}>등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
