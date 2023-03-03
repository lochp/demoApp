/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React from 'react';
import { AppConsts } from '../constants/AppConsts';
import Home from '../home/Home';
import UserInfoPage from '../userInfo/UserInfoPage';
import Notification from '../notification/Notification';
import Bookmark from '../bookmark/Bookmark';
import MakeAppointment from '../makeAppointment/MakeAppointment';


const Content = (props = {}) => {
  const {userData, tab, setUserData} = props;
  const {APP_TAB} = AppConsts;

  let _content = undefined;
  switch(tab){
    case APP_TAB.HOME: 
      _content = <Home userData={userData} />
      break;
    case APP_TAB.SAVED: 
      _content = <Bookmark userData={userData} />
      break;
    case APP_TAB.MAKE_APMT: 
      _content = <MakeAppointment userData={userData} />
      break;
    case APP_TAB.NOTIFICATION: 
      _content = <Notification userData={userData} />
      break;
    case APP_TAB.USER: 
      _content = <UserInfoPage userData={userData} setUserData={setUserData} />
      break;
    default:
      break;
  }
  return (
    <View style={{flex: 1}}>
      {_content}
    </View>
  )
}

export default Content