import styled from "@emotion/styled";
import { useRouter } from "next/dist/client/router";
import LayoutHeader from "./header/LayoutHeader.container";

const Wrapper = styled.div``;

// const Header = styled.div`
//   background-color: coral;
//   height: 100px;
// `;

const Body = styled.div``;

const Footer = styled.div`
  background-color: darkcyan;
  height: 100px;
`;

const Banner = styled.div`
  background-color: pink;
  height: 300px;
`;

const Navigation = styled.div`
  background-color: orange;
  height: 50px;
`;

const BodyWrapper = styled.div`
  /* border: 1px solid black; */
  display: flex;
`;

const Sidebar = styled.div`
  width: 200px;
  background-color: burlywood;
`;

const HIDDEN_FOOTER = ["/12-02-hidden"];

export default function Layout(props) {
  const router = useRouter();
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.pathname);

  return (
    <Wrapper>
      {/* <Header>여기는 헤더 영역입니다.</Header> */}
      <LayoutHeader />
      <Banner>여기는 배너 영역입니다.</Banner>
      <Navigation>여기는 네비게이션 영역입니다.</Navigation>
      <BodyWrapper>
        <Sidebar>여기는 사이드바 영역입니다.</Sidebar>
        <Body>{props.children}</Body>
      </BodyWrapper>
      {!isHiddenFooter && <Footer>여기는 푸터 영역 입니다.</Footer>}
    </Wrapper>
  );
}
