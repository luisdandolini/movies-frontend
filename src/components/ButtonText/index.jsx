import PropTypes from 'prop-types';
import { Container } from './styles';

export function ButtonText({ text }) {
  return(
    <Container>
      { text }
    </Container>
  )
}

ButtonText.propTypes = {
  text: PropTypes.string,
};