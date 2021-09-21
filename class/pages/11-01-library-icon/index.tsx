import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons'
import styled from '@emotion/styled'

// icon에 emotion 적용
const MyIcon = styled(DoubleLeftOutlined)` //원래는 styled.div 형석으로 들어왔으나, library로 아아콘 적용시 그 아이콘의 이름을 ()안에 넣는 방식으로 작성
    font-size: 32px;
    color: pink;
    
`

export default function LibraryIconPage(){


    return(
        <div>
            <MyIcon />
            <DoubleRightOutlined />

        </div>
    )

}