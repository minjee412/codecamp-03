import { useState } from "react";
import { Modal, Button } from "antd";

export default function ModalBasicPage() {
  const [isModalVisible, setIsModalVisible] = useState(false); // 누르기 전에는 기본적으로 false 이기 때문에 안보임
  const [myPassword, setMyPassword] = useState("");

  function onChangeMyPassword(event) {
    setMyPassword(event.target.value);
  }

  const showModal = () => {
    setIsModalVisible(true); // 눌렀을때 true면 켜지고 false면 꺼진다
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button onClick={showModal}>모달창 열기</Button>
      <Modal visible={isModalVisible} onCancel={closeModal}>
        비밀번호 입력 : <input type="password" onChange={onChangeMyPassword} />
      </Modal>
    </>
  );
}
