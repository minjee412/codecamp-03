import { Component, createRef } from "react";
import Router from "next/router";

interface IState {
  count: number;
}

// 상속
export default class ClassComponentLifeCyclePage extends Component {
  //createRef : reactd에서 제공 해주고 있는 기능
  inputRef = createRef<HTMLInputElement>();

  state = {
    count: 0,
  };

  componentDidMount = () => {
    // 컴포넌트가 Mount(그려지고) 난 이후에
    console.log("컴포넌트 마운트 완료 !");
    this.inputRef.current.focus();
    // this.inputRef.current: inputRef 태그를 선택한것.
  };

  componentDidUpdate = () => {
    console.log("컴포넌트 수정 완료 !");
  };
  componentWillUnmount = () => {
    //   현재 컴포넌트가 사라질때의 액션 (예, 채팅방 나갈때)
    console.log("잘가요~~");
  };

  onClickCount = () => {
    // setState를 선언 한적은 없지만 extends Componet를 해왔기때문에 setState기능 사용 가능

    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  };

  onClickMove = () => {
    Router.push("/");
  };

  render() {
    return (
      <>
        {/*        ⬇️ state 넣어주기, this는 현재 class를 의미 한다        */}
        현재카운트: {this.state.count}
        <br />
        <button onClick={this.onClickCount}>카운트 증가!!</button>
        <button onClick={this.onClickMove}>페이지 이동하기</button>
        <input type="text" ref={this.inputRef} />
      </>
    );
  }
}
