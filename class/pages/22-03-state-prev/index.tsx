import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  function onClickButton() {
    // setCount((prev) => prev + 1);
    setCount((asdf) => {
      const aaa = 23;
      let bbb = 22;
      // 아무 로직이나 가능

      return asdf + 1;
    });
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickButton}>+1</button>
    </>
  );
}
