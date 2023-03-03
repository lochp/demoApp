/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { View, Text, AsyncStorage } from 'react-native';
import React, {useState, useEffect} from 'react'

const LoginForm = () => {
    const _storeUserData = async (_userData) => {
        try {
            await AsyncStorage.setItem(
            'userData',
            JSON.stringify(_userData)
            );
        } catch (error) {
            // Error saving data
        }
    };

    const _retrieveUserData = async () => {
        try {
            const value = await AsyncStorage.getItem('userData');
            if (value !== null) {
            // We have data!!
            console.log(value);
            }
        } catch (error) {
            // Error retrieving data
        }
    };

    const loginFnc = (_userName, _password)=>{
        _retrieveUserData();
    }

  return (
    <View>
      <Text>LoginForm</Text>
    </View>
  )
}

export default LoginForm