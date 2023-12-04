import { NavigationContainer, TabRouter } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from "../screens/LoginScreen"
import RegisterScreen from "../screens/RegisterScreen"
import TabRoutes from "./tab.routes"

const Tab = createNativeStackNavigator()

export default function StackRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Register" component={RegisterScreen} />
        <Tab.Screen name="App" component={TabRoutes} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
