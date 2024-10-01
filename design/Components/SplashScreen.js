import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function SplashScreen() {
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSkip = () => {
    console.log('Skip button pressed');
    navigation.push('Signin');
  };

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / width);
    setCurrentIndex(newIndex);
  };

  const scrollToIndex = (index) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: index * width, animated: true });
    }
  };

  const getDotStyle = (index) => ({
    width: currentIndex === index ? 30 : 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: currentIndex === index ? '#17223B' : '#A8A8A9',
    margin: 5,
  });

  const renderSlide = (image, title, description, index) => (
    <View style={[styles.slide, { width }]}>
      <View style={styles.topFrame}>
        <Text style={styles.pageNumber}>
          {index + 1}<Text style={styles.pageNumberGray}>/3</Text>
        </Text>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.centerContent}>
        <Image
          style={{
            height: 250,
            width: 400,
            marginTop: 0,
          }}
          source={image}
        />
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text1}>{description}</Text>
      </View>

      <View style={styles.bottomContent}>
        {index === 0 && (
          <TouchableOpacity onPress={() => scrollToIndex(index + 1)} style={styles.nextButtonContainer}>
            <Text style={styles.navText}>Next</Text>
          </TouchableOpacity>
        )}
        {index === 1 && (
          <>
            <TouchableOpacity onPress={() => scrollToIndex(index - 1)}>
              <Text style={styles.navText}>Prev</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => scrollToIndex(index + 1)}>
              <Text style={styles.navText}>Next</Text>
            </TouchableOpacity>
          </>
        )}
        {index === 2 && (
          <>
            <TouchableOpacity onPress={() => scrollToIndex(index - 1)}>
              <Text style={styles.navText}>Prev</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push('Login')}>
              <Text style={styles.getStartedText}>Get Started</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffff" barStyle="default" />

      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {renderSlide(
          require(".././assets/Images/fashion shop-rafiki 1.png"),
          "Choose Products",
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
          0
        )}
        {renderSlide(
          require(".././assets/Images/Sales consulting-pana 1.png"),
          "Make Payment",
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
          1
        )}
        {renderSlide(
          require(".././assets/Images/Shopping bag-rafiki 1.png"),
          "Get Your Orders",
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
          2
        )}
      </ScrollView>

      <View style={styles.dotsContainer}>
        <View style={getDotStyle(0)} />
        <View style={getDotStyle(1)} />
        <View style={getDotStyle(2)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  topFrame: {
    position: 'absolute',
    top: 50,
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  pageNumber: {
    fontFamily: 'outfit-SemiBold',
    fontSize: 20,
  },
  pageNumberGray: {
    color: '#A8A8A9',
  },
  skipText: {
    fontFamily: 'outfit-SemiBold',
    fontSize: 20,
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
    fontFamily: "outfit-ExtraBold",
  },
  text1: {
    fontSize: 17,
    textAlign: 'center',
    color: '#A8A8A9',
    marginTop: 10,
    fontFamily: "outfit-SemiBold",
  },
  bottomContent: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  nextButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  navText: {
    fontSize: 18,
    color: '#F83758',
    fontFamily: 'outfit-SemiBold',
  },
  getStartedText: {
    fontSize: 18,
    color: '#F83758',
    fontFamily: 'outfit-SemiBold',
    textAlign: 'right',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
});