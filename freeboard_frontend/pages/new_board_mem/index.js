import { Address, Info_Text, LittleText, Main, MainSetting, Picture, PicUpload, PlusImg, Radio, RadioBtn, RadioYoutube, Register, RegisterBtn, Title, Title_Text, Title_Title, Upload, UploadText, Wrapper, Youtube, Zip, ZipCode, ZipCode_Search, ZipCode_Text } from '../../styles/(mem)BoardsNew.styles'

export default function NewBoard(){

    return(

        // 전체
        <Wrapper>
            <Register>게시물 등록</Register>
        {/* 제목 */}
            <Title>
                <Title_Title>제목</Title_Title>
                <Title_Text type="text" placeholder="제목을 작성 해주세요."></Title_Text>
            </Title>
        {/* 내용 */}
            <Main>
                <Title_Title>내용</Title_Title>
                <Info_Text type="text" placeholder="내용을 작성 해주세요."></Info_Text>
            </Main>
        
        {/* 주소 */}
            <Address>
            <Title_Title>주소</Title_Title>
        {/* 우편번호 */}
            <Zip>
            <ZipCode type="text" placeholder="07150"></ZipCode>
            <ZipCode_Search>우편번호 검색</ZipCode_Search>
            </Zip>

            <ZipCode_Text></ZipCode_Text>
            <ZipCode_Text></ZipCode_Text>
            </Address> 

        {/* 유튜브 */}
        <Youtube>
            <Title_Title>유튜브</Title_Title>
            <ZipCode_Text type="text" placeholder="링크를 복사해주세요."></ZipCode_Text>
        </Youtube>
            
        {/* 사진첨부 */}
        <Picture>
            <Title_Title>사진첨부</Title_Title>
            <Upload>
            <PicUpload>
                <PlusImg src="/Vector.png"></PlusImg>
                <UploadText>Upload</UploadText>
            </PicUpload>

            <PicUpload>
                <PlusImg src="/Vector.png"></PlusImg>
                <UploadText>Upload</UploadText>
            </PicUpload>

            <PicUpload>
                <PlusImg src="/Vector.png"></PlusImg>
                <UploadText>Upload</UploadText>
            </PicUpload>
            </Upload>
        </Picture>   

        {/* 메인설정 */}
        <MainSetting>
            <Title_Title>메인 설정</Title_Title>
            <Radio>  
                <RadioYoutube>
                    <RadioBtn type="radio"></RadioBtn>
                    <LittleText>유튜브</LittleText>
                </RadioYoutube>

                <RadioYoutube>
                    <RadioBtn type="radio"></RadioBtn>
                    <LittleText>사진</LittleText>
                </RadioYoutube>
            </Radio>
        </MainSetting>

        {/* 등록하기 버튼 */}
        <RegisterBtn>등록하기</RegisterBtn>
        
        </Wrapper>

    )

}