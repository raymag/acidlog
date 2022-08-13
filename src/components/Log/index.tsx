import React from 'react';
import Button from '../Button';
import {
  Container,
  Body,
  LeftSide,
  RightSide,
  Title,
  Content,
  Footer,
  Highlight,
  HighlightText,
} from './styles';

type logTypes = {
  title: string;
  content: string;
  highlight: string;
};

const buttonStyle = {
  paddingLeft: 5,
  paddingRight: 5,
  paddingTop: 2,
  paddingBottom: 2,
  borderWidth: 1,
  marginLeft: 5,
  marginTop: 0,
  marginBottom: 0,
};
const buttonFontStyle = {
  fontSize: 12,
  padding: 0,
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
        <Button
          type="leanAccent"
          text="Apagar"
          textStyle={buttonFontStyle}
          buttonStyle={buttonStyle}
        />
        <Button
          type="leanPrimary"
          text="Editar"
          textStyle={buttonFontStyle}
          buttonStyle={buttonStyle}
        />
      </Footer>
    </Container>
  );
};

export default Log;
