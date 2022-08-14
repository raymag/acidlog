import AsyncStorage from '@react-native-async-storage/async-storage';

export type LogType = {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  highlight: string;
  createdAt: string;
};

const getLogs = async (): Promise<LogType[] | undefined> => {
  try {
    const jsonValue = await AsyncStorage.getItem('@logs');
    return jsonValue != null
      ? JSON.parse(jsonValue).sort((a: LogType, b: LogType) => {
          if (a.createdAt < b.createdAt) {
            return 1;
          } else if (a.createdAt > b.createdAt) {
            return -1;
          } else {
            return 0;
          }
        })
      : null;
  } catch (e) {
    console.error(`Error when trying fetch list of logs`);
  }
};

const getLog = async (id: string): Promise<LogType | void> => {
  try {
    const logs = await getLogs();
    if (logs && logs !== null) {
      logs.forEach(log => {
        if (log.id == id) {
          return log;
        }
      });
    }
    return;
  } catch (e) {
    console.error(`Error when trying fetch list of logs`);
  }
};

const storeLogs = async (logs: LogType[]): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(logs);
    await AsyncStorage.setItem('@logs', jsonValue);
  } catch (e) {
    console.error(`Error when trying to store new list of logs`);
    return;
  }
};

const storeLog = async (log: LogType): Promise<void> => {
  try {
    const logs = await getLogs();

    if (logs && logs != null) {
      logs.push(log);
      await storeLogs(logs);
    } else {
      await storeLogs([log]);
    }
  } catch (e) {
    console.error(`Error when trying to store Log with id ${log.id}`);
    return;
  }
};

const deleteLog = async (id: string): Promise<LogType[] | undefined> => {
  try {
    const logs = await getLogs();

    if (logs && logs != null) {
      const newLogs = logs.filter(log => log.id !== id);
      await storeLogs(newLogs);
      return newLogs;
    }
  } catch {
    console.error(`Error when trying to delete Log with id ${id}`);
    return;
  }
};

const logService = {
  getLogs,
  getLog,
  storeLog,
  storeLogs,
  deleteLog,
};
export default logService;
