import React from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

const StatusScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' }}>
            <Image style={style.status} source={{ uri: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D' }}></Image>
            <View style={style.replybar}>
                <TextInput style={style.inputmessage} placeholder='Reply' placeholderTextColor="#ADADAD" ></TextInput>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    status: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },

    replybar: {
        position: 'absolute',
        bottom: 6,
        width: '97%',
        backgroundColor: '#0F0F0F',
        borderRadius: 50,
        paddingLeft: 15
    },

    inputmessage: {
        width: 225,
        fontSize: 18,
        fontWeight: '400',
        color: '#E0E1E2',
        paddingVertical: 12
    },

})
export default StatusScreen;
