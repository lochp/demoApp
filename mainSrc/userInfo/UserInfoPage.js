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

  if (enterInfoDetail) return <UserDetails setEnterInfoDetail={setEnterInfoDetail} userData={userData} setUserData={setUserData} logoutFnc={logoutFnc} />

  return (
    <View style={styles.container}>
      <View style={styles.infoPart}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Avatar.Text size={50} label={`${X1.charAt(0).toUpperCase()}${X2.charAt(0).toUpperCase()}`} /></View>
        <View style={{flex: 3}}>
          <Text style={styles.nameStyle}>{fullName}</Text>
          <Text style={styles.ratingStyle}>Gold member</Text>
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
              <Text style={{fontWeight: 'bold'}}>Th??ng tin t??i kho???n</Text>
              <Text>Xem v?? ch???nh s???a th??ng tin t??i kho???n</Text>
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
                <Text style={{fontWeight: 'bold'}}>Voucher c???a t??i</Text>
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
                <Text style={{fontWeight: 'bold'}}>L???ch s??? ?????t h???n</Text>
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
                <Text style={{fontWeight: 'bold'}}>???? l??u</Text>
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
                <Text style={{fontWeight: 'bold'}}>Chia s??? b???n b??</Text>
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
                <Text style={{fontWeight: 'bold'}}>Trung t??m tr??? gi??p</Text>
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
                <Text style={{fontWeight: 'bold'}}>Ch??nh s??ch b???o m???t</Text>
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
                <Text style={{fontWeight: 'bold'}}>Th??ng tin li??n h???</Text>
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
                <Text style={{fontWeight: 'bold'}}>Gi???i thi???u</Text>
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
        <Button mode="contained" style={{width: '50%'}} onPress={logoutFnc}>????ng xu???t</Button>
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