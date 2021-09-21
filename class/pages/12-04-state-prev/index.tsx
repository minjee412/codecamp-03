import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  function onClickCount() {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    // 처음에는 count에서 초기값을 가져오고 그 다음부터에는 prev에 저장된 임시값(또는 이전의 값)을 가져 온다
    // 결과 : 한번에 +5씩 증가 한다
  }

  return (
    <div>
      <div>현재카운트: {count}</div>
      <button onClick={onClickCount}>state 테스트</button>
    </div>
  );
}
