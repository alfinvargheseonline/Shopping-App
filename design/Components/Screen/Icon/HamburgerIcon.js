import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const HamburgerIcon = ({ onPress, color = '#000', size = 24 }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={[styles.line, { backgroundColor: color, width: size, height: size / 8 }]} />
      <View style={[styles.line, { backgroundColor: color, width: size, height: size / 8 }]} />
      <View style={[styles.line, { backgroundColor: color, width: size, height: size / 8 }]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    height: 24,
    width: 24,
  },
  line: {
    borderRadius: 1,
  },
});

export default HamburgerIcon;