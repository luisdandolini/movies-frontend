import styled from 'styled-components';

export const Container = styled.div`
  /* width: 100%; */
  display: flex;
  align-items: center;
  position: relative; 

  > input {
    width: 340px;
    height: 56px;
    border-radius: 10px;
    border: none;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    margin-bottom: .5rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    padding-left: 3.5rem; 
    padding-bottom: .2rem;

    &::placeholder {
      margin-left: 2rem;
    }
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    margin-left: 16px;
    position: absolute; 
    left: 8px; 
    bottom: 28px;
  }
`;
