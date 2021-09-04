import { useQuery,gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { Body, TopWrapper, Top_right, Top_left, Wrapper, Top_Avatar, Top_NameDate, Top_Name, Top_Date, Top_Icon, Body_Title, Body_Image, Body_Text, Body_Video, Footer, Footer_ImgText, Footer_ThumbImg, Footer_YellowText, Footer_GreyText } from '../../../../styles/check_board'

const FETCH_BOARD = gql`
    query fetchBoard($boardId:ID!) {
        fetchBoard(boardId:$boardId) {
            writer
            title
            contents
        }
    }
`


export default function CheckBoard(){
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD,{
        variables:{boardId:router.query.checkpage}
    })
    console.log(data)

    return(
        <Wrapper>

    {/* 게시물 Head */}
            <TopWrapper>
                <Top_left>
                    <Top_Avatar src='/profile.png' />
                    <Top_NameDate>

                        {/* 이름받기 */}
                        <Top_Name>{data?.fetchBoard.writer}</Top_Name>

                        <Top_Date>Date: 2021.02.18</Top_Date>
                    </Top_NameDate>
                </Top_left>
                <Top_right>
                    <Top_Icon src='/add.png' />
                    <Top_Icon src='/place.png' />
                </Top_right>
            </TopWrapper>
            
    {/* 게시물 Main */}
            <Body>

                {/* 게시글 제목 받기 */}
                <Body_Title>{data?.fetchBoard.title}</Body_Title>

                <Body_Image src='/mainImg.png'/>
                
                {/* 게시글 내용 받기 */}
                <Body_Text>{data?.fetchBoard.contents}</Body_Text>

                <Body_Video src='/video.png'/>
            </Body>

            <Footer>
                {/* Like */}
                <Footer_ImgText>
                    <Footer_ThumbImg src='/like.png' />
                    <Footer_YellowText>1920</Footer_YellowText>
                </Footer_ImgText>

                {/* DisLike */}
                <Footer_ImgText>
                    <Footer_ThumbImg src='/dislike.png' />
                    <Footer_GreyText>1920</Footer_GreyText>
                </Footer_ImgText>
            </Footer>
        </Wrapper>
    )

}