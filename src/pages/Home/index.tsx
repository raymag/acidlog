import React from 'react';
import {Container, Content} from './styles';
import {ScrollView} from 'react-native';
import Navbar from '../../components/Navbar';
import StatusCard from '../../components/StatusCard';

const Home = () => {
  return (
    <Container>
      <Navbar title="ACID LOG" />
      <ScrollView>
        <Content>
          <StatusCard />
        </Content>
      </ScrollView>
    </Container>
  );
};

export default Home;
