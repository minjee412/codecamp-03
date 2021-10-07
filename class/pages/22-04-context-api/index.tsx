import { createContext } from "react";
import MyBoardWrite from "../../src/components/units/22-context.api/MyBoardWrite.container";

export const MyContext = createContext(null); // null 자리는 초기값 적는 곳
export default function ContextApiPage() {
  const value = {
    isEdit: true,
  };

  return (
    <MyContext.Provider value={value}>
      <MyBoardWrite />
    </MyContext.Provider>
  );
}
