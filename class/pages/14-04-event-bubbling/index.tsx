import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  margin: 20px;
`;

export default function EventBubblingPage() {
  const { data } = useQuery(FETCH_BOARDS);

  function onClickRow(event) {
    alert("클릭!!");
    alert(event.currentTarget.id);
    // currentTarget : 자식에서 부모로 이번트를 전달 하는 것 (
      
    )
  }

  return (
    <>
      <div>이번트버블링페이지</div>
      <div>
        {data?.fetchBoards.map((el) => (
          <Row key={el._id} id={el._id} onClick={onClickRow}>
            <Column>{el.writer}</Column>
            <Column>{el.title}</Column>
            <Column>{el.createdAt}</Column>
          </Row>
        ))}
      </div>
    </>
  );
}
