import { useForm } from "react-hook-form";
import { gql, useApolloClient, useMutation } from "@apollo/client";
import axios from "axios";
import { useContext } from "react";
import { GlobalContext } from "../_app";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

export default function useApolloClientPage() {
  const { setAccessToken, setUserInfo, userInfo } = useContext(GlobalContext);

  const { handleSubmit, register } = useForm();
  const [loginUser] = useMutation(LOGIN_USER);

  const client = useApolloClient();

  //⬇️구지 data가 아니어도 된다 (변수명)
  async function onClickLogin(data) {
    //로그인 처리 하기
    const result = await loginUser({
      variables: {
        email: data.myEmail,
        password: data.myPassword,
      },
    });
    const accessToken = result.data.loginUser.accessToken;

    //accessToken, userInfo 다 같이 넣고 싶을때

    // const result = await axios.get("/koreajson.com"); // client.query와 비교해보기
    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGED_IN,
      //query: FETCH_USER_LOGED_IN, 만 하면 query가 안날아감.
      //why? accessToken이 필요한데 없기 때문에.

      context: {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      },
    });
    const userInfo = resultUserInfo.data.fetchUserLoggedIn;
    setAccessToken(accessToken);
    setUserInfo(userInfo);
  }

  return (
    <>
      {userInfo.email ? (
        `${userInfo.name}님 환영합니다.`
      ) : (
        <form onSubmit={handleSubmit(onClickLogin)}>
          이메일 : <input type="text" {...register("myEmail")} />
          비밀번호: <input type="password" {...register("myPassword")} />
          <button>로그인하기</button>
          {/* 구지 submit을 쓰지 않아도 기본 default 가 submit으로 설정 되어 있다. */}
          {/* <button type="button" onClick={}>
          버튼
        </button> */}
          {/* submit 안시키고 버튼으로 만들고 싶을때 */}
        </form>
      )}
    </>
  );
}
