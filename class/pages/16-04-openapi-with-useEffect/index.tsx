import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenapiWithUseEffectPage() {
  const [catImage, setCatImage] = useState("");

  useEffect(() => {
    async function getImage() {
      const image = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );
      setCatImage(image.data[0].url);

      // data로 뭘 받아 오고 싶은지 알고 싶을때는 console.log로 data 를 찍어 보자 !!
      console.log(image.data);
    }
    getImage();
  }, []);

  return (
    <>
      <div>오픈API</div>
      {/* <div>{catImage}</div> */}
      <img src={catImage}></img>
    </>
  );
}
