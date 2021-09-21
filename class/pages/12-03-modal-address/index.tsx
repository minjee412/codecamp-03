import { Modal } from "antd";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

export default function ModalAddressPage() {
  const [myZipcode, setMyZipcode] = useState("");
  const [myAddress, setMyAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleComplete = (data) => {
    setMyZipcode(data.zonecode);
    setMyAddress(data.address);
    console.log(data.zonecode);
    console.log(data.address);

    setIsOpen(false);
  };

  function onCloseZipcode() {
    setIsOpen(false);
  }

  function onOpenZipcode() {
    setIsOpen(true);
  }

  return (
    <>
      <button onClick={onOpenZipcode}>우편번호 검색</button>
      {isOpen && (
        <Modal visible={true} onCancel={onCloseZipcode}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
      {/* isOpen && 을 붙이면 값이 바뀔때 마다 페이지를 아예 새로 그리기 때문에 이전에 선택 했던 값이 초기화 됨 */}
    </>
  );
}
