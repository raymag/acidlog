import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import {useModal, Modal} from '../../hooks/Modal';
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
import settingsService from '../../services/settings';

const Settings = () => {
  const [name, setName] = useState<string>('');
  const [nameError, setNameError] = useState<boolean>(false);
  const {navigate} = useNavigation<any>();
  const [isModalVisible, toggleModal] = useModal();
  const [isExportModalVisible, toggleExportModal] = useModal();

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
      await settingsService.deleteSettings();
      navigate('Home', {refresh: true});
    } catch (error) {
      console.log(error);
    }
  };

  // const exportLogs = async () => {
  //   try {
  //     // const values = [
  //     //   ['build', '2017-11-05T05:40:35.515Z'],
  //     //   ['deploy', '2017-11-05T05:42:04.810Z'],
  //     // ];
  //     // // construct csvString
  //     // const headerString = 'event,timestamp\n';
  //     // const rowString = values.map(d => `${d[0]},${d[1]}\n`).join('');
  //     // const csvString = `${headerString}${rowString}`;
  //     // // write the current list of answers to a local csv file
  //     // const pathToWrite = `${RNFetchBlob.fs.dirs.DownloadDir}/data.csv`;
  //     // console.log('pathToWrite', pathToWrite);
  //     // // pathToWrite /storage/emulated/0/Download/data.csv
  //     // RNFetchBlob.fs
  //     //   .writeFile(pathToWrite, csvString, 'utf8')
  //     //   .then(() => {
  //     //     console.log(`wrote file ${pathToWrite}`);
  //     //     // wrote file /storage/emulated/0/Download/data.csv
  //     //   })
  //     //   .catch(error => console.error(error));
  //   } catch (error) {
  //     console.error('Error exporting logs', error);
  //   }
  // };

  useEffect(() => {
    fetchProfile();
    setName(name);
  }, []);

  return (
    <SafeAreaView>
      <Modal
        isModalVisible={isModalVisible}
        title="Limpar todos os dados?"
        body="Esta ação não pode ser revertida."
        onCancel={() => toggleModal()}
        onConfirm={clearData}
      />
      {/* <Modal
        isModalVisible={isExportModalVisible}
        title="Exportar logs?"
        body="Esta opção funciona como um método de backup. Uma cópia dos dados ainda permancerá na aplicação."
        onCancel={() => toggleExportModal()}
        onConfirm={() => exportLogs()}
      /> */}
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
              <Button text="Salvar" type="leanPrimary" onPress={submitName} />
            </Card>

            {/* <Card>
              <CardTitle>Exportar Logs</CardTitle>
              <Text>
                Isso irá te permitir salvar os logs em outro lugar como uma
                forma de backup.
              </Text>
              <Button
                text="Exportar"
                type="leanPrimary"
                onPress={() => toggleExportModal()}
              />
            </Card> */}

            <Card>
              <CardTitle>Remover Dados</CardTitle>
              <Text>Deseja limpar todos os Dados?</Text>
              <Text>
                Isso removerá todos os logs e informações do aplicativo. Esta
                ação não pode ser desfeita.
              </Text>
              <Button
                text="Limpar Dados"
                type="leanPrimary"
                onPress={() => toggleModal()}
              />
            </Card>
          </Body>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
};

export default Settings;
