import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const MessageHeader = () => {

    const navigation = useNavigation();

    return (
        <View style={style.chatrow}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon style={style.icon} name='arrow-left' />
            </TouchableOpacity>
            <View style={style.chatrow1}>
                <Image style={style.image} source={{ uri: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg' }}></Image>
                <View style={style.chatrow2}>
                    <View style={style.namecoloumn}>
                        <Text style={style.name}>Me (You)</Text>
                        <Text style={style.messaage}>Message yourself</Text>
                    </View>
                    <View style={style.namecoloumn2}>
                        <Icon style={style.icon} name='ellipsis-v' />
                    </View>
                </View>
            </View>
        </View >
    )
}


const style = StyleSheet.create({

    chatrow: {
        width: '100%',
        height: 65,
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        marginLeft: -10,
    },

    chatrow1: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },

    chatrow2: {
        width: 310,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    image: {
        width: 42,
        height: 42,
        borderRadius: 50,
        marginRight: 10
    },

    namecoloumn: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
    },

    namecoloumn2: {
        display: 'flex',
        flexDirection: 'column',
        gap: 7,
        alignItems: 'flex-end',
        padding: 5,
        paddingBottom: 3
    },

    name: {
        fontSize: 22,
        color: '#fff'
    },

    messaage: {
        fontSize: 15,
        color: '#E1E1E1'
    },

    icon: {
        fontSize: 25,
        color: '#E1E1E1'
    }
})

export default MessageHeader;
