import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // 원래는 v4로 써야 되는데, uuidv4 라는 이름으로 데신 쓸게요 !
import _ from "lodash"; // 실무에서 lodash를 import 할때는 _로 많이 쓴다.

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;

const Column = styled.span`
  padding: 0px 50px;
`;

const Page = styled.span`
  padding: 0px 10px;
  cursor: pointer;
`;

export default function SearchPage() {
  // const [mySearch, setMySearch] = useState("");
  const [myKeyword, setMyKeyword] = useState("");
  const { data, refetch } = useQuery(FETCH_BOARDS);

  // . 찍으면 사용 가능한 기능들의 자동화를 위해 yarn add -D @types/lodash 를 해준다
  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setMyKeyword(data);
  }, 500); // 500 = 0.5초

  function onChangeSearch(event) {
    getDebounce(event.target.value);

    // refetch({ search: event.target.value });
    // setMyKeyword(event.target.value);

    // setMySearch(event.target.value);
    //setMySearch(event.target.value); >> 검색했을때 적용 되는게 아니라 쓰기만 하면 바로 적용 되기 때문에, 이전 검색어와 섞여서 나옴
  }

  // function onClickSearch() {
  //   refetch({ search: mySearch, page: 1 }); // variables가 생략 됨(당연히 해당 페이지를 refetch하는거라서)
  //   setMyKeyword(mySearch); // onChangeSearch문제를 해결 하기 위해서 추가 됨
  // }

  function onClickPage(event) {
    refetch({ search: myKeyword, page: Number(event.target.id) });
  }

  return (
    <>
      <div>검색페이지!!!</div>
      검색어:<input type="text" onChange={onChangeSearch}></input>
      {/* <button onClick={onClickSearch}>검색</button> */}
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          <Column>{el.createdAt}</Column>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <Page key={uuidv4()} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </Page>
      ))}
    </>
  );
}
