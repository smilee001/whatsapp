import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import DATA from "../../data/data";

const Cdata = [
    {
        name: 'Chennai Super...',
        image: 'https://yt3.googleusercontent.com/Nt8wKzf7bK6j0aG6CDvymMoPnPbCEx0gnyMcOZDJuKYALlHUfVmEMhe7zaGDHwDjb7Fu9DrV8Q=s900-c-k-c0x00ffffff-no-rj'
    },
    {
        name: 'Apple',
        image: 'https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg'
    },
    {
        name: 'Chennai Super...',
        image: 'https://yt3.googleusercontent.com/Nt8wKzf7bK6j0aG6CDvymMoPnPbCEx0gnyMcOZDJuKYALlHUfVmEMhe7zaGDHwDjb7Fu9DrV8Q=s900-c-k-c0x00ffffff-no-rj'
    },
    {
        name: 'Apple',
        image: 'https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg'
    },
]

const Contact = ({ navigation }) => {
    return (
        <>
            <ScrollView>
                <View style={{ flex: 1, backgroundColor: '#1B1B1B', padding: 15, borderBottomColor: '#333333', borderWidth: 0.5 }}>
                    <View style={style.frow}>
                        <Text style={style.statustxt}>Status</Text>
                        <Icon style={style.moreicon} name='ellipsis-v' />
                    </View>

                    <View style={style.chatrow}>
                        <View style={style.imgview}>
                            <Image style={style.image} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-bLXQ5bRAq4VmZAUJQeplQd5EB-0am1v8VATwK2zI0bhLJMVTRC3KM8Ydl5rAJyFzCk&usqp=CAU' }}></Image>
                            <View style={style.plus}>
                                <Icon style={style.plusicon} name='plus-square' />
                            </View>
                        </View>
                        <View style={style.namecoloumn}>
                            <Text style={style.name}>My status</Text>
                            <Text style={style.messaage}>Tap to add status update</Text>
                        </View>
                    </View>

                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ color: '#777777', fontWeight: '500', letterSpacing: 0.5, fontSize: 15 }}>Recent updates</Text>
                    </View>

                    <FlatList
                        data={DATA}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => navigation.navigate('StatusScreen')}>
                                <View style={style.chatrow}>
                                    <View style={[style.imgview]}>
                                        <Image style={style.image2} source={{ uri: item.image }}></Image>
                                    </View>
                                    <View style={[style.namecoloumn, { gap: 2 }]}>
                                        <Text style={style.name}>{item.name}</Text>
                                        <Text style={style.messaage}>{item.statustime}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        } />

                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#777777', fontWeight: '500', letterSpacing: 0.5, fontSize: 15 }}>Recent updates</Text>
                        <Icon style={{ color: '#555555', fontSize: 20 }} name='angle-down' />
                    </View>
                </View >

                <View style={{ flex: 1, backgroundColor: '#1B1B1B', padding: 15 }}>

                    <View style={style.frow}>
                        <Text style={style.statustxt}>Channels</Text>
                        <Icon style={[style.moreicon, { color: '#999999' }]} name='plus-square-o' />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#777777', letterSpacing: 0.5, fontSize: 15, letterSpacing: 0.5, lineHeight: 20 }}>Stay updates on topics that matter to you. Find channels to follow below.</Text>
                    </View>

                    <View style={{ paddingVertical: 20 }}>

                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ gap: 10 }}
                            data={Cdata}
                            renderItem={({ item }) =>
                                <View style={style.channel}>
                                    <View>
                                        <Image style={[style.cimage]} source={{ uri: item.image }}></Image>
                                        <Image style={[style.ticimage]} source={{ uri: 'https://yt3.googleusercontent.com/4CcTAMxdM4f3wyHzGUZ1gUdZn-9dpNWd49k39eyO-Gzod5DFe6yBLzqWormoEjFOrdl17t8eN0U=s900-c-k-c0x00ffffff-no-rj' }}></Image>
                                    </View>
                                    <Text style={style.channelname}>{item.name}</Text>
                                    <View style={style.fbtn}>
                                        <Text style={style.fbtntxt}>Follow</Text>
                                    </View>
                                </View>
                            } />
                    </View>

                    <View style={style.expbtn}>
                        <Text style={style.expbtntxt}>Explore more</Text>
                    </View>

                </View>
            </ScrollView>

            <View style={style.fixicon}>
                <Icon style={style.cameraicon} name='pencil' />
            </View>
        </>
    )
}

const style = StyleSheet.create({

    frow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },

    statustxt: {
        fontSize: 22,
        fontWeight: '400',
        color: "#F7F7F7",
        letterSpacing: 1
    },

    moreicon: {
        fontSize: 25,
        color: '#777777'
    },

    chatrow: {
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        marginVertical: 10
    },

    imgview: {
        position: 'relative'
    },

    image: {
        width: 57,
        height: 57,
        borderRadius: 50,
        marginRight: 5
    },

    plus: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        height: 26,
        width: 26,
        borderRadius: 25,
        borderColor: '#fff',
        borderWidth: 1,
        backgroundColor: '#fff',
        overflow: 'hidden',
    },

    plusicon: {
        textAlign: 'center',
        fontSize: 25,
        color: '#008069'
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

    time: {
        fontSize: 15,
        fontWeight: '500',
        color: '#69DF91'
    },

    mnumber: {
        borderRadius: 20,
        paddingHorizontal: 6,
        fontSize: 14,
        backgroundColor: '#69DF91',
        color: '#1B1B1B',
        fontWeight: 'bold'
    },

    image2: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 5,
        borderWidth: 2.5,
        borderColor: '#69DF91'
    },

    fixicon: {
        position: 'absolute',
        width: 40,
        height: 40,
        bottom: 100,
        right: 28,
        backgroundColor: '#000',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    cameraicon: {
        fontSize: 20,
        color: '#008069'
    },

    channel: {
        width: 150,
        backgroundColor: '#1B1B1B',
        borderWidth: 1,
        borderColor: '#444444',
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 15,
        alignItems: 'center',
        paddingVertical: 10
    },

    cimage: {
        width: 65,
        height: 65,
        borderRadius: 50
    },

    ticimage: {
        position: 'absolute',
        bottom: -2,
        right: -2,
        width: 30,
        height: 30,
        borderRadius: 50
    },

    channelname: {
        width: '80%',
        fontSize: 16,
        letterSpacing: 0.2,
        color: '#fff',
        textAlign: 'center'
    },

    fbtn: {
        width: '85%',
        paddingVertical: 6,
        backgroundColor: '#E0F7E4',
        borderRadius: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    fbtntxt: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'green',
        letterSpacing: 0.5
    },

    expbtn: {
        width: '38%',
        paddingVertical: 11,
        marginTop: 10,
        marginBottom: 115,
        backgroundColor: '#008069',
        borderRadius: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    expbtntxt: {
        fontSize: 16.5,
        fontWeight: '500',
        color: '#fff',
        letterSpacing: 0.5
    }

})

export default Contact