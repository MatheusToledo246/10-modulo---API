import { Container, Links, Content } from './style';

import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';




export function Details(){

  return(
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Perspiciatis non nostrum nobis amet velit, 
            corporis sequi eligendi, earum debitis cumque ducimus, 
            neque vitae recusandae. Facere labore repudiandae ad 
            illum magni?
          </p>
          <Section title="Links úteis">
          <Links>
            <li><a href="#">https://www.rocketseat.com.br/</a></li>
            <li><a href="#">https://www.rocketseat.com.br/</a></li>
          </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node.js" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}