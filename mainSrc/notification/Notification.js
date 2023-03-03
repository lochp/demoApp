import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Button/* , Modal  */} from 'react-native-paper';
import { AppWs } from '../webservices/AppWs';
import { AppConsts } from '../constants/AppConsts';
import DetailNews from './DetailNews';

const Notification = (props = {}) => {

  const {userData} = props;

  const [notifications, setNotifications] = useState([]);
  const [notificationsToShow, setNotificationsToShow] = useState([]);
  const [showType, setShowType] = useState(AppConsts.NOTIFICATION_TYPE.ALL);
  const [showDetail, setShowDetail] = useState(false);
  const [detailItem, setDetailItem] = useState(null);

  const clickDetail = (item) => {
    setShowDetail(true);
    setDetailItem(item);
  }

  useEffect(()=>{
    let _listToShow = [];
    notifications.forEach(_notification => {
      if (showType == AppConsts.NOTIFICATION_TYPE.PROMOTION ){
        _notification.isPromotion && _listToShow.push(_notification);
      }
      if (showType == AppConsts.NOTIFICATION_TYPE.SYSTEM  ){
        _notification.isSystem &&_listToShow.push(_notification);
      }
      if (showType == AppConsts.NOTIFICATION_TYPE.ALL){
        _listToShow.push(_notification);
      }
    });
    console.log(` showType _listToShow`)
    console.log(showType);
    console.log(_listToShow);
    setNotificationsToShow(_listToShow);
    return ()=>{

    }
  }, [showType])

  useEffect(()=>{
    const intervalId = setInterval(() => {
      AppWs.getNotifications({userName: userData.userName}, (data)=>{
        const _arr = Object.values(data);
        setNotifications(_arr);
        let _listToShow = [];
        if (showType == AppConsts.NOTIFICATION_TYPE.ALL){
          setNotificationsToShow(_arr);
        }else {
          _arr.forEach(_notification => {
            console.log(`_notification`)
            console.log(_notification)
            if (showType == AppConsts.NOTIFICATION_TYPE.PROMOTION){
              _notification.isPromotion && _listToShow.push(_notification);
            }
            if (showType == AppConsts.NOTIFICATION_TYPE.SYSTEM ){
              _notification.isSystem && _listToShow.push(_notification);
            }
            if (showType == AppConsts.NOTIFICATION_TYPE.ALL ){
              _listToShow.push(_notification);
            }
          });
          // console.log(_listToShow)
          setNotificationsToShow([..._listToShow]);
        }
      }, f=>f);
    }, 3000);
    return ()=>{
      clearInterval(intervalId);
    }
  }, [])

  const backToList = ()=> {
    setShowDetail(false);
    setDetailItem(null);
  }
  if (showDetail){
    return <DetailNews notification={detailItem} backToList={backToList} />
  }

  return (
    <View style={styles.container}>
      <View style={styles.infoPart}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Thông báo</Text>
      </View>
      <View style={styles.detailPart}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <Button mode="contained" style={{width: '25%', flex: 1, marginRight: 5, marginLeft: 5, backgroundColor: showType == AppConsts.NOTIFICATION_TYPE.ALL ? '#863CFF' :  '#c9c9c9'}} onPress={()=>setShowType(AppConsts.NOTIFICATION_TYPE.ALL)}>Tất cả</Button>
          <Button mode="contained" style={{width: '25%', flex: 1, marginRight: 5, backgroundColor: showType == AppConsts.NOTIFICATION_TYPE.PROMOTION ? '#863CFF' : '#c9c9c9'}} onPress={()=>setShowType(AppConsts.NOTIFICATION_TYPE.PROMOTION)}>Khuyến mãi</Button>
          <Button mode="contained" style={{width: '25%', flex: 1, marginRight: 5, backgroundColor: showType == AppConsts.NOTIFICATION_TYPE.SYSTEM ? '#863CFF' :  '#c9c9c9'}} onPress={()=>setShowType(AppConsts.NOTIFICATION_TYPE.SYSTEM)}>Hệ thống</Button>
        </View>
        <View  style={{flex: 15}}>
          <ScrollView>
          {
            notificationsToShow && notificationsToShow.map( (n, idx) => {
              return (
                <View style={styles.sectionInfo} key={idx}>
                  <Pressable onPress={()=>clickDetail(n)}>
                    <View style={styles.info}>
                        <Text style={{paddingLeft: 10, paddingRight: 10, minHeight: 45, lineHeight: 45, fontSize: 15}}>{n.title}</Text>
                    </View>
                  </Pressable>
                </View>
              )
            })
          }
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
  },
  infoPart: {
    flex: 1,
    paddingRight: 5,
    paddingLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  detailPart: {
    flex: 7,
  },
  info: {
    flex: 1, 
    flexDirection: 'row',
    paddingRight: 15,
    paddingLeft: 15,
  },
  sectionInfo: {
    backgroundColor: '#FFF2F0',
    marginTop: 10
  },
  sectionItem: {
    flex: 1, 
    flexDirection: 'row',
    paddingRight: 5,
    paddingLeft: 5,
  },
  logoutPart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ratingStyle: {
    fontSize: 15,
    height: 30,
    width: 100
  },
  scrollViewInfo: {
    paddingRight: 5,
    paddingLeft: 5,
  },
  nameStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    height: 20,
    width: 100
  },
  messageIcon: {
    height: 40,
    width: 40,
  },
  smallIcon: {
    height: 15,
    width: 15,
  }
});

export default Notification