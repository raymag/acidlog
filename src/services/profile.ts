import AsyncStorage from '@react-native-async-storage/async-storage';

export type ProfileType = {
  name: string;
};

const getProfile = async (): Promise<ProfileType | undefined> => {
  try {
    const jsonValue = await AsyncStorage.getItem('@profile');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error(`Error when trying fetch profile`);
  }
};

const putProfile = async (profile: ProfileType): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(profile);
    await AsyncStorage.setItem('@profile', jsonValue);
  } catch (e) {
    console.error(`Error when trying to update profile`);
    return;
  }
};

const deleteProfile = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem('@profile');
  } catch {
    console.error(`Error when trying to delete profile`);
    return;
  }
};

const profileService = {
  getProfile,
  putProfile,
  deleteProfile,
};
export default profileService;
