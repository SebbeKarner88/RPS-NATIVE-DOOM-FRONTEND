import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e.message());
  }
};

export const getData = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    console.log(e.message());
  }
};

export const removeData = async (key) => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(e.message());
  }
};
