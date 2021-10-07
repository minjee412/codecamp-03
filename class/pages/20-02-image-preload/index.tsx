import { useEffect, useRef, useState } from "react";

export default function ImagePreloadPage() {
  const divRef = useRef<HTMLDivElement>();

  const [imageTag, setImageTag] = useState<HTMLImageElement>();

  useEffect(() => {
    const img = new Image(); // new Image는 내장 되어 있는 객체
    img.src = "https://codebootcamp.co.kr/images/main/homeImage1.webp"; // <img src="https://codebootcamp.co.kr/images/main/homeImage1.webp">
    img.onload = () => {
      setImageTag(img);
    };
  }, []);

  function onClickButton() {
    divRef.current?.appendChild(imageTag); // appendChild: div ref 태그안에 자식으로 넣겠다 !
  }

  return (
    <>
      <div ref={divRef}></div>
      <button onClick={onClickButton}>이미지 보여주기</button>
    </>
  );
}
