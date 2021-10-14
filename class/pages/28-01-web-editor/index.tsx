import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
// import { Modal } from 'antd';
import { useForm } from "react-hook-form";

// import ReactQuill from "react-quill"; // 프론트 서버에서 그릴 때, document가 없어서 문제가 됨 !!

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function WebEditorPage() {
  const router = useRouter();
  const { handleSubmit, register, setValue, trigger } = useForm({
    mode: "onChange",
  });
  const [createBoard] = useMutation(CREATE_BOARD);

  async function onClickMyButton(data) {
    // console.log(data);

    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      router.push(`/28-02-web-editor-detail/${result.data.createBoard._id}`);
      //   result.data.createBoard._id;
    } catch (error) {
      // Modal.error('')
      console.log(error);
    }

    // finally{}   // finally : 성공했던, 실패했던 무조건 실행하고 끝날때 사용
  }

  function onChnageMyEditor(value) {
    //register에 등록하지 않고, 강제로 값을 넣어주는 기능
    setValue("contents", value === "<p><br></p>" ? "" : value);
    console.log(value);

    // onChange 됐는지 react-hook-form에 알려주는 기능
    trigger("contents");
  }

  return (
    <form onSubmit={handleSubmit(onClickMyButton)}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <ReactQuill onChange={onChnageMyEditor} />
      <br />
      <button type="submit">등록하기</button>
      {/* <button type="reset">리셋하기</button> */}
      {/* 누르면 안에 input들 다 리셋됨 */}
      {/* <button type="button" onClick={onClickMyButton}></button> */}
      {/* onSubmit 외에 나만의 버튼 기능을 만들어서 사용하고 싶을때, type="button" onClick={}을 설정 해준다. */}
    </form>
  );
}
