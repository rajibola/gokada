import React from 'react';
import {View, Image, Text} from 'react-native';
import {ListStyles as styles} from './styles';
import {RegularText} from './text';

export const List = ({item}: any) => (
  <View style={styles.list}>
    <Image style={styles.image} source={{uri: item.avatar}} />
    <View>
      <View style={styles.name}>
        <RegularText
          title={`${item.first_name} ${item.last_name}`}
          style={styles.firstName}
        />
      </View>
      <RegularText title={item.email} style={styles.email} />
    </View>
  </View>
);
