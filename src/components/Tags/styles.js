import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  font-size: .75rem;
  padding: 0 1rem;
  height: 24px;
  border-radius: .5rem;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;
