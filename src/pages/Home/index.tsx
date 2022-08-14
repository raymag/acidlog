import React, {useState, useEffect} from 'react';
import {Container, Content} from './styles';
import {ScrollView} from 'react-native';
import Navbar from '../../components/Navbar';
import StatusCard from '../../components/StatusCard';
import Button from '../../components/Button';
import Log from '../../components/Log';
import logService, {LogType} from '../../services/log';

import {useNavigation, useRoute} from '@react-navigation/native';
import profileService, {ProfileType} from '../../services/profile';

const Home = () => {
  const route = useRoute();
  const [logs, setLogs] = useState<LogType[]>([]);
  const [logCount, setLogCount] = useState<number | null>(null);
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const {navigate} = useNavigation<any>();

  const fetch = () => {
    logService.getLogs().then(storedLogs => {
      if (storedLogs && storedLogs != null) {
        setLogs(storedLogs);
      } else {
        setLogs([]);
      }
    });
    logService.getTotalLogCount().then(count => {
      if (count && count !== null) {
        setLogCount(count);
      } else {
        setLogCount(0);
      }
    });
    profileService.getProfile().then(prof => {
      if (prof && prof !== null) {
        setProfile(prof);
      } else {
        setProfile(null);
      }
    });
  };
  useEffect(() => {
    fetch();
  }, [route.params]);

  return (
    <Container>
      <Navbar title="ACID LOG" />
      <ScrollView>
        <Content>
          <StatusCard logs={logs} logCount={logCount} profile={profile} />
          <Button
            text="Novo log"
            type="primary"
            onPress={() => navigate('Write')}
          />

          {logs.map((log, i) => (
            <Log
              title={log.title}
              key={i}
              content={log.content}
              highlight={log.highlight}
              id={log.id}
              createdAt={log.createdAt}
              onDelete={async (id: string) => {
                const newLogs = await logService.deleteLog(id);
                if (newLogs && newLogs !== null) {
                  setLogs(newLogs);
                }
              }}
              onEdit={() => navigate('Write')}
              light={i % 2 !== 0}
            />
          ))}
        </Content>
      </ScrollView>
    </Container>
  );
};

export default Home;
