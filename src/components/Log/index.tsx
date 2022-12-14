import React, {useState} from 'react';
import Button from '../Button';
import {useNavigation} from '@react-navigation/native';
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
  Time,
} from './styles';

type logTypes = {
  title: string;
  content: string;
  highlight: string;
  onDelete?: any;
  onEdit?: any;
  id: string;
  light?: boolean;
  createdAt: string;
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
  minWidth: 60,
};
const buttonFontStyle = {
  fontSize: 12,
  padding: 0,
};

const Log = ({
  title,
  content,
  highlight,
  onDelete,
  onEdit,
  id,
  light,
  createdAt,
}: logTypes) => {
  const [loading, setLoading] = useState(false);
  const {navigate} = useNavigation<any>();
  const summary =
    content.length > 100 ? content.slice(0, 100).trim() + '...' : content;
  const date = new Date(parseInt(createdAt));
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return (
    <Container style={{opacity: loading ? 0.2 : 1}} light={light}>
      <Time light={light}>
        {hours.toString().length === 1 ? '0' + hours.toString() : hours}:
        {minutes.toString().length === 1 ? '0' + minutes.toString() : minutes}
      </Time>
      <Body>
        <LeftSide>
          <Highlight>
            <HighlightText>{highlight}</HighlightText>
          </Highlight>
        </LeftSide>
        <RightSide>
          <Title>{title}</Title>
          <Content light={light}>{summary}</Content>
        </RightSide>
      </Body>
      <Footer>
        <Button
          type={light ? 'accent' : 'leanAccent'}
          text="Apagar"
          textStyle={buttonFontStyle}
          buttonStyle={buttonStyle}
          onPress={() => {
            setLoading(true);
            onDelete(id);
            setLoading(false);
          }}
        />
        {/* <Button
          type="leanPrimary"
          text="Editar"
          textStyle={buttonFontStyle}
          buttonStyle={buttonStyle}
          onPress={onEdit}
        /> */}
        <Button
          type={light ? 'dark' : 'leanPrimary'}
          text="Ver"
          textStyle={buttonFontStyle}
          buttonStyle={buttonStyle}
          onPress={() => navigate('Read', {id})}
        />
      </Footer>
    </Container>
  );
};

export default Log;
