import React, {useState} from 'react';
import {Container, Content} from './styles';
import {ScrollView} from 'react-native';
import Navbar from '../../components/Navbar';
import StatusCard from '../../components/StatusCard';
import Button from '../../components/Button';
import Log from '../../components/Log';

import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const [logs, setLogs] = useState([...Array(5).keys()]);
  const {navigate} = useNavigation<any>();
  return (
    <Container>
      <Navbar title="ACID LOG" />
      <ScrollView>
        <Content>
          <StatusCard />
          <Button
            text="Novo log"
            type="primary"
            onPress={() => navigate('Write')}
          />

          {logs.map(i => (
            <Log
              title="5 de Agosto"
              content="So this morning something real crazy happened with me, you aren’t going to
believ..."
              highlight="5"
              key={i}
              id={i.toString()}
              onDelete={(id: string) => {
                const temp = [...logs];
                console.log(logs, id);
                setLogs(temp.filter(log => log.toString() !== id));
              }}
              onEdit={() => navigate('Write')}
            />
          ))}
        </Content>
      </ScrollView>
    </Container>
  );
};

export default Home;
