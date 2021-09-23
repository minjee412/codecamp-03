import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function FunctionalComponentLifecyclePage() {
  const router = useRouter();
  const [count, setCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>();

  //componentDidMount와 동일
  useEffect(() => {
    console.log("컴포넌트 마운트 완료 !");
    inputRef.current.focus();

    // componentWillUnmount와 동일
    return () => {
      console.log("잘가요~~");
    };
  }, []); // []를 dependency array (의존성 배열) 라고 부른다.
  //         []을 붙이면 처음 한번만 실행 (=componentDidMount)

  //componentDidUpdate와 동일. but 실행 되면 무조건 한번 실행 됨
  useEffect(() => {
    console.log("컴포넌트 수정 완료 !");
  }, [count]); // 처음 한번은 실행 되고, 다음 부터는 count가 바꼈을때만 실행

  //setState와 useEffect (실용성이 떨어짐.)
  //   useEffect(() => {
  //     setCount((prev) => prev + 1);
  //   }, []);

  //   setState와 useEffect의 dependycy-array (무한루프)
  //   useEffect(() => {
  //     setCount((prev) => prev + 1);
  //   }, [count]);

  function onClickCount() {
    setCount((prev) => prev + 1);
  }

  function onClickMove() {
    router.push("/");
  }

  return (
    <>
      {/*      ⬇️state넣는 자리 */}
      현재카운트:{count}
      <br />
      <button onClick={onClickCount}>카운트 증가</button>
      <br />
      <button onClick={onClickMove}>페이지 이동</button>
      <input type="text" ref={inputRef}></input>
    </>
  );
}
