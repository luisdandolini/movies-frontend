import styled from 'styled-components';

export const Container = styled.div`

`;

export const Header = styled.header`
  width: 100%;
  height: 144px;
  background-color: rgba(255, 133, 155, 0.05);
  display: flex;
  align-items: center;
  padding-left: 9rem;

  .perfil_button {
    margin-top: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .perfil_button {
    width: 340px;
  }
`;

export const Photo = styled.div`
  position: relative;
  margin: -100px auto 32px;
  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;
    
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`;

export const Divider = styled.div`
  height: 1.5rem;
`;