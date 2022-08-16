import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Alert as Warning,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import {useModal, Modal} from '../../hooks/Modal';
import profileService from '../../services/profile';
import logService from '../../services/log';
import {useNavigation} from '@react-navigation/native';
import {JSHash, CONSTANTS} from 'react-native-hash';
import RNFetchBlob from 'rn-fetch-blob';
import DocumentPicker from 'react-native-document-picker';

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
  const [password, setPassword] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');
  const [actualPassword, setActualPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState({
    password: '',
    password2: '',
    actualPassword: '',
  });
  const [nameError, setNameError] = useState<boolean>(false);
  const {navigate} = useNavigation<any>();
  const [isModalVisible, toggleModal] = useModal();
  const [isExportModalVisible, toggleExportModal] = useModal();
  const [isImportModalVisible, toggleImportModal] = useModal();

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

  const exportLogs = async () => {
    try {
      const logs = await logService.getLogs();
      if (logs && logs.length > 0) {
        const timestamp = new Date().getTime();
        const path = `${RNFetchBlob.fs.dirs.DownloadDir}/acidlog_${timestamp}.json`;

        const permissionWriteExternalStorage = async () => {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          );
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        };

        if (Platform.OS === 'android') {
          const permissionGranted = await permissionWriteExternalStorage();
          if (permissionGranted) {
            await RNFetchBlob.fs.createFile(path, JSON.stringify(logs), 'utf8');
            Warning.alert(
              'Exportado!',
              'Seus logs foram exportados com sucesso.',
              [{text: 'OK', onPress: () => console.log('OK Pressed')}],
            );
          }

          return;
        }
      }
    } catch (error) {
      console.error('Error exporting logs', error);
    }
  };

  const importLogs = async () => {
    const res = await DocumentPicker.pickSingle({
      type: [DocumentPicker.types.allFiles],
      presentationStyle: 'fullScreen',
    });

    const permissionWriteExternalStorage = async () => {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    };

    if (Platform.OS === 'android') {
      const permissionGranted = await permissionWriteExternalStorage();
      if (permissionGranted) {
        const logs = await RNFetchBlob.fs.readFile(res.uri, 'utf8');
        if (logs) {
          await logService.storeLogs(JSON.parse(logs));
          Warning.alert(
            'Importado!',
            'Seus logs foram importados com sucesso.',
            [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          );
          navigate('Home', {refresh: true});
        }
      }

      return;
    }
  };

  const handleUpdatePassword = async () => {
    const err = {
      password: '',
      password2: '',
      actualPassword: '',
    };
    if (password.trim() === '') {
      err.password = 'A senha não pode ficar em branco';
    }
    if (password2.trim() === '') {
      err.password2 = 'A senha não pode ficar em branco';
    }
    if (password !== password2) {
      err.password = 'As senhas não conferem';
      err.password2 = 'As senhas não conferem';
    }

    const conf = await settingsService.getSettings();
    if (conf && conf.password) {
      const oldHash = await JSHash(
        actualPassword,
        CONSTANTS.HashAlgorithms.sha256,
      );
      if (oldHash !== conf.password) {
        err.actualPassword = 'Senha incorreta';
      }
    }

    setPasswordError(err);
    if (
      err.password === '' &&
      err.password2 === '' &&
      err.actualPassword === ''
    ) {
      const newPass = await JSHash(password, CONSTANTS.HashAlgorithms.sha256);
      if (newPass) {
        await settingsService.putSettings({password: newPass});
        Warning.alert('Sucesso!', 'Sua senha foi alterada corretamente.', [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
        navigate('Home', {refresh: true});
        return;
      }
    }
  };

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
      <Modal
        isModalVisible={isExportModalVisible}
        title="Exportar logs?"
        body="Esta opção funciona como um método de backup. Uma cópia dos dados ainda permancerá na aplicação."
        onCancel={() => toggleExportModal()}
        onConfirm={() => exportLogs()}
      />
      <Modal
        isModalVisible={isImportModalVisible}
        title="Importar logs?"
        body="Isso substituirá todos os logs contidos na aplicação pelos logs do arquivo importado. Esta ação não pode ser desfeita."
        onCancel={() => toggleImportModal()}
        onConfirm={() => importLogs()}
      />
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
              <Button
                text="Salvar"
                type="leanPrimary"
                onPress={submitName}
                buttonStyle={{marginTop: 5}}
              />
            </Card>

            <Card>
              <CardTitle>Mudar senha</CardTitle>

              <Text>Senha Atual</Text>
              <Input
                value={actualPassword}
                onChangeText={setActualPassword}
                placeholder="******"
                placeholderTextColor="#ccc"
                secureTextEntry={true}
                alert={passwordError.actualPassword}
              />
              <Alert>{passwordError.actualPassword}</Alert>

              <Text>Senha Nova</Text>
              <Input
                value={password}
                onChangeText={setPassword}
                placeholder="******"
                placeholderTextColor="#ccc"
                secureTextEntry={true}
                alert={passwordError.password}
              />
              <Alert>{passwordError.password}</Alert>

              <Text>Confirmar Senha</Text>
              <Input
                value={password2}
                onChangeText={setPassword2}
                placeholder="******"
                placeholderTextColor="#ccc"
                secureTextEntry={true}
                alert={passwordError.password2}
              />
              <Alert>{passwordError.password2}</Alert>
              <Button
                text="Atualizar"
                type="leanPrimary"
                onPress={handleUpdatePassword}
                buttonStyle={{marginTop: 5}}
              />
            </Card>

            <Card>
              <CardTitle>Exportar ou Importar Logs</CardTitle>
              <Text>
                Isso te permite salvar os logs em outro lugar como uma forma de
                backup ou importá-los de volta ao app.
              </Text>
              <Button
                text="Exportar"
                type="primary"
                onPress={() => toggleExportModal()}
                buttonStyle={{marginTop: 5}}
              />
              <Button
                text="Importar"
                type="leanPrimary"
                onPress={importLogs}
                buttonStyle={{marginTop: 5}}
              />
            </Card>

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
                buttonStyle={{marginTop: 5}}
              />
            </Card>
          </Body>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
};

export default Settings;
