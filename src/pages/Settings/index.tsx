import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Navbar from '../../components/Navbar';
import {Container} from './styles';

const Settings = () => {
  return (
    <SafeAreaView>
      <Container>
        <Navbar title="ACID LOG" withCloseIcon />
        <ScrollView>
          {/* <Body> */}

          {/* </Body> */}
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
};

export default Settings;
