import { gql, useMutation, useQuery } from "@apollo/client";
import Password from "antd/lib/input/Password";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ApolloCacheStatePage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickDelete = (boardId) => async () => {
    // boardId
    await deleteBoard({
      variables: {
        boardId: boardId,
      },
      update(cache, { data }) {
        const deletedId = data.deleteBoard;

        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              // 1. 기존의 fetchBoards 10개에서 지금 삭제된 아이디를 제외한 9개를 만들고
              // 2. 그렇게 만들어진 9개의 새로운 fetchBoards를 return(=덮어씌운다)하여, 덮어씌우기
              const newFetchBoards = prev.filter(
                (el) => readField("_id", el) !== deletedId
              );

              return [...newFetchBoards];
            },
          },
        });
      },
    });
  };

  const onClickCreate = () => {
    createBoard({
      variables: {
        createBoardInput: {
          writer: "민지",
          password: "0412",
          title: "게시물",
          contents: "게시물 입니다.",
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              // 추가 된 createBoard 결과물과 이전의 10개를 합쳐서 11개를 돌려주기
              return [data.createBoard, ...prev]; // >> 이렇게 쓰면 내 글이 앞에 붙는다.
              //   return [...prev, data.createBoard]; // >> 이렇게 쓰면 내 글이 뒤에 붙는다.
            },
          },
        });
      },
    });
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickCreate}>등록하기</button>
    </>
  );
}
