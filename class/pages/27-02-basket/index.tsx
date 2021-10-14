import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();

  const onClickBasket = (el) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets")) || [];

    //  체크 !!!(이미 담았는지 체크 !!!)
    let isExists = false;
    baskets.forEach((basketEl) => {
      if (el._id === basketEl._id) isExists = true;
    });
    if (isExists) {
      alert("이미 장바구니에 담으셨습니다 !");
      return;
    }

    // typename 빼고 저장하기
    const newEl = { ...el };
    delete newEl.__typename; // typename에 _가 2개 있다.
    baskets.push(newEl);

    // console.log("담기: ", el);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  function onClickLogin() {
    alert("로그인에 성공 하셨습니다.");
    const baskets = JSON.parse(localStorage.getItem("baskets")) || [];

    if (baskets.length) {
      const result = confirm(
        "장바구니에 담으신 상품이 있습니다 ! 장바구니 페이지로 이동 할까요?!"
      );
      if (result) {
        router.push("27-03-basket-logged-in");
        // 27-03-basket-logged-in
      }
    }
  }

  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          <span style={{ marginRight: "10px" }}>{index}</span>
          <span style={{ marginRight: "10px" }}>{el.writer}</span>
          <span style={{ marginRight: "10px" }}>{el.title}</span>
          <button onClick={onClickBasket(el)}>장바구니담기</button>
        </div>
      ))}
      <button onClick={onClickLogin}>로그인하기</button>
    </>
  );
}
