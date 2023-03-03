/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, ScrollView, Image, Pressable} from 'react-native'
import React, {useState, useEffect} from 'react';
import { Avatar, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Utils } from '../utils/Utils';
import UserDetails from './UserDetails';

const UserInfoPage = (props = {}) => {

  const {userData, setUserData} = props;
  const {fullName} = userData;
  const [X1 = '', X2 = ''] = fullName.split(' ');

  const [enterInfoDetail, setEnterInfoDetail] = useState(false);

  useEffect(()=>{

    return ()=>{ /**clean effect */

    }
  }, [])

  const logoutFnc = ()=>{
    setUserData(null);
    Utils.storeUserData(null);
  }

  if (enterInfoDetail) return <UserDetails setEnterInfoDetail={setEnterInfoDetail} userData={userData} setUserData={setUserData} />

  return (
    <View style={styles.container}>
      <View style={styles.infoPart}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Avatar.Text size={50} label={`${X1.charAt(0).toUpperCase()}${X2.charAt(0).toUpperCase()}`} /></View>
        <View style={{flex: 3}}>
          <Text style={styles.nameStyle}>{fullName}</Text>
          <Text style={styles.ratingStyle}>Gold</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Pressable
            onPress={f => f}>
            <Image
              style={styles.messageIcon}
              source={require('../../images/Icon/chat.png')}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.detailPart}>
        <ScrollView style={styles.scrollViewInfo}>
          <View style={styles.info}>
            <View style={{height: 40, justifyContent: 'center', alignItems: 'center', flex: 1}}>
              <Image
                  style={styles.smallIcon}
                  source={require('../../images/Icon/Account.png')}
              />
            </View>
            <View style={{height: 40, justifyContent: 'center', flex: 5}}>
              <Text style={{fontWeight: 'bold'}}>Thông tin tài khoản</Text>
              <Text>Xem và chỉnh sửa thông tin tài khoản</Text>
            </View>
            <View style={{height: 40, justifyContent: 'center', alignItems: 'center', flex: 1}}>
              <Pressable onPress={()=> setEnterInfoDetail(true)}>
                <Image
                    style={styles.smallIcon}
                    source={require('../../images/Icon/chevron-right.png')}
                />
              </Pressable>
            </View>
          </View>

          <View style={styles.sectionInfo}>
            <View style={styles.info}>
              <View style={{height: 40, justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Image
                    style={styles.smallIcon}
                    source={require('../../images/Icon/Voucher-line.png')}
                />
              </View>
              <View style={{height: 40, justifyContent: 'center', flex: 5}}>
                <Text style={{fontWeight: 'bold'}}>Voucher của tôi</Text>
              </View>
              <View style={{height: 40, justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Image
                    style={styles.smallIcon}
                    source={require('../../images/Icon/chevron-right.png')}
                />
              </View>
            </View>
            <View style={styles.info}>
              <View style={{height: 40, justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Image
                    style={styles.smallIcon}
                    source={require('../../images/Icon/History-line.png')}
                />
              </View>
              <View style={{height: 40, justifyContent: 'center', flex: 5}}>
                <Text style={{fontWeight: 'bold'}}>Lịch sử đặt hẹn</Text>
              </View>
              <View style={{height: 40, justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Image
                    style={styles.smallIcon}
                    source={require('../../images/Icon/chevron-right.png')}
                />
              </View>
            </View>
            <View style={styles.info}>
              <View style={{height: 40, justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Image
                    style={styles.smallIcon}
                    source={require('../../images/Icon/bookmark-line.png')}
                />
              </View>
              <View style={{height: 40, justifyContent: 'center', flex: 5}}>
                <Text style={{fontWeight: 'bold'}}>Đã lưu</Text>
              </View>
              <View style={{height: 40, justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Image
                    style={styles.smallIcon}
                    source={require('../../images/Icon/chevron-right.png')}
                />
              </View>
            </View>
            <View style={styles.info}>
              <View style={{height: 40, justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Image
                    style={styles.smallIcon}
                    source={require('../../images/Icon/share-line.png')}
                />
              </View>
              <View style={{height: 40, justifyContent: 'center', flex: 5}}>
                <Text style={{fontWeight: 'bold'}}>Chia sẽ bạn bè</Text>
              </View>
              <View style={{height: 40, justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Image
                    style={styles.smallIcon}
                    source={require('../../images/Icon/chevron-right.png')}
                />
              </View>
            </View>
          </View>

          <View style={styles.sectionInfo}>
            <View style={styles.info}>
              <View style={{height: 40, justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Image
                    style={styles.smallIcon}
                    source={require('../../images/Icon/Support-line.png')}
                />
              </View>
              <View style={{height: 40, justifyContent: 'center', flex: 5}}>
                <Text style={{fontWeight: 'bold'}}>Trung tâm trợ giúp</Text>
              </View>
              <View style={{height: 40, justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Image
                    style={styles.smallIcon}
                    source={require('../../images/Icon/chevron-right.png')}
                />
              </View>
            </View>
            <View style={styles.info}>
              <View style={{height: 40, justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Image
                    style={styles.smallIcon}
                    source={require('../../images/Icon/Policy.png')}
                />
              </View>
              <View style={{height: 40, justifyContent: 'center', flex: 5}}>
                <Text style={{fontWeight: 'bold'}}>Chính sách bảo mật</Text>
              </View>
              <View style={{height: 40, justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Image
                    style={styles.smallIcon}
                    source={require('../../images/Icon/chevron-right.png')}
                />
              </View>
            </View>
            <View style={styles.info}>
              <View style={{height: 40, justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Image
                    style={styles.smallIcon}
                    source={require('../../images/Icon/Mail.png')}
                />
              </View>
              <View style={{height: 40, justifyContent: 'center', flex: 5}}>
                <Text style={{fontWeight: 'bold'}}>Thông tin liên hệ</Text>
              </View>
              <View style={{height: 40, justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Image
                    style={styles.smallIcon}
                    source={require('../../images/Icon/chevron-right.png')}
                />
              </View>
            </View>
            <View style={styles.info}>
              <View style={{height: 40, justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Image
                    style={styles.smallIcon}
                    source={require('../../images/Icon/Info.png')}
                />
              </View>
              <View style={{height: 40, justifyContent: 'center', flex: 5}}>
                <Text style={{fontWeight: 'bold'}}>Giới thiệu</Text>
              </View>
              <View style={{height: 40, justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Image
                    style={styles.smallIcon}
                    source={require('../../images/Icon/chevron-right.png')}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.logoutPart}>
        <Button mode="contained" style={{width: '50%'}} onPress={logoutFnc}>Đăng xuất</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoPart: {
    flex: 2,
    paddingRight: 5,
    paddingLeft: 5,
    flexDirection: 'row',
    alignItems: 'center'
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
    height: 20,
    width: 20,
  }
});

export default UserInfoPage