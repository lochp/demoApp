import AsyncStorage from '@react-native-async-storage/async-storage';

export const Utils = {

    isEmpty: e => {
        if (e == undefined || e == null || e == '' || Object.keys(e).length == 0 ) return true;
        return false;
    },

    storeUserData: async (_userData) => {
        try {
            console.log('save userdata', _userData);
            if (isEmpty(_userData)){
                await AsyncStorage.mergeItem(
                    'userData', ''
                );
                await AsyncStorage.removeItem(
                    'userData'
                );
            }else {
                await AsyncStorage.setItem(
                    'userData',
                    JSON.stringify(_userData)
                );
            }
        } catch (error) {
            // Error saving data
        }
    }

}