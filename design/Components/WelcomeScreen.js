import React, { useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated, PanResponder, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

const { height } = Dimensions.get('window');

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      { dy: pan.y }
    ], { useNativeDriver: false }),
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dy < -50) {  // If swiped up more than 50 pixels
        Animated.timing(pan, {
          toValue: { x: 0, y: -height },
          duration: 300,
          useNativeDriver: true,
        }).start(() => {
          navigation.navigate('SplashScreen');
        });
      } else {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
        }).start();
      }
    },
  });

  const animatedStyle = {
    transform: pan.getTranslateTransform(),
  };

  return (
    <Animated.View style={[styles.container, animatedStyle]} {...panResponder.panHandlers}>
      <StatusBar backgroundColor="#ffff" barStyle="default" />
      
      <View style={styles.centerContent}>
        <Image
          source={require(".././assets/Images/logoipsum-255 1.png")}
        />
      </View>

      <View style={styles.bottomContent}>
        <Image
          source={require(".././assets/Images/SWIPE UP.png")}
        />
        <Text style={styles.text}>Swipe up to continue</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',  
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  bottomContent: {
    alignItems: 'center',      
    justifyContent: 'flex-end', 
    paddingBottom: 20,        
  },
  text: {
    fontFamily: "outfit-Medium",
    marginTop: 10,
    fontSize: 16,
  },
});

export default WelcomeScreen;