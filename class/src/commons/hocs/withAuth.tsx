import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../pages/_app";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    //accessToken이 있는가 ?!
    //accessToken이 없다면, login 페이지로 보내기 !!
    if (!accessToken) {
      alert("로그인 한 사람만 입장 가능 합니다.");
      router.push("/23-01-login");
    } // 에러 발생 (=> useEffect사용. useEffect는 브라우저에서 읽기 때문에)
  }, []);

  return <Component {...props} />;
};
