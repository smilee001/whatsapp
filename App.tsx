import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabScreen from "./Tab"
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./src/screens/Spleshscreen";
import { useEffect, useState } from "react";
import MessageHeader from "./Messageheader";
import Messagescreen from "./src/screens/Messagescreen";
import StatusScreen from "./src/screens/StatusScreen";
import StatusHeader from "./Statusheader";

const App = () => {

  const Stack = createNativeStackNavigator();

  const [issplash, setIsSpalsh] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSpalsh(false);
    }, 2000);
  })

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {issplash ? (
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : null}
          <Stack.Screen name="Tab" component={TabScreen} />
          <Stack.Screen options={{
            headerShown: true,
            headerBackVisible: false,
            headerTitle: () => <MessageHeader />,
            headerStyle: { backgroundColor: '#00775C' }
          }} name="Messagescreen" component={Messagescreen} />
          <Stack.Screen options={{
            headerShown: true,
            headerBackVisible: false,
            headerTitle: () => <StatusHeader />,
            headerStyle: {
              backgroundColor: '#000'
            }
          }} name="StatusScreen" component={StatusScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App;