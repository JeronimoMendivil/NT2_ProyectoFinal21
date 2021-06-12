import Storage from "@react-native-async-storage/async-storage";

const AsyncStorage = {};

AsyncStorage.storeData = async (key) => {
  try {
    await Storage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // saving error
  }
};

AsyncStorage.getData = async (key) => {
  try {
    const value = await Storage.getItem(key);
      return JSON.parse(value)
    
  } catch (e) {
    // error reading value
  }
};

export default AsyncStorage;
