/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, TextInput, /* Button, */ Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { AppWs } from '../webservices/AppWs';
import { Utils } from '../utils/Utils';

const LoginForm = (props = {}) => {

    const {setUserData} = props;
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isShowFailed, setIsShowFailed] = useState(false);

    const _storeUserData = async (_userData) => {
        try {
            console.log('save userdata', _userData);
            if (isEmpty(_userData)){
                await AsyncStorage.mergeItem(
                    'userData', ''
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
    };

    const _retrieveUserData = async () => {
        try {
            const _userData = await AsyncStorage.getItem('userData');
            console.log(_userData);
            setIsLoading(false);
            if (!Utils.isEmpty(_userData)) {
                console.log(_userData);
                setUserData(JSON.parse(_userData));
            }
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(()=>{
        console.log(`_retrieveUserData`);
        _retrieveUserData();
        return ()=>{ /**clear function */

        }
    }, []);

    const hideDialog = ()=>setIsShowFailed(false);
    // const dialogFailed = <DialogFailed hideDialog={hideDialog} isShowFailed={isShowFailed} />
    const _loginActn = ()=>{
        setIsLoading(true);
        setTimeout(() => {
            AppWs.getUserData({
                userName, password
            }, data => {
                console.log(data)
                setIsLoading(false);
                if (data != null && data.password == password){
                    setUserData(data);
                    _storeUserData(data);
                }else {
                    setIsShowFailed(true);
                    _storeUserData(null);
                    Alert.alert("Login failed!", "Username or Password was incorrect!")
                }
            }, ()=> {
                setIsLoading(false);
                _storeUserData(null);
                Alert.alert("Login failed!", "Please re-check your internet connection!")
            })
        }, 1000);
    };

  return (
    <View style={styles.container}>
        <View style={{flex: 1}}>
          
        </View>
        <View style={styles.loginFormStyle}>
            <Text style={styles.loginLabel}>Đăng nhập</Text>
            <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl,
                hendrerit venenatis{' '}
            </Text>
            {isLoading && <ActivityIndicator animating={true} color={MD2Colors.red800} />}
            <TextInput
                style={styles.input}
                placeholder="Số điện thoại"
                onChangeText={setUserName}
                value={userName}
            />
            <TextInput
                style={styles.input}
                placeholder="Mật khẩu"
                onChangeText={setPassword}
                value={password}
            />
            <View style={{alignItems: 'center'}}><Button mode="contained" style={{width: '50%'}} onPress={_loginActn}>Đăng nhập</Button></View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingLeft: 10,
      paddingRight: 10
    },
    loginFormStyle: {
        flex: 5,
        flexDirection: 'column'
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    loginLabel: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5
    },
    text: {
      textAlign: 'center',
    },
    button: {
      textAlign: 'center',
      width: '50%',
    },
  });

export default LoginForm