import { Address, ButtonWrapper, CancelButton, Contents, Error_Text, ImageWrapper, InputWrapper, Label, Label_Wrapper, OptionWrapper, Password,
    RadioButton, RadioLabel, SearchButton, Subject, SubmitButton, Title, UploadButton, Wrapper, Writer, WriterWrapper, Youtube, Zipcode, ZipcodeWrapper,} from '../../../../../styles/(non)BoardsNew.styles'




export default function BoardWriteUI(props){

        return(
            <Wrapper>
            <Title>게시판 등록</Title>
            <WriterWrapper>
            <InputWrapper>
                <Label_Wrapper>
                <Label>작성자</Label>
                <Error_Text>{props.writerError}</Error_Text>
                </Label_Wrapper>
                <Writer 
                name="writer" 
                type="text" 
                placeholder="이름을 적어주세요." 
                onChange={props.onChangeWriter}
                />
                
            </InputWrapper>
            <InputWrapper>
            <Label_Wrapper>
                <Label>비밀번호</Label>
                <Error_Text>{props.passwordError}</Error_Text>
            </Label_Wrapper>
        
                <Password
                name="password"
                type="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={props.onChangePassword}
                />
            </InputWrapper>
            </WriterWrapper>
            <InputWrapper>
            <Label_Wrapper>
            <Label>제목</Label>
            <Error_Text>{props.titleError}</Error_Text>
            </Label_Wrapper>
            <Subject 
                name="title" 
                type="text" 
                placeholder="제목을 작성해주세요." 
                onChange={props.onChangeTitle} 
            />
            </InputWrapper>
            <InputWrapper>
            <Label>내용</Label>
            <Error_Text>{props.contentsError}</Error_Text>
            <Contents 
                name="contents" 
                placeholder="내용을 작성해주세요." 
                onChange={props.onChangeContents} 
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
            <SubmitButton onClick={props.onClickSubmit} typed={props.typed}>등록하기</SubmitButton>
            </ButtonWrapper>
            </Wrapper>
        
        
        )
}