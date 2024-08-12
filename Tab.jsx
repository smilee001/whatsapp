import { NavigationContainer } from "@react-navigation/native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Home from "./src/screens/Chats";
import Setting from "./src/screens/Call";
import Contact from "./src/screens/Updates";
import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Comunitity from "./src/screens/Cumunity";

const TabScreen = () => {

    const Tab = createMaterialTopTabNavigator();

    return (
        <>
            <View style={style.frow}>
                <Text style={style.name}>WhatsApp</Text>
                <View style={style.iconrow}>
                    <Icon style={style.icon} name='camera' />
                    <Icon style={style.icon} name='search' />
                    <Icon style={style.icon2} name='ellipsis-v' />
                </View>
            </View>

            <Tab.Navigator
                initialRouteName="Chats"
                screenOptions={{
                    tabBarLabelStyle: { fontSize: 18, fontWeight: '500', color: '#fff', textTransform: 'none', letterSpacing: 0.5 },
                    tabBarStyle: { backgroundColor: '#008069' },
                }}>

                <Tab.Screen name="Cumunity" component={Comunitity}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: () => (
                            <Icon name='users' size={22} />
                        )
                    }} />
                <Tab.Screen name="Chats" component={Home} />
                <Tab.Screen name="Updates" component={Contact} />
                <Tab.Screen name="Calls" component={Setting} />
            </Tab.Navigator>

            <View style={style.fixicon}>
                <Icon style={style.cameraicon} name='camera' />
            </View>
        </>
    )
}

// const Cicon = () => {
//     return (
//         <Icon name='camera' />
//     )
// }

const style = StyleSheet.create({

    frow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#008069',
        padding: 20
    },

    name: {
        fontSize: 23,
        color: '#fff',
        fontWeight: '500',
        letterSpacing: 1
    },

    iconrow: {
        width: 110,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    icon: {
        fontSize: 23,
        color: '#000'
    },

    icon2: {
        fontSize: 23,
        color: '#fff'
    },

    fixicon: {
        position: 'absolute',
        width: 60,
        height: 60,
        bottom: 18,
        right: 18,
        backgroundColor: '#008069',
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    cameraicon: {
        fontSize: 23,
        color: '#000'
    }

})
export default TabScreen;