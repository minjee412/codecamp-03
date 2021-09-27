// console.log("Hello World");
import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import Board from "./Board.postgres";

//playground
const typeDefs = gql`
  input CreateBoardInput {
    writer: String
    title: String
    age: Int
  }

  type Return {
    message: String
    number: Int
  }

  type Board {
    number: Int
    writer: String
    title: String
    age: Int
  }

  type Query {
    fetchBoard: Board
    fetchBoards: [Board] #배열로 감싼 객체로 받는다 !
  }
  type Mutation {
    # 주석입니다 createBoard(writer: String, title: String, age: Int): Return
    createBoard(createBoardInput: CreateBoardInput): Return
    updateBoard: Return
    deleteBoard: Return
  }
`;

//실제 실행 되는 함수가 들어 가는 공간
const resolvers = {
  Query: {
    fetchBoard: async () => {
      //  데이터베이스에서 해당하는 데이터 꺼내서 브라우저에 던져주기 (응답주기)

      const result = await Board.findOne({
        where: { number: 1, deletedAt: null },
      }); //데이터 베이스에서 찾아와줘 !

      return result;

      // return {
      //   writer: result?.writer,
      //   title: result?.title,
      //   age: result?.age,
      // }; // writer, title, age가 들어가 있는 객체가 되었다.
    },
    // fetchBoards로 불러오기
    fetchBoards: async () => {
      const result = await Board.find({ where: { deletedAt: null } }); // [{} {} {}](배열)에 담겨져서 나온다.
      return result;
    },
  },
  Mutation: {
    createBoard: async (_: any, args: any) => {
      // 데이터베이스에 데이터 입력하기

      // const result = await Board.insert({
      //   title: args.title,
      //   writer: args.writer,
      //   age: args.age,
      // }); // 이 내용은 backend로 들어 간다.

      const result = await Board.insert({
        ...args.createBoardInput,
        // ⬆️아래 내용을 스프레드 연산자로 쓸 수 있다 ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
        // title: args.createBoardInput.title,
        // writer: args.createBoardInput.writer,
        // age: args.createBoardInput.age,
      }); // 이 내용은 database로 들어 간다.

      console.log(result);
      return { message: "성공했습니다.", number: result.identifiers[0].number };
    },

    updateBoard: async (_: any, args: any) => {
      await Board.update({ number: 3 }, { writer: "영희" }); //({}, {})에서 앞에 {}는 조건, 두번째 {}는 변경할 값
      return { message: "수정완료" };
    },

    // 중요한 내용이 삭제 되면 안되기 때문에, 아래 처럼 delete시키기 보다는
    // deletedAt 이라는 걸 만들어서,
    // 우리 눈에는 삭제 된거 처럼 보이지만, 사실은 숨기기 기능으로 안보이게 만들어야 한다.
    deleteBoard: async () => {
      // await Board.delete({ number: 4 });
      await Board.update({ number: 5 }, { deletedAt: new Date() });
      return { message: "삭제 완료" };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

createConnection({
  type: "postgres",
  database: "postgres",
  username: "postgres",
  password: "postgres2021",
  port: 5012,
  host: "34.64.221.225",
  entities: [__dirname + "/*.postgres.ts"], // postgres.ts로 끝나는 모든 파일이 테이블이야 !
  logging: true,
  synchronize: true,
})
  .then(() => {
    //연결에 성공 했을때 실행
    console.log("접속완료!!");
    server.listen({ port: 4000 }); // 서버를 기다리겠다.
  })
  .catch((error) => {
    console.log(error);
  });
