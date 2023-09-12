import styled from 'styled-components';

export const Form = styled.form`
  padding: 10rem 5rem 0 5rem;
  max-height: 100vh;
  overflow-y: auto;

  > h1 {
    margin: 1.5rem 0 2.5rem 0;
  }

  > h2 {
    margin: 2.5rem 0 1.5rem 0;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: 1.25rem;
    font-weight: 500;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .create_input {
    width: 620px;
    padding-left: 2rem;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  border-radius: 1rem;
  padding: 1rem;
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin-top: 2rem;
  padding-bottom: 5rem;

  .delete_movie {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    color: ${({ theme }) => theme.COLORS.PINK};
}
`;