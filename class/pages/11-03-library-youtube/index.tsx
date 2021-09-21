import ReactPlayer from "react-player";
import styled from "@emotion/styled";

const MyYoutube = styled(ReactPlayer)`
  border: 3px solid yellow;
  background-size: 200px 200px;
  margin-left: 100px;
`;

export default function YoutubePage() {
  return (
    <div>
      <MyYoutube
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width={500}
        height={300}
        controls={true}
        playing={true} 
        // autoplay 기능
      />
      {/* 사이즈는 url에 직접 넣어줘야 한다 */}
    </div>
  );
}
