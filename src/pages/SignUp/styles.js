import styled from 'styled-components';
import background from '../../assets/bg.png';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Login = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 8rem;

  > h2 {
    font-size: 3rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > span {
    font-size: .875rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-bottom: 3rem;
  }

  > h3 {
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }
`;

export const Background = styled.div`
  flex: 1;
  height: 100vh;
  background: url(${background}) no-repeat center center;
  background-size: cover;
  opacity: .8;
`;