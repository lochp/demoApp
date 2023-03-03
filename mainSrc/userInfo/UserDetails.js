import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const UserDetails = () => {
  return (
    <View>
      <Text>UserDetails</Text>
    </View>
  )
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

export default UserDetails