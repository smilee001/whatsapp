import React from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const Messagescreen = () => {
    return (
        <View style={style.main}>
            <View style={style.row}>
                <View style={style.inputtxt}>
                    <Icon style={style.icon} name='emoji-flirt' />
                    <TextInput style={style.inputmessage} placeholder='Message' placeholderTextColor="#ADADAD" ></TextInput>
                    <View style={style.iconrow}>
                        <Icon style={style.icon2} name='attachment' />
                        <Icon style={style.icon2} name='camera' />
                    </View>
                </View>

                <Image style={style.voiceicon} source={{ uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTXp6DXpwJP0Z4l74kRtBPEyfvOL7Cd42ei_k4CUAJ5nCxENSGW' }}></Image>

            </View>

        </View>
    )
}

const style = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: '#0A1B24'
    },

    row: {
        position: 'absolute',
        bottom: 4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    inputtxt: {
        width: '85.5%',
        margin: 4,
        display: 'flex',
        flexDirection: 'row',
        gap: 7,
        alignItems: 'center',
        backgroundColor: '#2D383E',
        borderRadius: 25,
        paddingHorizontal: 10
    },

    icon: {
        fontSize: 25,
        color: '#6F6F6F'
    },
    icon2: {
        fontSize: 23,
        color: '#6F6F6F'
    },

    inputmessage: {
        width: 225,
        fontSize: 20,
        fontWeight: '400',
        color: '#E0E1E2'
    },

    iconrow: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15
    },

    voiceicon: {
        width: 49.5,
        height: 49.5,
        borderRadius: 50
    }

})

export default Messagescreen;
