import React from 'react';
import {StyleProp, Text, TextStyle, View, ViewStyle} from 'react-native';

export const HolaMundoScreen = () => {
  const styles: StyleProp<ViewStyle> = {
    flex: 1,
    backgroundColor: 'cyan',
    justifyContent: 'center',
  };

  const stylesText: StyleProp<TextStyle> = {
    fontSize: 45,
    textAlign: 'center',
  };
  return (
    <View style={styles}>
      <Text style={stylesText}> Hola Mundo Test</Text>
    </View>
  );
};
