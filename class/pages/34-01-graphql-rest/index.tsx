import axios from "axios";

export default function GraphqlRestPage() {
  const onClickRequest = async () => {
    // 데이터를 항상 첨부 시켜서 보내기 때문에 post로 사용한다.
    // graphql은 graphql 이라는 엔드 포인트가 하나에 모든것이 들어가 있기 때문에 POST로 쓴다.
    const result = await axios.post(
      "https://backend03.codebootcamp.co.kr/graphql",
      {
        query: `
                mutation createBoard{ 
                    createBoard(
                        createBoardInput:{
                            writer: "민지"
                            password: "1234"
                            title: "제목"
                            contents: "내용"
                        }
                    ){
                        _id
                        writer
                    }
                }
            `,
      }
    );
    console.log(result);
  };

  return (
    <button onClick={onClickRequest}>
      클릭해서 Graphql을 Axios로 요청하기
    </button>
  );
}
