import React from 'react';
import {View} from 'react-native';
import {MediumText, RegularText} from '../shared';
import {HomeStyles as styles} from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <MediumText title="Hello GoKada" style={styles.title} />
      <RegularText
        title="Swipe right to view contact list"
        style={styles.subtitle}
      />
    </View>
  );
};

export default Home;
