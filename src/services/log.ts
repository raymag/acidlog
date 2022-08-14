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
    await increaseTotalLogCount();
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
      await decreaseTotalLogCount();
      return newLogs;
    }
  } catch {
    console.error(`Error when trying to delete Log with id ${id}`);
    return;
  }
};

const getTotalLogCount = async (): Promise<number> => {
  try {
    const count = await AsyncStorage.getItem('@logCount');
    return count != null ? parseInt(count) : 0;
  } catch {
    console.error(`Error when trying to get total log count`);
    return 0;
  }
};

const putTotalLogCount = async (count: number): Promise<void> => {
  try {
    await AsyncStorage.setItem('@logCount', count.toString());
  } catch (e) {
    console.error(`Error when trying to store new list of logs`);
    return;
  }
};

const increaseTotalLogCount = async (): Promise<void> => {
  const count = await getTotalLogCount();
  await putTotalLogCount(count + 1);
};
const decreaseTotalLogCount = async (): Promise<void> => {
  const count = await getTotalLogCount();
  if (count > 0) {
    await putTotalLogCount(count - 1);
  }
};

const logService = {
  getLogs,
  getLog,
  storeLog,
  storeLogs,
  deleteLog,
  getTotalLogCount,
  putTotalLogCount,
  increaseTotalLogCount,
  decreaseTotalLogCount,
};
export default logService;
