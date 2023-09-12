import PropTypes from 'prop-types';
import { Container } from './styles';

export function Tags({ title }) {
  return(
    <Container>
      { title }
    </Container>
  )
}

Tags.propTypes = {
  title: PropTypes.string,
};