import { Rate } from "antd";
import { useState } from "react";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

export default function LibraryStarPage() {
  const [value, setValue] = useState(0);

  //   const aaa = 3;

  const handleChange = (value) => {
    // console.log(aaa); // 본인과 가장 가까운 {}를 찾고 그 안에 값이 없으면 그 다음 가까운 {}에서 값을 찾는다

    setValue(value);
  };

  return (
    <span>
      <Rate onChange={handleChange} value={value} />
      {/* ant디자인에서 <>안에 value가 들어오도록 해놨기 때문에 onChange 할때 (event)를 쓰지 않는다 */}
      {/* <Rate tooltips={desc} onChange={handleChange} value={value} />
            {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''} */}
    </span>
  );
}
