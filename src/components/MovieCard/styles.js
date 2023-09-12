import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: rgba(255, 133, 155, 0.05); 
  height: 222px;
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 1.5rem;

  > h1 {
    font-size: 1.5rem;
  }

  > p {
    overflow: hidden;
    text-overflow: ellipsis; 
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical; 

    color: ${({ theme }) => theme.COLORS.GRAY_200};
    margin-top: 1rem;
  }
`;

export const ContentStar = styled.div`
  display: flex;
  align-items: center;
  gap: .4rem;
`;

export const ContainerTags = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;