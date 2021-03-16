import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {Loading} from '../shared/loading';
import {ContactProps as Props} from '../types/types';
// import {Button} from '../shared/button';
// import {MediumText, RegularText} from '../shared/text';
// import {HomeScreenProps} from '../types/types.d';
import {ContactStyles as styles} from './styles';

const Contact = ({contacts, listUsers}: Props) => {
  const [loading, setLoading] = useState(true);
  const data = contacts.users_data.data;

  useEffect(() => {
    listUsers()
      .then(() => setLoading(false))
      .catch((err: string) => console.log(err));
  });

  const _renderItem = ({item}: any) => (
    <View style={styles.list}>
      <Image style={styles.image} source={{uri: item.avatar}} />
      <View>
        <View style={styles.name}>
          <Text style={styles.firstName}>{item.first_name}</Text>
          <Text style={styles.lastName}>{item.last_name}</Text>
        </View>
        <Text style={styles.email}>{item.email}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <Text>Contact</Text>
        {data && <FlatList data={data} renderItem={_renderItem} />}
      </View>

      {loading && <Loading />}
    </View>
  );
};

const mapState = (state: any) => ({
  contacts: state.contacts,
});
const mapDispatch = (dispatch: any) => ({
  listUsers: () => dispatch.contacts.listUsers(),
});

export default connect(mapState, mapDispatch)(Contact);
