import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [loginUser] = useMutation(LOGIN_USER);

  const [myInputs, setMyInputs] = useState({
    email: "",
    password: "",
  });

  function onChangeMyInput(event) {
    setMyInputs({
      ...myInputs,
      [event.target.name]: event.target.value,
    });
  }

  async function onClickLogin() {
    const result = await loginUser({
      variables: {
        ...myInputs,
      },
    });
    console.log(result.data?.loginUser.accessToken);
  }

  return (
    <>
      이메일: <input type="text" name="email" onChange={onChangeMyInput} />
      <br />
      비밀번호:
      <input type="password" name="password" onChange={onChangeMyInput} />
      <br />
      <button onClick={onClickLogin}>로그인 하기</button>
    </>
  );
}
