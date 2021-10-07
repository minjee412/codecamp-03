import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenapiWithUseEffectPage() {
  const [dogImage, setDogImage] = useState("");

  useEffect(() => {
    async function getImage() {
      const image = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogImage(image.data.message);
      console.log(image.data);
    }
    getImage();
  }, []);

  return (
    <>
      <div>오픈API</div>
      <img src={dogImage}></img>
    </>
  );
}
