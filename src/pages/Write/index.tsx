import React, {useState} from 'react';
import {Container, Title, Subtitle, LogTextArea, Wrapper, Box} from './styles';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import {useNavigation} from '@react-navigation/native';
import uuid from 'react-native-uuid';
import logService, {LogType} from '../../services/log';

const Write = () => {
  const [content, setContent] = useState<string>('');
  const {goBack, navigate} = useNavigation<any>();
  const buttonStyle = {
    marginTop: 5,
    marginBottom: 0,
  };

  const days = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  const date = new Date();
  const title = `${date.getDate()} de ${
    months[date.getMonth()]
  } de ${date.getFullYear()}`;
  const subtitle = `${
    days[date.getDay()]
  }, ${date.getHours()}:${date.getMinutes()}`;

  return (
    <Container>
      <Navbar title="Acid Log" />
      <Wrapper>
        <Box>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>

          <LogTextArea
            multiline
            numberOfLines={20}
            value={content}
            onChangeText={(e: string) => {
              setContent(e);
            }}
          />
        </Box>
        <Box>
          <Button
            text="Salvar"
            type="primary"
            onPress={async () => {
              await logService.storeLog({
                title,
                subtitle,
                content,
                highlight: date.getDate().toString(),
                id: uuid.v4().toString(),
              } as LogType);
              navigate('Home', {shouldRefresh: true});
            }}
            buttonStyle={buttonStyle}
          />
          <Button
            text="Cancelar"
            type="leanPrimary"
            buttonStyle={buttonStyle}
            onPress={() => goBack()}
          />
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Write;
