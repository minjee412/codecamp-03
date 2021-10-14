import { useEffect, useState } from "react";

export default function BasketLoggedInPage() {
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const basketItems = JSON.parse(localStorage.getItem("baskets")) || [];
    setBasketItems(basketItems);
  }, []);

  return (
    <>
      <div>비회원으로 담은 장바구니</div>
      {basketItems.map((el, index) => (
        <div key={el._id}>
          <span style={{ marginRight: "10px" }}>{index}</span>
          <span style={{ marginRight: "10px" }}>{el.writer}</span>
          <span style={{ marginRight: "10px" }}>{el.title}</span>
        </div>
      ))}
    </>
  );
}
