/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Utils = {

    isEmpty: e => {
        if (e == undefined || e == null || e == '' || Object.keys(e).length == 0 ) return true;
        return false;
    },

    toTitleCase:  phrase => {
        return phrase
          .toLowerCase()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
    },

    storeUserData: async (_userData) => {
        try {
            console.log('save userdata', _userData);
            if (Utils.isEmpty(_userData)){
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