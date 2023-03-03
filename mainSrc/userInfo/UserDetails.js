import { View, Text, StyleSheet, Pressable, Image, ScrollView, Modal, TextInput } from 'react-native'
import React, {useState, useEffect}  from 'react'
import { Avatar, Button/* , Modal  */} from 'react-native-paper';
import { Dialog, Portal, Provider } from 'react-native-paper';
import { Utils } from '../utils/Utils';
import { AppWs } from '../webservices/AppWs';


const UserDetails = (props = {}) => {

    const {setEnterInfoDetail, userData, setUserData, logoutFnc} = props;
    const {fullName, point, userName, password, sex, dateOfBirth, phoneNumber, email} = userData;
    const [X1 = '', X2 = ''] = fullName.split(' ');

    const [showChangePopup, setShowChangePopup] = useState(false);
    const [changedTitle, setChangedTitle] = useState('');
    const [changedField, setChangedField] = useState(null);
    const [newValue, setNewValue] = useState('');
    const [newFullName, setNewFullName] = useState(fullName);
    const [newSex, setNewSex] = useState(sex);
    const [newDoB, setNewDoB] = useState(dateOfBirth);
    const [newPhoneNum, setNewPhoneNum] = useState(phoneNumber);
    const [newEmail, setNewEmail] = useState(email);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newRePassword, setNewRePassword] = useState('');

    const clickToChange = (field) => {
        setShowChangePopup(true);
        setChangedField(field);
        switch(field){
            case 'fullName': 
                setChangedTitle('Chỉnh sửa tên');
                setNewValue(fullName);
                break;
            case 'sex': 
                setChangedTitle('Đổi giới tính');
                setNewValue(sex);
                break;
            case 'password': 
                setChangedTitle('Đổi mật khẩu');
                setNewValue(password);
                break;
            case 'dateOfBirth': 
                setChangedTitle('Đổi ngày sinh');
                setNewValue(dateOfBirth);
                break;
            case 'phoneNumber': 
                setChangedTitle('Đổi số điện thoại');
                setNewValue(phoneNumber);
                break;
            case 'email': 
                setChangedTitle('Đổi email');
                setNewValue(email);
                break;
            default:
                break;
        }
    }
    const changeAvatar = f => { console.log(`change avatar`)};
    const changeUserInfo = (field, value) => {
        if (Utils.isEmpty(field) || Utils.isEmpty(value)) return;
        let newUserData = undefined;
        switch(field){
            case 'fullName': 
                newUserData = {...userData, fullName: value};
                break;
            case 'sex': 
                newUserData = {...userData, sex: value};
                break;
            case 'password': 
                newUserData = {...userData, password: value};
                break;
            case 'dateOfBirth': 
                newUserData = {...userData, dateOfBirth: value};
                break;
            case 'phoneNumber': 
                newUserData = {...userData, phoneNumber: value};
                break;
            case 'email': 
                newUserData = {...userData, email: value};
                break;
            default:
                break;
        }
        AppWs.putUserData(newUserData, ()=>{
            setUserData(newUserData);
            setShowChangePopup(false);
            setChangedField(null);
        }, f=>f)
    }
    const cancelChange = ()=> {
        setShowChangePopup(false);
        setChangedField(null);
    }

    let changedPopup = (
        <Portal>
          <Dialog visible={showChangePopup} onDismiss={cancelChange} >
            <Dialog.Title>{changedTitle}</Dialog.Title>
            <Dialog.Content>
                {
                    (changedField == 'fullName') && (
                        <TextInput
                            style={styles.input}
                            placeholder="Họ và tên"
                            onChangeText={e => { setNewFullName(e); setNewValue(e); }}
                            value={newFullName}
                        />
                    )
                }
                {
                    (changedField == 'sex') && (
                        <TextInput
                            style={styles.input}
                            placeholder="Đổi giới tính"
                            onChangeText={e => { setNewSex(e); setNewValue(e); }}
                            value={newSex}
                        />
                    )
                }
                {
                    (changedField == 'password') && (
                        <React.Fragment>
                            <TextInput
                                style={styles.input}
                                placeholder="Mật khẩu hiện tại"
                                onChangeText={e => { setOldPassword(e);}}
                                value={oldPassword}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Mật khẩu mới"
                                onChangeText={e => { setNewPassword(e); setNewValue(e == newRePassword ? e : password); }}
                                value={newPassword}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Nhập lại mật khẩu mới"
                                onChangeText={e => { setNewRePassword(e); setNewValue(e == newPassword ? e : password); }}
                                value={newRePassword}
                            />
                        </React.Fragment>
                    )
                }    
                {
                    (changedField == 'dateOfBirth') && (
                        <TextInput
                        style={styles.input}
                        placeholder="Nhập ngày sinh"
                        onChangeText={e => { setNewDoB(e); setNewValue(e); }}
                        value={newDoB}
                    />
                    )
                }
                {
                    (changedField == 'phoneNumber') && (
                        <TextInput
                            style={styles.input}
                            placeholder="Nhập số điện thoại"
                            onChangeText={e => { setNewPhoneNum(e); setNewValue(e); }}
                            value={newPhoneNum}
                        />
                    )
                }
                {
                    (changedField == 'email') && (
                        <TextInput
                            style={styles.input}
                            placeholder="Nhập Email"
                            onChangeText={e => { setNewEmail(e); setNewValue(e); }}
                            value={newEmail}
                        />
                    )
                }
            </Dialog.Content>
            <Dialog.Actions>
                <Button mode="contained" style={{width: '50%'}} onPress={()=> changeUserInfo(changedField, newValue)}>Áp dụng</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
    );

  return (
    <View style={styles.container}>
    <Provider>
    {changedPopup}
      <View style={styles.infoPart}>
        <View style={{flex: 1}}>
            <Pressable
                onPress={()=> setEnterInfoDetail(false)}>
                <Image
                style={styles.messageIcon}
                source={require('../../images/Icon/chevron-left.png')}
                />
            </Pressable>
        </View>
        <View style={{flex: 8}}><Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Thông tin tài khoản</Text></View>
        <View style={{flex: 1}}></View>
      </View>

      <View style={styles.detailPart}>
        <View style={{flex: 1}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Avatar.Text size={50} label={`${X1.charAt(0).toUpperCase()}${X2.charAt(0).toUpperCase()}`} /></View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                <Pressable
                    onPress={changeAvatar}>
                    <Image
                    style={styles.smallIcon}
                    source={require('../../images/Icon/Pen.png')}
                    />
                </Pressable>
                <Text style={{fontSize: 12, fontWeight: 'bold', textAlign: 'center', marginLeft: 10}}>Thây đổi ảnh đại diện</Text>
            </View>
        </View>
        <View style={{flex: 4}}>
            <ScrollView style={styles.scrollViewInfo}>
                <View style={styles.sectionInfo}>
                    <View style={styles.info}>
                        <View style={{height: 40, justifyContent: 'center', flex: 5}}>
                            <Text style={{fontWeight: 'bold'}}>Thành viên vàng</Text>
                        </View>
                        <View style={{height: 40, justifyContent: 'center', flex: 5}}>
                            <Text style={{fontWeight: 'bold', textAlign: 'right', color: '#BFBFBF'}}>{`${point} điểm`}</Text>
                        </View>
                        <View style={{height: 40, justifyContent: 'center', alignItems: 'center', flex: 1}}>
                            <Image
                                style={styles.smallIcon}
                                source={require('../../images/Icon/chevron-right.png')}
                            />
                        </View>
                    </View>
                    <View style={styles.info}>
                        <View style={{height: 40, justifyContent: 'center', flex: 5}}>
                            <Text style={{fontWeight: 'bold'}}>Tên</Text>
                        </View>
                        <View style={{height: 40, justifyContent: 'center', flex: 5}}>
                            <Text style={{fontWeight: 'bold', textAlign: 'right', color: '#BFBFBF'}}>{`${Utils.toTitleCase(fullName)}`}</Text>
                        </View>
                        <View style={{height: 40, justifyContent: 'center', alignItems: 'center', flex: 1}}>
                            <Pressable onPress={()=> clickToChange('fullName')}>
                                <Image
                                    style={styles.smallIcon}
                                    source={require('../../images/Icon/chevron-right.png')}
                                />
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.info}>
                        <View style={{height: 40, justifyContent: 'center', flex: 5}}>
                            <Text style={{fontWeight: 'bold'}}>Giới tính</Text>
                        </View>
                        <View style={{height: 40, justifyContent: 'center', flex: 5}}>
                            <Text style={{fontWeight: 'bold', textAlign: 'right', color: '#BFBFBF'}}>{`${Utils.toTitleCase(sex)}`}</Text>
                        </View>
                        <View style={{height: 40, justifyContent: 'center', alignItems: 'center', flex: 1}}>
                            <Pressable onPress={()=> clickToChange('sex')}>
                                <Image
                                    style={styles.smallIcon}
                                    source={require('../../images/Icon/chevron-right.png')}
                                />
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.info}>
                        <View style={{height: 40, justifyContent: 'center', flex: 5}}>
                            <Text style={{fontWeight: 'bold'}}>Ngày sinh</Text>
                        </View>
                        <View style={{height: 40, justifyContent: 'center', flex: 5}}>
                            <Text style={{fontWeight: 'bold', textAlign: 'right', color: '#BFBFBF'}}>{`${dateOfBirth}`}</Text>
                        </View>
                        <View style={{height: 40, justifyContent: 'center', alignItems: 'center', flex: 1}}>
                            <Pressable onPress={()=> clickToChange('dateOfBirth')}>
                                <Image
                                    style={styles.smallIcon}
                                    source={require('../../images/Icon/chevron-right.png')}
                                />
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.info}>
                        <View style={{height: 40, justifyContent: 'center', flex: 5}}>
                            <Text style={{fontWeight: 'bold'}}>Điện thoại</Text>
                        </View>
                        <View style={{height: 40, justifyContent: 'center', flex: 5}}>
                            <Text style={{fontWeight: 'bold', textAlign: 'right', color: '#BFBFBF'}}>{`${phoneNumber}`}</Text>
                        </View>
                        <View style={{height: 40, justifyContent: 'center', alignItems: 'center', flex: 1}}>
                            <Pressable onPress={()=> clickToChange('phoneNumber')}>
                                <Image
                                    style={styles.smallIcon}
                                    source={require('../../images/Icon/chevron-right.png')}
                                />
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.info}>
                        <View style={{height: 40, justifyContent: 'center', flex: 5}}>
                            <Text style={{fontWeight: 'bold'}}>Email</Text>
                        </View>
                        <View style={{height: 40, justifyContent: 'center', flex: 5}}>
                            <Text style={{fontWeight: 'bold', textAlign: 'right', color: '#BFBFBF'}}>{`${email}`}</Text>
                        </View>
                        <View style={{height: 40, justifyContent: 'center', alignItems: 'center', flex: 1}}>
                            <Pressable onPress={()=> clickToChange('email')}>
                                <Image
                                    style={styles.smallIcon}
                                    source={require('../../images/Icon/chevron-right.png')}
                                />
                            </Pressable>
                        </View>
                    </View>
                </View>
                <View style={styles.sectionInfo}>
                    <View style={styles.info}>
                        <View style={{height: 40, justifyContent: 'center', flex: 5}}>
                            <Text style={{fontWeight: 'bold'}}>Tài khoản liên kết</Text>
                        </View>
                        <View style={{height: 40, justifyContent: 'center', flex: 5}}>
                            
                        </View>
                        <View style={{height: 40, justifyContent: 'center', alignItems: 'center', flex: 1}}>
                            <Image
                                style={styles.smallIcon}
                                source={require('../../images/Icon/chevron-right.png')}
                            />
                        </View>
                    </View>
                    <View style={styles.info}>
                        <View style={{height: 40, justifyContent: 'center', flex: 5}}>
                            <Text style={{fontWeight: 'bold'}}>Thây đổi mật khẩu</Text>
                        </View>
                        <View style={{height: 40, justifyContent: 'center', flex: 5}}>
                            
                        </View>
                        <View style={{height: 40, justifyContent: 'center', alignItems: 'center', flex: 1}}>
                            <Pressable onPress={()=> clickToChange('password')}>
                                <Image
                                    style={styles.smallIcon}
                                    source={require('../../images/Icon/chevron-right.png')}
                                />
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
      </View>
      <View style={styles.logoutPart}>
        <Button mode="contained" style={{width: '50%'}} onPress={logoutFnc}>Đăng xuất</Button>
      </View>
      </Provider>
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
      height: 15,
      width: 15,
    }
  });

export default UserDetails