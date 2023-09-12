import { Fragment } from 'react';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';
import { Form, Container, Section, ContainerButtons } from './styles';
import { FiArrowLeft } from "react-icons/fi";
import { NewMovie } from '../../components/NewMovie';


export function CreateMovie() {
  return(
    <Fragment>
      <Header />

      <Form>
        <ButtonText 
          text="Voltar"
          icon={FiArrowLeft}
          className="perfil_button"
        />

        <h1>Novo filme</h1>

        <Container>
          <Input 
            placeholder="Título"
            className="create_input"
          />

          <Input 
            placeholder="sua nota (de 0 a 5)"
            className="create_input"
          />
        </Container>

        <Textarea 
          placeholder="Observações"
        />

        <h2>Marcadores</h2>

        <Section>
          <NewMovie 
            isNew={false}
            placeholder="React"
          />
          <NewMovie 
            isNew
            placeholder="Nova tag"
          />
        </Section>

        <ContainerButtons>
          <Button
            className="delete_movie"
          >
            Excluir filme
          </Button>

          <Button>
            Salvar alterações
          </Button>
        </ContainerButtons>

      </Form>
    </Fragment>
  )
}