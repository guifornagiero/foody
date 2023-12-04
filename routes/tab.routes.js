import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import RecipesScreen from "../screens/RecipesScreen"
import NewRecipeScreen from "../screens/NewRecipeScreen"
import { Ionicons, Entypo } from "@expo/vector-icons"
import colors from "../public/colors"

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="recipes"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="recipes"
        component={RecipesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="fast-food" size={size} color={color} />
          ),
          tabBarLabel: "Receitas",
          tabBarLabelStyle: {
            fontSize: 15
          },
          tabBarActiveTintColor: colors.primary,
          tabBarActiveBackgroundColor: colors.light_primary
        }}
      />
      <Tab.Screen
        name="new-recipes"
        component={NewRecipeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="new-message" size={size} color={color} />
          ),
          tabBarLabel: "Nova receita",
          tabBarLabelStyle: {
            fontSize: 15
          },
          tabBarActiveTintColor: colors.primary,
          tabBarActiveBackgroundColor: colors.light_primary
        }}
      />
    </Tab.Navigator>
  )
}
