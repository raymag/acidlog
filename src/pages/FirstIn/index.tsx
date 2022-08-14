import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Alert as Warning} from 'react-native';
import {JSHash, CONSTANTS} from 'react-native-hash';

import Button from '../../components/Button';
import {Veil, Container, Title, Label, Input, Text, Alert} from './styles';
import settingsService from '../../services/settings';
import profileService from '../../services/profile';
import {useNavigation} from '@react-navigation/native';

const FirstIn = () => {
  const {navigate} = useNavigation<any>();
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');
  const [errors, setErrors] = useState({
    name: '',
    password: '',
    password2: '',
  });

  const handleSubmit = async () => {
    const newErrors = {
      name: '',
      password: '',
      password2: '',
    };
    if (name.trim() === '') {
      newErrors.name = 'O nome não pode ficar em branco';
    }
    if (password.trim() === '') {
      newErrors.password = 'A senha não pode ficar em branco';
    }
    if (password2.trim() === '') {
      newErrors.password2 = 'A senha não pode ficar em branco';
    }
    if (password2 !== password) {
      newErrors.password = 'As senhas não conferem';
      newErrors.password2 = 'As senhas não conferem';
    }
    setErrors(newErrors);
    if (
      newErrors.name === '' &&
      newErrors.password === '' &&
      newErrors.password2 === ''
    ) {
      try {
        const hash = await JSHash(password, CONSTANTS.HashAlgorithms.sha256);
        console.log(hash);
        if (hash) {
          await settingsService.putSettings({password: hash});
          await profileService.putProfile({name});
          Warning.alert(
            'Sucesso!',
            'As informações foram salvas corretamente.',
            [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          );
          navigate('Home', {refresh: true});
        }
      } catch (e) {
        console.error('Error while setting up profile and password', e);
      }
    }
  };

  return (
    <SafeAreaView>
      <Veil>
        <Container>
          <Title>Bem vindo ao AcidLog</Title>

          <Text>
            Antes de começar a usar o Acidlog, precisamos de algumas
            informações. Mas é bem rápido.
          </Text>

          <Label>Nome</Label>
          <Input value={name} onChangeText={setName} alert={errors.name} />
          <Alert>{errors.name}</Alert>

          <Label>Senha</Label>
          <Input
            value={password}
            onChangeText={setPassword}
            placeholder="******"
            secureTextEntry={true}
            alert={errors.password}
          />
          <Alert>{errors.password}</Alert>

          <Label>Confirmar Senha</Label>
          <Input
            value={password2}
            onChangeText={setPassword2}
            placeholder="******"
            secureTextEntry={true}
            alert={errors.password2}
          />
          <Alert>{errors.password2}</Alert>

          <Button text="Confirmar" type="primary" onPress={handleSubmit} />
        </Container>
      </Veil>
    </SafeAreaView>
  );
};

export default FirstIn;
