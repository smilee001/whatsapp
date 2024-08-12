import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import DATA from "../../data/data";
import { SelectCountry } from 'react-native-element-dropdown';
import { useState } from "react";

const local_data = [
    {
        value: '1',
        lable: 'Country 1',
        image: {
            uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
        },
    },
    {
        value: '2',
        lable: 'Country 2',
        image: {
            uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
        },
    },
    {
        value: '3',
        lable: 'Country 3',
        image: {
            uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
        },
    },
    {
        value: '4',
        lable: 'Country 4',
        image: {
            uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
        },
    },
    {
        value: '5',
        lable: 'Country 5',
        image: {
            uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
        },
    },
];


const Setting = () => {

    const [country, setCountry] = useState('1');

    return (
        <>
            <View style={{ flex: 1, backgroundColor: '#1B1B1B', paddingHorizontal: 15 }}>

                <View style={style.chatrow}>
                    <View style={style.imgcvr}>
                        <Image style={style.image} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/565/565717.png' }}></Image>
                    </View>
                    <View style={style.namecoloumn}>
                        <Text style={style.name}>Create call link</Text>
                        <Text style={style.messaage}>Share a link for your WhatsApp call</Text>
                    </View>
                </View>

                <Text style={{ fontSize: 17, color: '#fdfdfd', letterSpacing: 0.2, paddingLeft: 3, marginBottom: 10 }}>Recent</Text>

                <FlatList
                    data={DATA}
                    renderItem={({ item }) =>
                        <View style={style.chatrow3}>
                            <Image style={style.image2} source={{ uri: item.image }}></Image>
                            <View style={style.chatrow2}>
                                <View style={style.namecoloumn}>
                                    <Text style={style.name}>{item.name}</Text>
                                    <Text style={style.messaage}>{item.statustime}</Text>
                                </View>
                                <Icon style={style.icon} name={item.icon} />
                            </View>
                        </View>
                    } />

            </View>
        </>
    )
}

const style = StyleSheet.create({

    chatrow: {
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
        marginVertical: 20,
    },

    chatrow3: {
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
        marginVertical: 10,
    },

    chatrow2: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 5
    },

    imgcvr: {
        width: 57,
        height: 57,
        borderRadius: 50,
        marginRight: 5,
        backgroundColor: '#008069',
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        width: 30,
        height: 30
    },
    image2: {
        width: 55,
        height: 55,
        borderRadius: 50,
        marginRight: 5,
        backgroundColor: '#008069',
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
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },

    messaage: {
        fontSize: 16,
        width: 255,
        color: 'silver'
    },

    icon: {
        fontSize: 25,
        color: '#008069'
    }
})


export default Setting