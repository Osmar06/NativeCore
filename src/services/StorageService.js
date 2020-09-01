import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

// hook for asyncstorage
const useStorage = (key, defaultValue) => {
  const [storageValue, updateStorageValue] = useState(defaultValue);

  async function getStorageValue() {
    let value = defaultValue;
    try {
      value = JSON.parse(await get(key)) || defaultValue;
    } catch (e) {
    } finally {
      updateStorageValue(value);
    }
  }

  async function updateStorage(newValue) {
    try {
      if (newValue === null) {
        await remove(key);
      } else {
        const value = JSON.stringify(newValue);
        await add(key, value);
      }
    } catch (e) {
    } finally {
      updateStorageValue(newValue);
    }
  }

  useEffect(() => {
    getStorageValue();
  }, []);

  return [storageValue, updateStorage];
};

async function add(key, value) {
  try {
    await AsyncStorage.setItem(key, toSafeItem(value));
    return responseSuccess;
  } catch (e) {
    return responseError(e);
  }
}

async function addMulti(values) {
  const mappedValues = values.map((v, i) => {
    return [i, toSafeItem(v)];
  });
  try {
    await AsyncStorage.multiSet(mappedValues);
    return responseSuccess;
  } catch (e) {
    return responseError(e);
  }
}

async function get(key) {
  try {
    const result = await AsyncStorage.getItem(key);
    return transformItem(result);
  } catch (e) {
    return responseError(e);
  }
}

async function getMulti(keys) {
  let values;
  try {
    values = await AsyncStorage.multiGet(keys);
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
    return null;
  }

  let value;
  values.forEach((v, i) => {
    value[v[0]] = transformItem(v[1]);
  });

  return value;
}

async function remove(key) {
  try {
    await AsyncStorage.removeItem(key);
    return responseSuccess;
  } catch (e) {
    return responseError(e);
  }
}

async function removeMulti(keys) {
  try {
    await AsyncStorage.multiRemove(keys);
    return responseSuccess;
  } catch (e) {
    return responseError(e);
  }
}

async function getAllKeys() {
  try {
    return await AsyncStorage.getAllKeys();
  } catch (e) {
    return responseError(e);
  }
}

async function clearAll() {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    return responseError(e);
  }
}

const toSafeItem = (value) => {
  const result = JSON.stringify({value: value});
  console.log('Safe Item ', result);
  return result;
};

const transformItem = (value) => {
  try {
    if (!value) return value;
    const safeItem = JSON.parse(value);
    return safeItem.value;
  } catch (error) {
    return value;
  }
};

const responseSuccess = {success: true};

const responseError = (e) => {
  console.log('LOG_Async Storage access Failed', e);
  return {success: false, error: e};
};

export default useStorage;

const StorageService = {
  add,
  addMulti,
  get,
  getMulti,
  getAllKeys,
  remove,
  removeMulti,
  clearAll,
};

export {StorageService};
