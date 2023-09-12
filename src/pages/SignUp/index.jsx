import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Container, Login, Background } from './styles';
import { FiMail, FiLock, FiArrowLeft, FiUser } from "react-icons/fi";

export function SignUp() {
  return(
    <Container>
      <Login>
        <h2>RocketMovies</h2>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h3>Crie sua conta</h3>

        <Input 
          placeholder="Nome"
          icon={FiUser} 
          type="text"
        />
        
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
          Cadastrar
        </Button>
        
        <ButtonText 
          text="Voltar para o login"
          icon={FiArrowLeft}
        />
      </Login>

      <Background />
    </Container>
  )
}