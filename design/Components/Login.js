import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Login({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome{'\n'}Back!</Text>

      <View style={styles.inputContainer}>
        <Icon name="person" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Username or Email"
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

      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity onPress={() => navigation.push('ForgetPassword')}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.push('GetStarted')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.orContainer}>
        <Text style={styles.orText}>- Or continue with -</Text>
      </View>

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

      <View style={styles.signUpContainer}>
        <Text style={styles.orText}>Create An Account </Text>
        <TouchableOpacity onPress={() => navigation.push('Signin')}>
          <Text style={styles.signUpText}>Sign Up</Text>
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
    marginBottom: 10,
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
  forgotPasswordContainer: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    fontFamily: 'outfit-Regular',
    color: '#F83758',
    fontSize: 14,
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
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  signUpText: {
    color: '#F83758',
    fontFamily: 'outfit-SemiBold',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
});