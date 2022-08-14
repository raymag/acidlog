import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {JSHash, CONSTANTS} from 'react-native-hash';

import Button from '../../components/Button';
import LoadingVeil from '../../components/LoadingVeil';
import settingsService, {SettingsType} from '../../services/settings';

import {
  Veil,
  Container,
  Title,
  TitleWrapper,
  Label,
  Input,
  Alert,
} from './styles';
import profileService, {ProfileType} from '../../services/profile';

const Lock = () => {
  const {navigate} = useNavigation<any>();
  const [loading, setLoading] = useState(false);
  const [settings, setSettings] = useState<SettingsType | null>(null);
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleLogin = async () => {
    const hash = await JSHash(password, CONSTANTS.HashAlgorithms.sha256);
    if (hash && settings && hash === settings.password) {
      navigate('Home');
    } else {
      setError('Senha incorreta');
    }
  };

  useEffect(() => {
    setLoading(true);
    settingsService.getSettings().then(storedSettings => {
      if (!storedSettings || storedSettings === null) {
        navigate('FirstIn');
      } else {
        profileService.getProfile().then(storedProfile => {
          if (storedProfile && storedProfile !== null) {
            setProfile(storedProfile);
          }
          setSettings(storedSettings);
          setLoading(false);
        });
      }
    });
  }, []);

  return (
    <SafeAreaView>
      {loading && <LoadingVeil />}
      <Veil>
        {settings && (
          <Container>
            <TitleWrapper>
              <Title>
                {profile && profile.name ? profile.name : 'Usuário'}
              </Title>
            </TitleWrapper>
            <Label>Senha:</Label>
            <Input
              placeholder="****"
              placeholderTextColor="#999"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              alert={error}
            />
            <Alert>{error}</Alert>

            <Button text="Entrar" type="primary" onPress={handleLogin} />
          </Container>
        )}
      </Veil>
    </SafeAreaView>
  );
};

export default Lock;
