import React, {useState} from 'react';
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
  onDelete?: any;
  onEdit?: any;
  id: string;
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

const Log = ({title, content, highlight, onDelete, onEdit, id}: logTypes) => {
  const [loading, setLoading] = useState(false);
  return (
    <Container style={{opacity: loading ? 0.2 : 1}}>
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
          onPress={() => {
            setLoading(true);
            onDelete(id);
            setLoading(false);
          }}
        />
        <Button
          type="leanPrimary"
          text="Editar"
          textStyle={buttonFontStyle}
          buttonStyle={buttonStyle}
          onPress={onEdit}
        />
      </Footer>
    </Container>
  );
};

export default Log;
