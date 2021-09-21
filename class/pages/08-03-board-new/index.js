import BoardWrite from "../../src/components/units/board/write/BoardWrite.container";

export default function BoardNewPage() {
  return <BoardWrite isEdit={false} />;
  // 구지 안줘도 undifined(기본false 값)으로 넘어간다.
}
