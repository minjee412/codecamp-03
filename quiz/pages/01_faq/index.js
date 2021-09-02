
import {Wrapper, Top, SearchBox,Header_icon, Profile_Img,Active_BottomName, BottomName, Name_Icon, Time, Question1, Pic_Name,InfoAndmenu, Search, My, Next_Icon, Name, Menu, Menu_Name, Active_Menu_Name, MenuList, Question, ListHead, ListBody, DownAllow, Bottom, BottomMenu, BottomIcon, BottomBtn} from '../../../styles/quiz_css/quiz'

export default function MyBoard(){

    return(
        <Wrapper>
            <Top>
                <Header_icon>⏺</Header_icon>
                <Header_icon>⏺</Header_icon>
                <Header_icon>⏺</Header_icon>
                <Time>12:30</Time>
            </Top>
            
            <InfoAndmenu>
                <SearchBox>
                <Search src="/search.png"></Search>
                </SearchBox>

                <Pic_Name>
                    <My>마이</My>
                    {/* <Profile_img src="/salad.jpg"></Profile_img> */}
                    <Name_Icon>
                        <Profile_Img src="/img.png"></Profile_Img>
                        <Name>임정아</Name>
                        <Next_Icon src="/arrow.png"></Next_Icon>
                    </Name_Icon>
                </Pic_Name>

                <Menu>
                    <Menu_Name>공지사항</Menu_Name>
                    <Menu_Name>이벤트</Menu_Name>
                    <Active_Menu_Name>FAQ</Active_Menu_Name>
                    <Menu_Name>Q&A</Menu_Name>
                </Menu>
                
                
            </InfoAndmenu>
           
                

            <MenuList>
                <Question>
                <Question1>
                <ListHead>Q. 01</ListHead>
                <ListBody>리뷰 작성은 어떻게 하나요?</ListBody>
                </Question1>
                <DownAllow src="/downarrow.png"></DownAllow>
                </Question>
                
                
                <Question>
                <Question1>
                <ListHead>Q. 02</ListHead>
                <ListBody>리뷰 수정/삭제는 어떻게 하나요?</ListBody>
                </Question1>
                <DownAllow src="/downarrow.png"></DownAllow>
                </Question>

                <Question>
                <Question1>
                <ListHead>Q. 03</ListHead>
                <ListBody>아이디/비밀번호를 잊어버렸어요.</ListBody>
                </Question1>
                <DownAllow src="/downarrow.png"></DownAllow>
                </Question>

                <Question>
                <Question1>
                <ListHead>Q. 04</ListHead>
                <ListBody>회원탈퇴를 하고 싶어요.</ListBody>
                </Question1>
                <DownAllow src="/downarrow.png"></DownAllow>
                </Question>

                <Question>
                <Question1>
                <ListHead>Q. 05</ListHead>
                <ListBody>출발지 설정은 어떻게 하나요?</ListBody>
                </Question1>
                <DownAllow src="/downarrow.png"></DownAllow>
                </Question>

                <Question>
                <Question1>
                <ListHead>Q. 06</ListHead>
                <ListBody>비밀번호를 변경하고 싶어요.</ListBody>
                </Question1>
                <DownAllow src="/downarrow.png"></DownAllow>
                </Question>
                
            </MenuList>
            
            
            <BottomMenu>
                <BottomIcon>
                <BottomBtn src="/home.png"></BottomBtn>
                <BottomName>홈</BottomName>
                </BottomIcon>

                <BottomIcon>
                <BottomBtn src="/location.png"></BottomBtn>
                <BottomName>잇츠로드</BottomName>
                </BottomIcon>

                <BottomIcon>
                <BottomBtn src="/like.png"></BottomBtn>
                <BottomName>마이찜</BottomName>
                </BottomIcon>

                <BottomIcon>
                <BottomBtn src="/selected.png"></BottomBtn>
                <Active_BottomName>마이</Active_BottomName>
                </BottomIcon>

            </BottomMenu>
     
        </Wrapper>
    )

}