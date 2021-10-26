import Head from "next/head";

export default function BoardPage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="나의 사이트 게시판 페이지" />
        <meta property="og:description" content="환영합니다!" />
        <meta
          property="og:image"
          content="https://cdn.pixabay.com/photo/2021/10/23/16/31/italy-6735340_1280.jpg"
        />
      </Head>
      <div>게시판 입니다.</div>
    </>
  );
}
