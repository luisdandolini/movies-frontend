import PropTypes from 'prop-types';
import { Star } from '../Star';
import { Tags } from '../Tags';
import { Container, ContentStar, ContainerTags } from './styles';

export function MovieCard( { title, content }) {
  return(
    <Container>
      <h1>{title}</h1>
      
      <ContentStar>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </ContentStar>
      
      <p>
        {content}
      </p>

      <ContainerTags>
        <Tags 
          title="Ficção Científica"
        />
        <Tags 
          title="Drama"
        />
      </ContainerTags>
    </Container>
  )
}

MovieCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};