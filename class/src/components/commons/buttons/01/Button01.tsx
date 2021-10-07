import styled from "@emotion/styled";
import { IProps } from "../../../units/25-04-react-hook-form/Myform.types";

const MyButton = styled.button`
  background-color: ${(props: IProps) => (props.isValid ? "pink" : "grey")};
`;

export default function Button01(props) {
  return (
    <MyButton type={props.type} onClick={props.onClick} isValid={props.isValid}>
      {props.name}
    </MyButton>
  );
}
