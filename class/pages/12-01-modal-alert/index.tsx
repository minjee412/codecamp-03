export default function ModalAlertPage() {
  function onClickSuccess() {
    try {
      alert("게시물 등록에 성공 했습니다.");
    } catch (error) {
      alert("게시물 등록에 실패 했습니다.");
    }
  }

  function onClickFail() {
    try {
      //   alert("게시물 등록에 성공 했습니다.");
      throw new Error("강제로 에러 발생 시키기!!!"); // 새로운 에러를 던진다. 던진 에러는 catch안으로 들어 간다.
    } catch (error) {
      //   alert("게시물 등록에 실패 했습니다.");
      alert(error.message);
    }
  }

  return (
    <>
      <button onClick={onClickSuccess}>알림창 (성공했을때)</button>
      <button onClick={onClickFail}>알림창 (실패했을때)</button>
    </>
  );
}
