import React from 'react';
import {Container, Content} from './styles';
import {ScrollView} from 'react-native';
import Navbar from '../../components/Navbar';
import StatusCard from '../../components/StatusCard';
import Button from '../../components/Button';
import Log from '../../components/Log';

const Home = () => {
  return (
    <Container>
      <Navbar title="ACID LOG" />
      <ScrollView>
        <Content>
          <StatusCard />
          <Button text="Novo log" type="primary" />

          {[...Array(5).keys()].map(i => (
            <Log
              title="5 de Agosto"
              content="So this morning something real crazy happened with me, you aren’t going to
believ..."
              highlight="5"
              key={i}
            />
          ))}
        </Content>
      </ScrollView>
    </Container>
  );
};

export default Home;
