import PropTypes from 'prop-types';
import { Container } from './styles';
import isStar from '../../assets/star.png'; 
import NoStar from '../../assets/no-star.png';

export function Star({ isActive = true }) {
  return(
    <Container>
      { isActive ? <img src={isStar} alt="Nota Ativa" /> : <img src={NoStar} alt="Nota Desativada" />}
    </Container>
  )
}

Star.propTypes = {
  isActive: PropTypes.bool,
};