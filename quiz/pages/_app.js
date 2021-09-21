// import "../styles/globals.css";
import "antd/dist/antd.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
// layout폴더 안에 바로 index 파일이 있기 때문에, 따로 파일명까지 경로 처리 하지 않아도 된다.
import { globalStyles } from "../src/commons/styles/globalStyles";

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <Global styles={globalStyles} />
      <ApolloProvider client={client}>
        <Layout>
          {/* 모든 페이지에 동일하게 쓰이기 때문에 src폴더 >> component폴더 >> commons폴더 >> layout폴더 >> index.tsx */}
          <Component {...pageProps} />
          {/* 모든 페이지 */}
        </Layout>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
