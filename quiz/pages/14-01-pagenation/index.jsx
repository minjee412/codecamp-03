import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARD = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

const Page = styled.span`
  margin: 10px;
  cursor: pointer;

  :active {
    color: red;
  }
`;

const Row = styled.span`
  display: flex;
  flex-direction: row;
`;

const Title = styled.span`
  width: 100%;
`;

export default function PageNation() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARD, {
    variables: { page: 1 },
  });

  const { data: dataBoardCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardCount?.fetchBoardsCount / 10);

  function onClickPage(event) {
    refetch({ page: Number(event.target.id) });
  }

  function onClickPrevPage() {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
  }

  function onClickNextPage() {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
  }

  function onClickFirstPage() {
    setStartPage(1);
  }

  return (
    <>
      <div>페이지네이션</div>
      <div>
        {data?.fetchBoards.map((el) => (
          <Row key={el._id}>
            <Title>{el.title}</Title>
            <Title>{el.writer}</Title>
          </Row>
          // <div>{el.createdAt}</div>
        ))}
      </div>
      <Page onClick={onClickFirstPage}>처음으로</Page>
      <Page onClick={onClickPrevPage}>이전</Page>

      {new Array(10).fill(1).map(
        (_, index) =>
          startPage + index <= lastPage && (
            <Page
              key={startPage + index}
              onClick={onClickPage}
              id={String(startPage + index)}
            >
              {startPage + index}
            </Page>
          )
      )}

      <Page onClick={onClickNextPage}>다음</Page>
    </>
  );
}
