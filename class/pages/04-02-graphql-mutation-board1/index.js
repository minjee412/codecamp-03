import { useMutation, gql } from '@apollo/client'

const CREATE_BOARD = gql`
mutation{
    createBoard(writer:"민지", title: "게시글", contents: "게시글 입니다."){
        _id
        message
        number
    }
}
`


export default function GraphqlMutationBoard1Page(){
    const [ creatBoard ] = useMutation(CREATE_BOARD) //state와 구조가 흡사하다.

    async function aaa(){
        const result = await creatBoard() //실행 하기 위해서는 함수이름 뒤에 ()을 붙여야 됨. 실행은 몇번이고 가능 하다.
        console.log(result)
        console.log(result.data.createBoard.number) // create된 정보 들을 가져 온다. (여기에서는 data로 number를 가져온다는 뜻)
    }

    return(

        <button onClick={aaa}>GRAPHQL-API 요청하기!!!</button>

    )


}