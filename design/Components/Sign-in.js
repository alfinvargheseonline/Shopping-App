import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importing Material Icons
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // For Google, Facebook icons
import Ionicons from 'react-native-vector-icons/Ionicons'; // For Apple icon

export default function Signin({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an{'\n'}Account</Text>

      <View style={styles.inputContainer}>
        <Icon name="person" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Icon name={passwordVisible ? "visibility" : "visibility-off"} size={20} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={!confirmPasswordVisible}
        />
        <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
          <Icon name={confirmPasswordVisible ? "visibility" : "visibility-off"} size={20} color="#000" />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.Text}>
          By clicking the <Text style={styles.registerText}>Register</Text> button, you agree to the public offer
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <View style={styles.orContainer}>
        <Text style={styles.orText}>- Or continue with -</Text>
      </View>

      {/* Social Media Buttons */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton} onPress={() => console.log('Google Sign-In')}>
          <FontAwesome name="google" size={30} color="#DB4437" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton} onPress={() => console.log('Apple Sign-In')}>
          <Ionicons name="logo-apple" size={30} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton} onPress={() => console.log('Facebook Sign-In')}>
          <FontAwesome name="facebook" size={30} color="#4267B2" />
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.orText}>I Already have an Account</Text>
        <TouchableOpacity onPress={() => navigation.push('Login')}>
          <Text style={styles.nextText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 40,
    textAlign: 'left',
    marginTop: 50,
    marginBottom: 20,
    fontFamily: 'outfit-Bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    borderRadius: 8,
    marginBottom: 40,
    padding: 5,
    borderWidth: 1,
    borderColor: '#A8A8A9',
  },
  input: {
    flex: 1,
    fontFamily: 'outfit-Bold',
    padding: 12,
    borderRadius: 100,
    backgroundColor: '#F3F3F3',
    color: '#676767',
  },
  icon: {
    marginRight: 0,
  },
  button: {
    backgroundColor: '#F83758',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'outfit-Bold',
  },
  Text: {
    fontSize: 15,
    fontFamily: 'outfit-Regular',
    color: '#676767',
    marginBottom: 40,
  },
  registerText: {
    color: '#FF4B26',
    fontFamily: 'outfit-Bold',
  },
  orContainer: {
    marginTop: 40,
    alignItems: 'center',
    width: '100%',
  },
  orText: {
    fontSize: 15,
    fontFamily: 'outfit-Regular',
    color: '#676767',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    width: '100%',
  },
  socialButton: {
    borderWidth: 2,
    borderColor: '#FF0000',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    width: '100%',
  },
  nextText: {
    color: '#F83758',
    fontFamily: 'outfit-SemiBold',
    fontSize: 15,
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
});
