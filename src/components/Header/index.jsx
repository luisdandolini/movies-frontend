import { Container, Profile } from './styles';
import { Input } from '../Input';

export function Header() {
  return(
    <Container>
      <a href="/">
        RocketMovies
      </a>
      
      <Input 
        placeholder="Pesquisar pelo título"
        className="header_input"
      />

      <Profile>
        <div className="container_profile">
          <p>Rodrigo Gonçalves</p>
          <span>sair</span>
        </div>
        <img src="https://github.com/luisdandolini.png" alt="Foto de perfil" />
      </Profile>
    </Container>
  )
}