import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./Components/WelcomeScreen";
import SplashScreen from "./Components/SplashScreen";
import Login from "./Components/Login";
import Signin from "./Components/Sign-in";
import ForgetPassword from "./Components/ForgetPassword";
import GetStarted from "./Components/GetStarted";
import HomePage from "./Components/HomePage";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    outfit: require("./assets/fonts/Montserrat-Italic-VariableFont_wght.ttf"),
    "outfit-Medium": require("./assets/fonts/Montserrat-VariableFont_wght.ttf"),
    "outfit-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "outfit-ExtraBold": require("./assets/fonts/Montserrat-ExtraBold.ttf"),
    "outfit-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "outfit-Regular": require("./assets/fonts/Montserrat-Regular.ttf")
  });

  if (!fontsLoaded) {
    return null; // Or a loading indicator
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
         
          <Stack.Screen
            name="Signin"
            component={Signin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgetPassword"
            component={ForgetPassword}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="GetStarted"
            component={GetStarted}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
