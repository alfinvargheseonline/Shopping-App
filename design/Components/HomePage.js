import React, { useState, useRef } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  FlatList,
  Dimensions,
  ScrollView,
  StatusBar
} from "react-native";
import {Card, ListItem, Button,Rating } from 'react-native-elements'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import HamburgerIcon from ".././Components/Screen/Icon/HamburgerIcon";
import CardSlider from "./CardSlider";
import Offer from "./Offer";

const { width } = Dimensions.get("window");

const Header = () => {
  const insets = useSafeAreaInsets();
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleMenuPress = () => {
    // Handle opening the side navigation bar
  };

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  const optionImages = {
    Beauty: require(".././assets/Images/Beauty.png"),
    Fashion: require(".././assets/Images/fasion.png"),
    Kids: require(".././assets/Images/Kids.png"),
    Mens: require(".././assets/Images/Men.png"),
    Womens: require(".././assets/Images/Women.png"),
    Gifts: require(".././assets/Images/gift.png"),
  };

  const options = Object.keys(optionImages);

  const carouselImages = [
    require(".././assets/Images/Rectangle 48.png"),
    require(".././assets/Images/Rectangle 48.png"),
    require(".././assets/Images/Rectangle 48.png"),
  ];

  const renderCarouselItem = ({ item, index }) => (
    <View style={styles.carouselItemContainer}>
      <Image source={item} style={styles.image2} />
      <View style={styles.overlay}>
        <Text style={styles.carouselText}>50-40% OFF</Text>
        <Text style={styles.carouselText1}>
          Now in product{"\n"} All colours
        </Text>
        <TouchableOpacity style={styles.carouselButton}>
          <Text style={styles.buttonText}>Shop Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setCurrentIndex(index);
  };

  const renderDot = (index) => (
    <View
      key={index}
      style={[
        styles.dot,
        { backgroundColor: index === currentIndex ? "#FFA3B3" : "#A8A8A9" },
      ]}
    />
  );

  return (
    <ScrollView>
    <View style={[styles.container, { paddingTop: insets.top }]}>
    <StatusBar translucent backgroundColor="#fff" />
      <View style={styles.headerContainer}>
        <HamburgerIcon onPress={handleMenuPress} color="#000" size={30} />
        <View style={styles.logoContainer}>
          <Image
            source={require(".././assets/Images/logoipsum-255 1.png")}
            style={styles.logo}
          />
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Image
            source={require(".././assets/Images/iconimg.png")}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search any Product"
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.filterRow}>
        <Text style={styles.text}>All Featured</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            onPress={() => {
              /* Handle sort action */
            }}
            style={styles.iconButton}
          >
            <View style={styles.iconBackground}>
              <Text style={styles.iconText}>Sort</Text>
              <Icon name="swap-vertical" size={20} color="#000" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              /* Handle filter action */
            }}
            style={styles.iconButton}
          >
            <View style={styles.iconBackground}>
              <Text style={styles.iconText}>Filter</Text>
              <Icon name="filter-outline" size={20} color="#000" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            onPress={() => handleOptionPress(option)}
            style={styles.optionButton}
          >
            <Image
              source={optionImages[option]}
              style={[
                styles.optionImage,
                selectedOption === option && styles.selectedOptionImage,
              ]}
            />
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.container1}>
        <FlatList
          ref={flatListRef}
          data={carouselImages}
          renderItem={renderCarouselItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        />
      </View>
      <View style={styles.dotsContainer}>
        {carouselImages.map((_, index) => renderDot(index))}
      </View>

      <View style={styles.containerDeal}>
        <Text style={styles.carouselText2}>Deal of the Day</Text>
        <View style={styles.remainingTimeContainer}>
          <Icon
            name="alarm-outline"
            size={16}
            color="#fff"
            style={styles.alarmIcon}
          />
          <Text style={styles.carouselText3}>22h 55 m 20s remaining</Text>
        </View>
        <TouchableOpacity style={styles.carouselButton1}>
          <Text style={styles.buttonText1}>View all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <CardSlider/>
        </View>
        <Offer></Offer>
        <CardSlider/>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    paddingBottom: 10,
  },
  container2: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingBottom: 10,
    flexDirection: 'row'
  },
  containerDeal: {
    width: "100", // Set the width to 343
    height: 70, // Set the height to 60
    backgroundColor: "#4392F9",
    paddingBottom: 10, // Padding at the bottom
    borderRadius: 8,
    marginTop: 20,
    marginHorizontal: 10, // Rounded corners
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 44,
    marginLeft: 15,
  },
  profileImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "#fff",
  },
  profileButton: {
    padding: 8,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 0,
    borderColor: "#e0e0e0",
    height: 40,
    marginRight: 25,
    marginLeft: 5,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 5,
  },
  filterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 10,
  },
  text: {
    fontFamily: "outfit-SemiBold",
    fontSize: 18,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    marginLeft: 15,
  },
  iconBackground: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconText: {
    marginRight: 5,
    fontSize: 16,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 10,
  },
  optionButton: {
    alignItems: "center",
    marginHorizontal: 1,
  },
  optionImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  optionText: {
    fontFamily: "outfit-Regular",
    marginTop: 5,
    fontSize: 14,
    color: "#000",
  },
  selectedOptionImage: {
    borderWidth: 2,
    borderColor: "#007bff",
  },
  container1: {
    height: 220,
    marginBottom: 10,
  },
  carouselItemContainer: {
    width: width - 40,
    marginHorizontal: 20,
  },
  image2: {
    width: "100%",
    height: 220,
    marginBottom: 20,
    borderRadius: 22,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  overlay: {
    position: "absolute", // Overlay the text and button on top of the image
    top: 0,
    left: 20, // Align to the left with some padding
    bottom: 0,
    justifyContent: "center", // Center vertically
    alignItems: "flex-start", // Align to the left
  },
  carouselText: {
    fontSize: 25,
    color: "#fff", // White text to contrast with the image
    fontFamily: "outfit-Bold",
    marginBottom: 10,
    textAlign: "left", // Left-align the text
  },
  carouselText1: {
    fontSize: 18,
    color: "#fff", // White text to contrast with the image
    fontFamily: "outfit-Regular",
    marginBottom: 10,
    textAlign: "left", // Left-align the text
  },
  carouselText2: {
    fontSize: 18,
    color: "#fff", // White text to contrast with the image
    fontFamily: "outfit-SemiBold",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    textAlign: "left", // Left-align the text
  },
  carouselText3: {
    fontSize: 14,
    color: "#fff",
    fontFamily: "outfit-Regular",
    marginLeft: 5, // Space between icon and text
    marginBottom: 0, // Adjust to align with icon
  },
  carouselButton: {
    borderWidth: 1, // Border width for the button
    borderColor: "#fff", // White border color
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8, // Rounded corners
    backgroundColor: "transparent", // Transparent background
  },
  carouselButton1: {
    position: "absolute", // Allow absolute positioning
    left: 270, // Move the button to the left side (adjust as needed)
    top: "50%", // Vertically center the button relative to the containerDeal
    transform: [{ translateY: -16 }], // Adjust vertical centering (half of button's height)
    borderWidth: 1, // Border width for the button
    borderColor: "#fff", // White border color
    width: 100, // Set button width
    height: 40, // Set button height
    borderRadius: 8, // Rounded corners
    backgroundColor: "transparent", // Transparent background
  },
  buttonText: {
    color: "#fff", // White text inside the button
    fontSize: 16,
    marginTop: 2,
    fontFamily: "outfit-SemiBold",
    textAlign: "center",
  },
  buttonText1: {
    color: "#fff", // White text inside the button
    fontSize: 16,
    marginTop: 8,
    fontFamily: "outfit-SemiBold",
    textAlign: "center",
  },
  remainingTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10, // Aligns the container with the text
  },
  alarmIcon: {
    marginRight: 0, // Adds space between the icon and the text
  },
});

export default Header;
