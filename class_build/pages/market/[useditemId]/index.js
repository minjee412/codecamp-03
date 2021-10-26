import Head from "next/head";
import { gql, request } from "graphql-request";

export default function MarketsPage(props) {
  return (
    <>
      <Head>
        <meta property="og:title" content={props.fetchUseditem.nanme} />
        <meta property="og:description" content={props.fetchUseditem.remark} />
        <meta property="og: image" content={props.fetchUseditem.images[0]} />
      </Head>
      <div>마켓페이지입니다 !</div>
    </>
  );
}

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      remark
      images
    }
  }
`;

export const getServerSideProps = async (context) => {
  // 1. graphql 데이터를 요청 한다.
  await request(
    "https://backend03.codebootcamp.co.kr/graphql",
    FETCH_USEDITEM,
    {
      useditemId: context.query.useditemId,
    }
  );

  // 2. 요청 받은 데이터를 페이지로 넘겨준다.
  return {
    props: {
      fetchUseditem: XPathResult.fetchUseditem,
    },
  };
};
