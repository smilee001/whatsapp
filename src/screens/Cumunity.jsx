import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Comunitity = () => {
    return (
        <>
            <ScrollView style={{ flex: 1, backgroundColor: '#202020' }}>
                <View style={{ flex: 1, flexDirection: 'column', gap: 8, backgroundColor: '#202020' }}>
                    <View style={[style.chatrow, { backgroundColor: '#1B1B1B' }]}>

                        <View style={style.iconcvr}>
                            <Icon style={{ fontSize: 30 }} name='users' />
                            <View style={style.plus}>
                                <Icon style={style.plusicon} name='plus-square' />
                            </View>
                        </View>

                        <Text style={style.name}>New community</Text>
                    </View>

                    <View style={{ backgroundColor: '#1B1B1B' }}>
                        <View style={[style.chatrow, { borderBottomColor: '#202020', borderBottomWidth: 1 }]}>
                            <Image style={style.iconcvr} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5tgHJF5TTODq1MuzTOCN4hHxFYwWKiPVW0Q&usqp=CAU' }}></Image>
                            <Text style={style.name}>NK World Infotech</Text>
                        </View>
                        <View style={{ paddingHorizontal: 13 }}>
                            <View style={style.chatrow2}>
                                <View style={[style.iconcvr, { backgroundColor: '#82DEB8' }]}>
                                    <Icon style={{ fontSize: 30, color: '#008069' }} name='bullhorn' />
                                </View>
                                <View style={style.namecoloumn2}>
                                    <Text style={style.name2}>Announcements</Text>
                                    <Text style={style.messaage2}>~ Hello Everyone, Welocme to...</Text>
                                </View>
                                <View style={style.namecoloumn4}>
                                    <Text style={[style.time2, { color: 'silver' }]}>3/7/24</Text>
                                </View>
                            </View>
                            <View style={style.chatrow2}>
                                <Image style={style.image2} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKU4uI7xe5U0QpjaYcCcLaDiTUBscyU0NVJbxoQw9KDj7S2iBfVK2zfGh86tm2kqHr0Ko&usqp=CAU' }}></Image>
                                <View style={style.namecoloumn2}>
                                    <Text style={style.name2}>FLUTTER DEVELOPER</Text>
                                    <Text style={style.messaage2}>~ Hello Everyone, Welocme</Text>
                                </View>
                                <View style={style.namecoloumn3}>
                                    <Text style={style.time2}>2:01 PM</Text>
                                    <View style={style.mnumber2}></View>
                                </View>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                                <Icon style={[style.viewcvr, { fontSize: 30 }]} name='angle-right' />
                                <Text style={style.messaage2}>View all</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ backgroundColor: '#1B1B1B' }}>
                        <View style={[style.chatrow, { borderBottomColor: '#202020', borderBottomWidth: 1 }]}>
                            <Image style={style.iconcvr} source={{ uri: 'https://i.pinimg.com/originals/5c/b1/3a/5cb13a66a29f8362d0e76d987dd09358.jpg' }}></Image>
                            <Text style={style.name}>COCA COLA</Text>
                        </View>
                        <View style={{ paddingHorizontal: 13 }}>
                            <View style={style.chatrow2}>
                                <View style={[style.iconcvr, { backgroundColor: '#82DEB8' }]}>
                                    <Icon style={{ fontSize: 30, color: '#008069' }} name='bullhorn' />
                                </View>
                                <View style={style.namecoloumn2}>
                                    <Text style={style.name2}>Announcements</Text>
                                    <Text style={style.messaage2}>~ Hello Everyone, Welocme to...</Text>
                                </View>
                                <View style={style.namecoloumn4}>
                                    <Text style={[style.time2, { color: 'silver' }]}>3/7/24</Text>
                                </View>
                            </View>
                            <View style={style.chatrow2}>
                                <Image style={style.image2} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjWt6Zr5Ptq7leOTp4U91HQNs6JzqMhfMtNbitPiGbqjOKjyCAWYqusGfMz5fJvAgQr2E&usqp=CAU' }}></Image>
                                <View style={style.namecoloumn2}>
                                    <Text style={style.name2}>COCA COLA Packing</Text>
                                    <Text style={style.messaage2}>~ Hello Everyone, Welocme</Text>
                                </View>
                                <View style={style.namecoloumn3}>
                                    <Text style={style.time2}>2:01 PM</Text>
                                    <View style={style.mnumber2}></View>
                                </View>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                                <Icon style={[style.viewcvr, { fontSize: 30 }]} name='angle-right' />
                                <Text style={style.messaage2}>View all</Text>
                            </View>
                        </View>
                    </View>
                </View >
            </ScrollView>
        </>
    )
}

const style = StyleSheet.create({

    chatrow: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 13
    },
    chatrow4: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
        paddingVertical: 15
    },

    iconcvr: {
        width: 55,
        height: 55,
        backgroundColor: '#202020',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    viewcvr: {
        width: 55,
        height: 55,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'silver'
    },

    plus: {
        position: 'absolute',
        bottom: -2,
        right: -2,
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


    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },

    chatrow2: {
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },

    image2: {
        width: 55,
        height: 55,
        borderRadius: 50,
        marginRight: 10
    },

    namecoloumn2: {
        marginLeft: 5,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
    },

    namecoloumn3: {
        display: 'flex',
        flexDirection: 'column',
        gap: 13,
        alignItems: 'flex-end',
        padding: 5,
    },

    namecoloumn4: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 13,
        alignItems: 'flex-end',
        padding: 5,
    },

    name2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },

    messaage2: {
        fontSize: 16,
        width: 255,
        color: 'silver'
    },

    time2: {
        fontSize: 15,
        fontWeight: '500',
        color: '#69DF91'
    },

    mnumber2: {
        borderRadius: 20,
        width: 10,
        height: 10,
        backgroundColor: '#69DF91'
    }
})

export default Comunitity