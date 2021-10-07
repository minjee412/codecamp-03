// import "../styles/globals.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { Global } from "@emotion/react";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { initializeApp } from "firebase/app";
import { createUploadLink } from "apollo-upload-client";
import "antd/dist/antd.css";
import { createContext, useEffect, useState } from "react";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyBsC-2VfHeeCKXebzgSI-Tw0SJHUDytrOo",
  authDomain: "aprilpark-2f994.firebaseapp.com",
  projectId: "aprilpark-2f994",
  storageBucket: "aprilpark-2f994.appspot.com",
  messagingSenderId: "692955499694",
  appId: "1:692955499694:web:5e3ffdddb6fdd29c95713f",
  measurementId: "G-VMLER3ZGWP",
});

export const GlobalContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken") || "";
    setAccessToken(accessToken);
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend03.codebootcamp.co.kr/graphql",

    //http hearders request 할때 프론트 엔트에서 받은
    headers: { authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <GlobalContext.Provider value={value}>
      <Global styles={globalStyles} />
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
