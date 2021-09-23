import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ComponentLifecycle() {
  const [isChange, setIsChange] = useState(false);
  const router = useRouter();

  useEffect(() => {
    alert("Rendered");
    return () => {
      alert("Bye!!");
    };
  }, []);

  useEffect(() => {
    alert("Changed!!");
  }, [isChange]);

  function onClickChange() {
    setIsChange((prev) => !prev);
    console.log(isChange);
  }

  function onClickGo() {
    router.push("/14-01-pagenation");
  }

  return (
    <>
      isChange는: <span>{isChange}</span>
      <br />
      <button onClick={onClickChange}>변경하기</button>
      <br />
      <button onClick={onClickGo}>이동하기</button>
    </>
  );
}
