import PropTypes from 'prop-types';
import { Container } from './styles';

export function Button({ children }) {
  return(
    <Container>
      {children}
    </Container>
  )
}

Button.propTypes = {
  children: PropTypes.node,
};