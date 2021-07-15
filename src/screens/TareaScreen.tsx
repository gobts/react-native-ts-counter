import React from 'react';
import {View, StyleSheet} from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text>ss</Text> */}
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNatanja} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
  },
  cajaNatanja: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
  },
  cajaAzul: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#23C4D9',
  },
});
