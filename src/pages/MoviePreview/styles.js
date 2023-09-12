import styled from 'styled-components';

export const Container = styled.main`
  padding: 10rem 5rem 0 5rem;
  max-height: 100vh;
  overflow-y: auto;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  gap: .5rem;

  > h1 {
    margin-right: 1.5rem;
  }
`;

export const Person = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  > img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const ContainerTags = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0 2.5rem 0;
`;