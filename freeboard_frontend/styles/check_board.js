import styled from '@emotion/styled';

export const Wrapper = styled.div`
    width: 1200px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 80px 102px;
    margin-left: 360px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    /* border: 1px solid black; */
`

export const TopWrapper = styled.div`
    width: 996px;
    /* height: 67px; */
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #BDBDBD;
`

export const Top_left = styled.div`
    width: 194px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid black; */
`

export const Top_Avatar = styled.img`
    width: 46.67px;
    height: 46.67px;
    margin-right: 16.67px;
    /* border: 1px solid black; */
`

export const Top_NameDate = styled.div`
    width: 140px;
    height: 60px;
    display: flex;
    flex-direction: column;
    /* border: 1px solid black; */
`

export const Top_Name = styled.div`
    width: 126px;
    height: 36px;
    font-size: 24px;
    font-weight: 500;

    /* border: 1px solid black; */
`

export const Top_Date = styled.div`
    width: 140px;
    height: 24px;
    font-size: 16px;
    color: #828282;
    /* border: 1px solid black; */
`

export const Top_right = styled.div`
    height: 32px;
    width: 82px;
    display: flex;
    justify-content: space-between;
    /* border: 1px solid black; */
`

export const Top_Icon = styled.img`
    width: 32px;
    height: 32px;
    object-fit: contain;
    /* object-fit: contain >> 가로세로 비율을 유지한 채로 사이즈가 조절되지만, 
            이미지와 컨테이너 간의 비율이 맞지 않는 경우엔 자리가 남게 됩니다.*/
    /* border: 1px solid black; */
`

export const Body = styled.div`
    width: 996px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding-top: 80px;
    /* border: 1px solid red; */
`

export const Body_Title = styled.div`
    width: 996px;
    height: 54px;
    font-size: 36px;
    font-weight: bold;
    /* border: 1px solid black; */
`

export const Body_Image = styled.img`
    width: 996px;
    height: 480px;
    margin-top: 40px;
    /* border: 1px solid black; */
`

export const Body_Text = styled.div`
    width: 996px;
    margin-top: 40px;
    /* border: 1px solid black; */

`

export const Body_Video = styled.img`
    width: 486px;
    height: 240px;
    object-fit: none;
    /* object-fit:cover >> 가로세로 비율은 유지하면서 컨테이너에 꽉 차도록 설정됩니다.
                            이미지의 가로세로 비율은 유지되지 않아요. 
                  fill >> 주어진 너비와 높이에 딱 맞도록 사이즈를 조절합니다. 이미지의 가로세로 비율은 유지되지 않아요.
                  contain >> 가로세로 비율을 유지한 채로 사이즈가 조절되지만, 이미지와 컨테이너 간의 비율이 맞지 않는 경우엔 자리가 남게 됩니다.
                  none >> 아무것도 하지 않고 본래의 이미지 사이즈를 유지합니다. 그래도 이미지 가운데가 보여지도록 하는 센스가 있어요.
                  scale-down >> none 또는 contain 중에 더 적절한 방향으로 이미지 사이즈를 조절합니다. */
    margin-top: 120px;
    /* border: 1px solid black; */
`

export const Footer = styled.div` 
                    /* styled.div는 반드시 붙여서 써야 된다. */
    width: 120px;
    height: 51px;
    margin-top: 160px;
    display: flex;
    justify-content: space-between;
    /* border: 1px solid black; */
`

export const Footer_ImgText = styled.div`
    width: 40px;
    height: 51px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid black; */
`

export const Footer_ThumbImg = styled.img`
    width: 40px;
    height: 27px;
    object-fit: none;
    /* border: 1px solid black; */
`

export const Footer_YellowText = styled.div`
    width: 40px;
    height: 27px;
    font-size: 18px;
    color: #FFD600;
`

export const Footer_GreyText = styled.div`
    /* width: 40px; */
    height: 27px;
    font-size: 18px;
    color: #828282;
`