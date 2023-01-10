import styled from 'styled-components';

export const BtnFeedback = styled.button`
  background-color: #dadbe8;
  padding: 5px;
  border-radius: 10%;
  margin: 5px;
  &::first-letter {
    text-transform: uppercase;
  }
  cursor: pointer;
  :hover {
    background-color: rgb(85, 212, 176);
  }
  :active {
    transform: translateY(3px);
  }
`;
