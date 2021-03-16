import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {LoadingStyles as styles} from './styles';

export const Loading = () => (
  <View style={styles.loading}>
    <ActivityIndicator size="large" color="rgb(98,176,223)" />
  </View>
);
