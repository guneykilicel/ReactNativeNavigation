
import React, { useState } from "react"
import { Text, Button, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createDrawerNavigator } from "@react-navigation/drawer"

import Ionicons from "react-native-vector-icons/Ionicons"

const Profile = ({ navigation }) => {

  const [user, setUser] = useState('Güney')

  return (
    <View>
      <Text>You have to sign in ({user})</Text>
      <Button title="SignIn" onPress={() => {
        navigation.navigate("SignIn", user)
      }} />
      <Button title="SignUp" onPress={() => {
        navigation.navigate("SignUp")
      }} />
    </View>
  )
}

const SignIn = ({ navigation, route }) => {
  return <Text>SignIn {route.params} | {route.name}</Text>
}

const SignUp = () => {
  return <Text>SignUp</Text>
}

const Stack = createNativeStackNavigator();
const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="SignIn" component={SignIn} options={{ title: "Sign In" }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ title: "Sign Up" }} />
    </Stack.Navigator>
  )
}

const Home = () => {
  return <Text>Home</Text>
}

const Tabs = createBottomTabNavigator();
const MainTabs = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} options={{ tabBarIcon: (props) => <Ionicons name="ios-home" {...props} /> }} />
      <Tabs.Screen name="ProfileStack" component={ProfileStack} options={{
        title: "Profile",
        headerShown: false,
        tabBarIcon: (props) => <Ionicons name="ios-person" {...props} />
      }} />
    </Tabs.Navigator>
  )
}

const About = ()=> {
  return <Text>About</Text>
}

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="MainTabs" component={MainTabs} options={{title: "Main"}} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App