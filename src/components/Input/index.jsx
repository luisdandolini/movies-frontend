import PropTypes from 'prop-types';
import { Container } from './styles';

export function Input({ icon: Icon, className, ...rest }) {
  return(
    <Container>
      
      {Icon && <Icon size={20} />}
      <input {...rest} className={className}/>

    </Container>
  )
}

Input.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string
};