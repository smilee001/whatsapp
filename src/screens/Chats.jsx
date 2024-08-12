import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import DATA from "../../data/data";


const Chats = ({ navigation }) => {
    return (
        <>
            <View style={{ flex: 1, backgroundColor: '#1B1B1B', paddingHorizontal: 10, paddingTop: 5 }}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => navigation.navigate('Messagescreen')}>
                            <View style={style.chatrow}>
                                <Image style={style.image} source={{ uri: item.image }}></Image>
                                <View style={style.namecoloumn}>
                                    <Text style={style.name}>{item.name}</Text>
                                    <Text style={style.messaage}>{item.messaage}</Text>
                                </View>
                                <View style={style.namecoloumn2}>
                                    <Text style={style.time}>{item.time}</Text>
                                    <Text style={style.mnumber}>{item.mnumber}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                />
            </View>
        </>
    )
}

const style = StyleSheet.create({

    chatrow: {
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },

    image: {
        width: 55,
        height: 55,
        borderRadius: 50,
        marginRight: 10
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
    }
})

export default Chats