/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react';
import { Utils } from '../utils/Utils';
import { AppConsts } from '../constants/AppConsts';

const Footer = (props = {}) => {

  const {APP_TAB} = AppConsts;
  const {setTab, userData} = props;

  const changeTab = tabValue =>{
    if (Utils.isEmpty(userData)) return;
    console.log(tabValue);
    setTab(tabValue);
  }

  return (
    <View style={styles.container}>
      <View style={styles.smallBtn}>
        <Pressable
          onPress={() => changeTab(APP_TAB.HOME)}>
          <Image
            style={styles.tinyLogo}
            source={require('../../images/Icon/Home.png')}
          />
        </Pressable>
      </View>
      <View style={styles.smallBtn}>
        <Pressable
          onPress={() => changeTab(APP_TAB.SAVED)}>
          <Image
            style={styles.tinyLogo}
            source={require('../../images/Icon/DaLuu.png')}
          />
        </Pressable>
      </View>
      <View style={styles.smallBtn}>
        <Pressable
          onPress={() => changeTab(APP_TAB.MAKE_APMT)}>
          <Image
            style={styles.largeLogo}
            source={require('../../images/Icon/Calendar.png')}
          />
        </Pressable>
      </View>
      <View style={styles.smallBtn}>
        <Pressable
          onPress={() => changeTab(APP_TAB.NOTIFICATION)}>
          <Image
            style={styles.tinyLogo}
            source={require('../../images/Icon/Notification.png')}
          />
        </Pressable>
      </View>
      <View style={styles.smallBtn}>
        <Pressable
          onPress={() => changeTab(APP_TAB.USER)}>
          <Image
            style={styles.tinyLogo}
            source={require('../../images/Icon/User.png')}
          />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  smallBtn: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle'
  },
  largeBtn: {
    flex: 2,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle'
  },
  tinyLogo: {
    height: 25,
    width: 25,
  },
  largeLogo: {
    height: 50,
    width: 50,
  },
});

export default Footer