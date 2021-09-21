import { Modal } from "antd";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

export default function ModalAddressPrevPage() {
  const [myZipcode, setMyZipcode] = useState("");
  const [myAddress, setMyAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleComplete = (data) => {
    setMyZipcode(data.zonecode);
    setMyAddress(data.address);
    console.log(data.zonecode);
    console.log(data.address);

    setIsOpen((prev) => !prev);
  };

  // function onOpenZipcode() {
  //   setIsOpen((prev) => !prev);
  // }

  // function onCloseZipcode() {
  //   setIsOpen((prev) => !prev);
  //   // ! 는 반대값을 의미 한다
  // }

  //  ⬇️ prev를 통해 코드 간단한게 줄이기
  function onToggleZipcode() {
    setIsOpen((prev) => !prev);
    // toggle : 껐다 켰다 하는 것
  }

  return (
    <>
      <button onClick={onToggleZipcode}>우편번호 검색</button>
      {isOpen && (
        <Modal visible={true} onCancel={onToggleZipcode}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
      {/* isOpen && 을 붙이면 값이 바뀔때 마다 페이지를 아예 새로 그리기 때문에 이전에 선택 했던 값이 초기화 됨 */}
    </>
  );
}
