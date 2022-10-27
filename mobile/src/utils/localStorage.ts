import * as SecureStore from 'expo-secure-store';

export const getFromLocalStorage = async (key: string) => {
    return await SecureStore.getItemAsync(key);
}

export const setOnLocalStorage = async (key: string, value : string) => {
    return await SecureStore.setItemAsync(key, value);
}

export const deleteFromLocalStorage = async (key: string) => {
    return await SecureStore.deleteItemAsync(key)
}
