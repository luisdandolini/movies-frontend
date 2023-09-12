import PropTypes from 'prop-types';
import { Container } from './styles';

export function Button({ icon: Icon, children, className }) {
  return(
    <Container className={className}>
      {Icon && <Icon size={20} />}
      {children}
    </Container>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.string,
};