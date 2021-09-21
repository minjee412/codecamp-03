import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      number
      message
    }
  }
`;
//04-04-graphql-mutation-board3과 비교 하면서 학습 하기
export default function GraphqlMutationBoard3Page() {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [myInputs, setMyInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });
  // const [myWriter, setMyWriter] = useState("");
  // const [myTitle, setMyTitle] = useState("");
  // const [myContents, setMyContents] = useState("");

  function onChangeMyInputs(event) {
    setMyInputs({
      ...myInputs,
      // writer: myInputs.writer (기존값)
      // title: myInputs.title (기존값)
      // contents: myInputs.contents (기존값)
      [event.target.name]: event.target.value,
    });
  }

  async function aaa() {
    const result = await createBoard({
      variables: { ...myInputs },
    });
    console.log(result);
    console.log(result.data.createBoard.number);
  }

  return (
    <>
      작성자: <input type="text" name="writer" onChange={onChangeMyInputs} />
      <br />
      제목: <input type="text" name="title" onChange={onChangeMyInputs} />
      <br />
      내용: <input type="text" name="contents" onChange={onChangeMyInputs} />
      <br />
      <button onClick={aaa}>GRAPHQL-API 요청하기!!!</button>
    </>
  );
}
