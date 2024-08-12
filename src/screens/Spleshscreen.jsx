import { Image, Text, View } from "react-native";

const SplashScreen = () => {
    return (
        <>
            <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>

                <View></View>
                <Image style={{ width: 100, height: 100 }}
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png' }}></Image>

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 35
                }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>from</Text>
                    <Text style={{ fontSize: 22, letterSpacing: 6, fontWeight: 'bold', color: '#03DA1C' }}>FACEBOOK</Text>
                </View>
            </View>
        </>
    )
}

export default SplashScreen;