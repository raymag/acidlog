import React from 'react';
import {
  Container,
  Body,
  LeftSide,
  RightSide,
  Title,
  Content,
  Footer,
  SmallButton,
  Highlight,
  HighlightText,
} from './styles';

type logTypes = {
  title: string;
  content: string;
  highlight: string;
};
const Log = ({title, content, highlight}: logTypes) => {
  return (
    <Container>
      <Body>
        <LeftSide>
          <Highlight>
            <HighlightText>{highlight}</HighlightText>
          </Highlight>
        </LeftSide>
        <RightSide>
          <Title>{title}</Title>
          <Content>{content}</Content>
        </RightSide>
      </Body>
      <Footer>
        <SmallButton>Apagar</SmallButton>
        <SmallButton>Editar</SmallButton>
      </Footer>
    </Container>
  );
};

export default Log;
