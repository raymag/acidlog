import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import profileService from '../../services/profile';
import logService from '../../services/log';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Body,
  PageTitle,
  CardTitle,
  Card,
  Text,
  Input,
  Alert,
} from './styles';

const Settings = () => {
  const [name, setName] = useState<string>('');
  const [nameError, setNameError] = useState<boolean>(false);
  const {navigate} = useNavigation<any>();

  const submitName = async () => {
    if (name.length === 0) {
      setNameError(true);
    } else {
      setNameError(false);
      await profileService.putProfile({name});
      navigate('Home', {refresh: true});
    }
  };

  const fetchProfile = async () => {
    const profile = await profileService.getProfile();
    if (profile && profile !== null) {
      if (profile.name) {
        setName(profile.name);
      }
    }
  };

  const clearData = async () => {
    try {
      await profileService.deleteProfile();
      await logService.deleteAllData();
      navigate('Home', {refresh: true});
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
    setName(name);
  }, []);

  return (
    <SafeAreaView>
      <Container>
        <Navbar title="ACID LOG" withCloseIcon />
        <ScrollView>
          <Body>
            <PageTitle>Configurações</PageTitle>
            <Card>
              <CardTitle>Informações Pessoais</CardTitle>
              <Text>Nome:</Text>
              <Input
                alert={nameError}
                value={name}
                onChangeText={(text: string) => {
                  if (text !== '') {
                    setNameError(false);
                  }
                  setName(text);
                }}
              />
              <Alert>
                {nameError ? 'O nome não pode ficar em branco!' : ''}
              </Alert>
              <Button text="Salvar" type="primary" onPress={submitName} />
            </Card>

            <Card>
              <CardTitle>Dados</CardTitle>
              <Text>Deseja limpar todos os Dados?</Text>
              <Text>
                Isso removerá todos os logs e informações do aplicativo. Esta
                ação não pode ser desfeita.
              </Text>
              <Button
                text="Limpar Dados"
                type="leanPrimary"
                onPress={clearData}
              />
            </Card>
          </Body>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
};

export default Settings;
