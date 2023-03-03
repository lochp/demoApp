import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'

const DetailNews = (props = {}) => {

    const {notification, backToList} = props;
    console.log(notification)

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flex: 1}}>
            <Pressable
                onPress={backToList}>
                <Image
                style={styles.messageIcon}
                source={require('../../images/Icon/chevron-left.png')}
                />
            </Pressable>
        </View>
        <View style={{flex: 8}}><Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Chi tiết</Text></View>
        <View style={{flex: 1}}></View>
      </View>
      <View style={{flex: 1, paddingLeft: 10, paddingRight: 10}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{notification.title}</Text>
      </View>
      <View style={{flex: 7, paddingLeft: 10, paddingRight: 10}}>
        <Text>{notification.content}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    messageIcon: {
      height: 40,
      width: 40,
    },
    smallIcon: {
      height: 15,
      width: 15,
    }
  });

export default DetailNews