import { Rate } from "antd";
import { useState } from "react";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

export default function StarRatePage() {
  const [value, setValue] = useState(0);

  const handleChange = (value) => {
    setValue(value);
    alert(desc[value - 1]);
    alert(value + "점");
  };

  return (
    <span>
      <Rate tooltips={desc} onChange={handleChange} value={value} />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""}
      <div>{value}점</div>
    </span>
  );
}
