import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Platform,
  Text,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

export default function GetStarted({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Image
        source={require(".././assets/Images/get.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={styles.gradient}
      />
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.title}>
          You want{"\n"}Authentic,here{"\n"}you go!
        </Text>
        <View style={styles.orContainer}>
          <Text style={styles.Text}>Find it here,buy it now!</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.push("HomePage")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  orContainer: {
    marginTop: 20,
    alignItems: "center",
    width: "100%",
  },
  Text: {
    fontSize: 15,
    fontFamily: "outfit-Regular",
    color: "#fff",
    marginBottom: 30,
    
  },
  title: {
    color: "#fff",
    fontSize: 40,
    textAlign: "center",
    marginTop: 580,
    
    fontFamily: "outfit-SemiBold",
  },
  container: {
    flex: 1,
  },
  image: {
    width: width,
    height: Platform.OS === "ios" ? height : height + StatusBar.currentHeight,
    position: "absolute",
    top: 0,
    left: 0,
  },
  safeArea: {
    flex:1,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: height * 0.6, // Adjust this value to control the height of the gradient
  },
  button: {
    backgroundColor: "#F83758",
    padding: 17,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 25,
    fontFamily: "outfit-SemiBold",
  },
});
