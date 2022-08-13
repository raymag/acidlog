import React from 'react';
import {Container, Title, Subtitle, LogTextArea, Wrapper, Box} from './styles';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import {useNavigation} from '@react-navigation/native';

const Write = () => {
  const {goBack} = useNavigation<any>();
  const buttonStyle = {
    marginTop: 5,
    marginBottom: 0,
  };
  return (
    <Container>
      <Navbar title="Acid Log" />
      <Wrapper>
        <Box>
          <Title>8 de Agosto de 2022</Title>
          <Subtitle>Sexta-Feira, 15:59</Subtitle>

          <LogTextArea multiline numberOfLines={20} />
        </Box>
        <Box>
          <Button
            text="Salvar"
            type="primary"
            onPress={() => goBack()}
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
