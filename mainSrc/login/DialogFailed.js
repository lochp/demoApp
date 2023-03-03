import { View } from 'react-native'
import React from 'react';
import { Dialog, Portal, Provider, Text, Button } from 'react-native-paper';

const DialogFailed = (props = {}) => {
    const {isShowFailed, hideDialog} = props;
  return (
    <Provider>
            <View>
                <Portal>
                    <Dialog visible={isShowFailed} onDismiss={hideDialog}>
                        <Dialog.Title>Alert</Dialog.Title>
                        <Dialog.Content>
                        <Text variant="bodyMedium">Login Failed!</Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                        <Button onPress={hideDialog}>Ok</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
        </Provider>
  )
}

export default DialogFailed