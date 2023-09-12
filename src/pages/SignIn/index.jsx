import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Container, Login, Background } from './styles';
import { FiMail, FiLock } from "react-icons/fi";

export function SignIn() {
  return(
    <Container>
      <Login>
        <h2>RocketMovies</h2>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h3>Faça seu login</h3>

        <Input 
          placeholder="E-mail"
          icon={FiMail}
          type="email"
        />
        
        <Input 
          placeholder="Senha"
          icon={FiLock}
          type="password"
        />

        <Button>
          Entrar
        </Button>

        <ButtonText text="Criar conta"/>
      </Login>

      <Background />
    </Container>
  )
}