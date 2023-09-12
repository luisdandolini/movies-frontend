import styled from 'styled-components';

export const Container = styled.button`
  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 1rem;
  background-color: transparent;
  border: none;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem
`;
