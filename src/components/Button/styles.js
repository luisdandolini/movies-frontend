import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 1.5rem;
`;