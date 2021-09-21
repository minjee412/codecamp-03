import { Calendar } from "antd";
import styled from "@emotion/styled";
import { useState } from "react";

const MyCalendar = styled(Calendar)`
  width: 300px;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
`;

export default function CalenderPage() {
  const [data, setData] = useState("");

  function onSelect(value) {
    setData(value.format("YYYY-MM-DD"));
  }

  return (
    <div>
      <MyCalendar fullscreen={false} onSelect={onSelect} />
      <div>{data}</div>
    </div>
  );
}
