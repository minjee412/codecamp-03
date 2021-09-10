import {gql, useMutation, useQuery} from '@apollo/client'
import styled from '@emotion/styled'

const FETCH_BOARD = gql`
    query{
        fetchBoards{
            number
            writer
            title
            contents
            createdAt
        }
    }
`

const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int){
        deleteBoard(number:$number){
            message
        }
    }
`


const Main = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid grey;
`

const Line = styled.div`
    width: 20%;
`

export default function MapSelector(){
    const [deleteBoard] = useMutation(DELETE_BOARD)
    const { data } = useQuery(FETCH_BOARD) // [{},{},{}]

    async function onClickDelete(event){
        await deleteBoard({
            variables: {number: Number(event.target.id)},
            refetchQueries: [{ query: FETCH_BOARD}]
        })
    }

    return(
        <div>
            {data ?.fetchBoards.map((el, index) => (
                <Main key={el.number}>
                    <Line>
                        <input type="checkbox" />
                    </Line>
                    <Line>{index}</Line>
                    <Line>{el.title}</Line>
                    <Line>{el.writer}</Line>
                    <Line>{el.createdAt}</Line>
                    <Line>
                        <button id={el.number} onClick={onClickDelete}>삭제하기</button>
                    </Line>
                </Main>
            ))};
        </div>
    )

}