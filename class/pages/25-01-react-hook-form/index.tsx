import { useForm } from "react-hook-form";

export default function ReactHookFormPage() {
  const { handleSubmit, register } = useForm();

  function onClickLogin(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onClickLogin)}>
      <div>리액트 훅 폼 연습 !!</div>
      이름: <input type="text" {...register("myName")} />
      <br />
      휴대폰번호: <input type="text" {...register("myPhone")} />
      <br />
      이메일: <input type="text" {...register("myEmail")} />
      <br />
      <br />
      비밀번호: <input type="password" {...register("myPassword")} />
      <br />
      <button type="submit">로그인 하기</button>
    </form>
  );
}
