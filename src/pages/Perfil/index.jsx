import { ButtonText } from '../../components/ButtonText';
import { Container, Header, Form, Photo, Divider } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

export function Perfil() {
  return(
    <Container>
      <Header>
        <ButtonText 
          text="Voltar"
          icon={FiArrowLeft}
          className="perfil_button"
        />
      </Header>

      <Form>
        <Photo>
          <img src="https://github.com/luisdandolini.png" alt="" />
          <label htmlFor="avatar">
            <FiCamera />

            <input 
              id="avatar"
              type="file"
            />
          </label>
        </Photo>

        <Input 
          placeholder="Luís Fernando Dandolini Duarte"
          icon={FiUser}
          type="text"
        />

        <Input 
          placeholder="luisdandolini@email.com"
          icon={FiMail}
          type="email"
        />

        <Divider></Divider>

        <Input 
          placeholder="Senha atual"
          icon={FiLock}
          type="password"
        />

        <Input 
          placeholder="Nova senha"
          icon={FiLock}
          type="password"
        />

        <Button className="perfil_button"> 
          Salvar
        </Button>
      </Form>
    </Container>
  )
}