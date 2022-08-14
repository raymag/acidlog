import AsyncStorage from '@react-native-async-storage/async-storage';

export type SettingsType = {
  password: string;
};

const getSettings = async (): Promise<SettingsType | undefined> => {
  try {
    const jsonValue = await AsyncStorage.getItem('@settings');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error(`Error when trying fetch profile`);
  }
};

const putSettings = async (settings: SettingsType): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(settings);
    await AsyncStorage.setItem('@settings', jsonValue);
  } catch (e) {
    console.error(`Error when trying to update profile`);
    return;
  }
};

const deleteSettings = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem('@settings');
  } catch {
    console.error(`Error when trying to delete profile`);
    return;
  }
};

const settingsService = {
  getSettings,
  putSettings,
  deleteSettings,
};
export default settingsService;
