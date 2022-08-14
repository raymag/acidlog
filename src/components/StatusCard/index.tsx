import React from 'react';
import {LogType} from '../../services/log';
import {ProfileType} from '../../services/profile';
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

type StatusCardProps = {
  logs: LogType[];
  logCount?: number | null;
  profile?: ProfileType | null;
};

const StatusCard = ({logs, logCount, profile = null}: StatusCardProps) => {
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
      <Header>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Header>
      <Body>
        <ProfileImage
          source={{
            uri: 'https://s2.static.brasilescola.uol.com.br/be/2021/12/tucano-toco.jpg',
          }}
        />
        <Message>
          <TitleMessage>
            {profile && profile.name ? `Eaí, ${profile.name}!` : 'Eaí'}
          </TitleMessage>
          <TextMessage>
            Você já possui {logs.length} log{logs.length !== 1 ? 's' : ''}{' '}
            salvos no momento. Parabéns!
          </TextMessage>
        </Message>
      </Body>
      <Footer>
        <FooterText>
          {logCount && logCount !== null
            ? `${logCount} log${logCount !== 1 ? 's' : ''} escrito${
                logCount !== 1 ? 's' : ''
              }`
            : ''}
        </FooterText>
      </Footer>
    </Container>
  );
};

export default StatusCard;
