import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen2() {
  const navigation = useNavigation();
  
  const handleSkip = () => {
    console.log('Skip button pressed');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffff" barStyle="default" />

      <View style={styles.topFrame}>
        <Text style={styles.pageNumber}>2<Text style={styles.pageNumberGray}>/3</Text></Text>


        <TouchableOpacity onPress={() => navigation.push('Signin')}>
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
          source={require(".././assets/Images/Sales consulting-pana 1.png")}
        />
        <Text style={styles.text}>Make Payment</Text>
        <Text style={styles.text1}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
        </Text>
      </View>

      <View style={styles.bottomContent}>
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.push('SplashScreen')}>
          <Text style={styles.prevText}>Prev</Text>
        </TouchableOpacity>

        <Image
          style={styles.circleIcon}
          source={require(".././assets/Images/circle2.png")}
        />

        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.push('SplashScreen3')}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
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
  skipText: {
    fontFamily: 'outfit-SemiBold',
    fontSize: 20,
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 2,
    fontFamily: "outfit-ExtraBold",
  },
  text1: {
    fontSize: 17,
    textAlign: 'center',
    color: '#A8A8A9',
    marginTop: 10,
    fontFamily: "outfit-SemiBold",
  },
  centerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContent: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleIcon: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
    width:100
  },
  nextText: {
    color: '#F83758',
    fontFamily: 'outfit-SemiBold',
    fontSize: 20,
  },
  prevText: {
    color: '#C4C4C4',
    fontFamily: 'outfit-SemiBold',
    fontSize: 20,
  },
  pageNumberGray: {
    color: '#A8A8A9',
  }
});
