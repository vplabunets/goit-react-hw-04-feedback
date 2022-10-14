import styled from 'styled-components';

export const OptionsWrap = styled.div`
  display: flex;
  width: 300px;
  align-items: center;
  justify-content: center;

  justify-content: space-between;
  padding: 20px;
`;
export const OptionsButton = styled.button`
  width: 80px;
  color: rebeccapurple;
  text-transform: capitalize;
  &:hover,
  &:focus {
    background-color: #914cd6;
  }
`;
