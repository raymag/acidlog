import React, {useEffect, useState} from 'react';
import {
  Container,
  Title,
  Subtitle,
  Wrapper,
  Box,
  ContentViewer,
} from './styles';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import logService, {LogType} from '../../services/log';
import {ScrollView} from 'react-native';

type ReadParams = ParamListBase & {
  id: string;
};
const Read = () => {
  const [log, setLog] = useState<LogType>();
  const {goBack} = useNavigation<any>();
  const route = useRoute<RouteProp<ReadParams, string>>();
  const buttonStyle = {
    marginTop: 25,
    marginBottom: 0,
  };

  useEffect(() => {
    if (route.params && route.params) {
      const {id} = route.params as ReadParams;
      if (id && id !== null) {
        logService.getLogs().then(logs => {
          const storedLog = logs?.filter(log => log.id === id);
          if (storedLog && storedLog !== null && storedLog.length === 1) {
            setLog(storedLog[0]);
          } else {
            goBack();
          }
        });
      }
    }
  }, [route.params]);

  return (
    <Container>
      <Navbar title="Acid Log" />
      <Wrapper>
        <ScrollView>
          <Box>
            <Title>{log?.title}</Title>
            <Subtitle>{log?.subtitle}</Subtitle>
            <ContentViewer>{log?.content}</ContentViewer>
          </Box>
          <Box>
            <Button
              text="Voltar"
              type="leanPrimary"
              buttonStyle={buttonStyle}
              onPress={() => goBack()}
            />
          </Box>
        </ScrollView>
      </Wrapper>
    </Container>
  );
};

export default Read;
