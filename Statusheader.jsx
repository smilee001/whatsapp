import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ProgressBar from 'react-native-progress/Bar';

const StatusHeader = () => {

    const navigation = useNavigation();

    return (
        <View>
            <View style={style.progress}>
                <ProgressBar style={style.progressbar} progress={1} width={250} color={'#fff'} />
            </View>

            <View style={style.chatrow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon style={style.icon} name='arrow-left' />
                </TouchableOpacity>
                <View style={style.chatrow1}>
                    <Image style={style.image} source={{ uri: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg' }}></Image>
                    <View style={style.chatrow2}>
                        <View style={style.namecoloumn}>
                            <Text style={style.name}>Me (You)</Text>
                            <Text style={style.messaage}>Today, 1:39 PM</Text>
                        </View>
                        <View style={style.namecoloumn2}>
                            <Icon style={style.icon} name='ellipsis-v' />
                        </View>
                    </View>
                </View>
            </View >
        </View>
    )
}


const style = StyleSheet.create({

    progress: {
        backgroundColor: '#2D383E',
        marginLeft: '-4%',
        marginTop: 2
    },

    progressbar: {
        height: 2,
        borderWidth: 0,
        borderRadius: 0
    },

    chatrow: {
        width: '100%',
        height: 65,
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
        marginLeft: -5
    },

    chatrow1: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },

    chatrow2: {
        width: '78%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    image: {
        width: 45,
        height: 45,
        borderRadius: 50,
        marginRight: 15
    },

    namecoloumn: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
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
        fontSize: 21,
        color: '#fff'
    },

    messaage: {
        fontSize: 14.5,
        color: '#E1E1E1'
    },

    icon: {
        fontSize: 25,
        color: '#E1E1E1'
    }
})

export default StatusHeader;