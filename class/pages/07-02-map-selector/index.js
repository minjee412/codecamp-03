import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      createdAt
    }
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
`;

const Column = styled.div`
  width: 20%;
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

export default function MapSelectorPage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const { data } = useQuery(FETCH_BOARDS); // [{}, {}, {}]

  async function onClickDelete(event) {
    const result = await deleteBoard({
      variables: { number: Number(event.target.id) }, // javascript가 html 로 나갈때는 문자열로 나가기 때문에 앞에 Number를 붙여서 ($number: Int)조건에 맞게 숫자로 바꿔 준다.
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
    alert(result.data.deleteBoard.message);
  }

  // const count = 5

  return (
    <div>
      {data?.fetchBoards.map((el, index) => (
        <Row key={el.number}>
          <Column>
            <input type="checkbox" />
          </Column>
          <Column>{index}</Column>
          <Column>{el.title}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.createdAt}</Column>
          <Column>
            <button id={el.number} onClick={onClickDelete}>
              삭제하기
            </button>
          </Column>
        </Row>
      ))}
    </div>
  );
}
