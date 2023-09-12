import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0; 
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1.875rem 0;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  border-bottom: .2px solid ${({ theme }) => theme.COLORS.GRAY_200};
  z-index: 999; 

  > a {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-weight: 700;
  }

  .header_input {
    width: 630px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  .container_profile {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: .8rem;
  }

  .container_profile p {
    font-weight: 700;
    font-size: .875rem;
  }

  .container_profile span {
    font-size: .875rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
`;