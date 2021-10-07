import { withAuth } from "../../src/commons/hocs/withAuth";

const HocPage = () => {
  return <div>HOC 연습 페이지 입니다 !!</div>;
};

export default withAuth(HocPage);
