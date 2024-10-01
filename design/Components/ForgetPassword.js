import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ForgetPassword({ navigation }) {
 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot{'\n'}password?</Text>

      <View style={styles.inputContainer}>
        <Icon name="email" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
        />
      </View>

      
      <View>
        <Text style={styles.Text}>
           <Text style={styles.registerText}>*</Text>We will send you a message to set or reset {'\n'}your new password
        </Text>
      </View>


      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

    
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
    marginTop:20
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

  Text: {
    fontSize: 15,
    fontFamily: 'outfit-Regular',
    color: '#676767',
    marginBottom: 40,
    marginTop:30
  },
  registerText: {
    color: '#FF4B26',
    fontFamily: 'outfit-Bold',
  },
});