/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View, AsyncStorage
} from 'react-native';
import Content from './mainSrc/content/Content';
import Footer from './mainSrc/footer/Footer';
import LoginForm from './mainSrc/login/LoginForm';
import { AppConsts } from './mainSrc/constants/AppConsts';
import _ from 'lodash';


function App(): JSX.Element {

  const [userData, setUserData] = useState(undefined);
  const [tab, setTab] = useState(AppConsts.APP_TAB.USER);

  return (
  <View style={styles.contaitner} >
    <View style={styles.content}>
      {
        _.isEmpty(userData) ? <LoginForm setUserData={setUserData} /> : <Content userData={userData} tab={tab} />
      }
    </View>
    <View style={styles.footer}>
      <Footer userData={userData} setTab={setTab} />
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  contaitner: {
    flex: 1,
    flexDirection: 'column'
  },
  content: {
    flex: 9,
  },
  footer: {
    flex: 1
  }
});

export default App;
