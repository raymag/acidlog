import React from 'react';
import {
  Container,
  Title,
  Subtitle,
  Header,
  Body,
  ProfileImage,
  Message,
  TitleMessage,
  TextMessage,
  Footer,
  FooterText,
} from './styles';

const StatusCard = () => {
  return (
    <Container>
      <Header>
        <Title>8 de Agosto de 2022</Title>
        <Subtitle>Sexta Feira</Subtitle>
      </Header>
      <Body>
        <ProfileImage />
        <Message>
          <TitleMessage>Hello, Magno</TitleMessage>
          <TextMessage>
            Você adicionou 16 logs neste mês. Você adicionou 16 logs neste mês.
            Você adicionou 16 logs neste mês
          </TextMessage>
        </Message>
      </Body>
      <Footer>
        <FooterText>1503 logs em 2022</FooterText>
      </Footer>
    </Container>
  );
};

export default StatusCard;
