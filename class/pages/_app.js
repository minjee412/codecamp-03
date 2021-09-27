// import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Global } from "@emotion/react";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { initializeApp } from "firebase/app";
import "antd/dist/antd.css";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyBsC-2VfHeeCKXebzgSI-Tw0SJHUDytrOo",
  authDomain: "aprilpark-2f994.firebaseapp.com",
  projectId: "aprilpark-2f994",
  storageBucket: "aprilpark-2f994.appspot.com",
  messagingSenderId: "692955499694",
  appId: "1:692955499694:web:5e3ffdddb6fdd29c95713f",
  measurementId: "G-VMLER3ZGWP",
});

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
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
