import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

export default function Offer() {
  return (
    <View>
      <View style={styles.containerDeal}>
        <Image
          source={require(".././assets/Images/Rectangle 56.png")}
          style={styles.profileImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.carouselText1}>Special Offers </Text>
          <Text style={styles.Text}>We make sure you get the{'\n'}offer you need at best prices </Text>
        </View>
      </View>

      <View style={styles.containerDeal1}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: 100,
    height: 80,
    marginLeft: 15,
    marginTop: 8,
    marginBottom: 8,
  },
  containerDeal: {
    width: "100", // Set the width to 343
    height: 100, // Set the height to 60
    backgroundColor: "#fff",
    flexDirection: "row",
    // Rounded corners
  },
  textContainer: {
    flexDirection: "column", // This makes the texts stack vertically
    marginLeft: 15,
    justifyContent: "center", // Align the text vertically in the middle
  },
  containerDeal1: {
    width: "100", // Set the width to 343
    height: 170, // Set the height to 60
    backgroundColor: "#fff",
    marginTop: 20,
    flexDirection: "row", // Rounded corners
  },
  carouselText1: {
    fontFamily: "outfit-SemiBold",
    fontSize: 25,
    marginBottom: 5, // Added space between the two texts
  },
  Text: {
    fontFamily: "outfit-Regular",
    fontSize: 14,
    alignItems: "center",
  },
});
