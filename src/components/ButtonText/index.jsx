import PropTypes from 'prop-types';
import { Container } from './styles';

export function ButtonText({ text, icon: Icon, className }) {
  return(
    <Container className={className}>
      {Icon && <Icon size={20} />}
      { text }
    </Container>
  )
}

ButtonText.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
};