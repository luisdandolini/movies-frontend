import PropTypes from 'prop-types';
import { FiPlus, FiX } from 'react-icons/fi';
import { Container } from './styles';

export function NewMovie({ isNew, value, onClick, ...rest }) {
  return(
    <Container isNew={isNew}>
      <input 
        type='text'
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button
        type='button'
        onClick={onClick}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        { isNew ? <FiPlus /> : <FiX /> }
      </button>
    </Container>
  )
}

NewMovie.propTypes = {
  isNew: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
};