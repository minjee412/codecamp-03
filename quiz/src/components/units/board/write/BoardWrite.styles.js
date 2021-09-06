import styled from '@emotion/styled';

export const MyButton = styled.button`
    background-color : ${(props) => (props.write === true ? 'pink' : 'grey')};
    color : ${(props) => (props.write === true ? 'black' : 'blue')};
`