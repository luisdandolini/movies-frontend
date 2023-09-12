import PropTypes from 'prop-types';
import { Container } from './styles';

export function ButtonText({ text, icon: Icon }) {
  return(
    <Container>
      {Icon && <Icon size={20} />}
      { text }
    </Container>
  )
}

ButtonText.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
};