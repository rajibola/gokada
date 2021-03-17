import {RematchRootState} from '@rematch/core';
import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {connect} from 'react-redux';
import {List, Loading, MediumText} from '../shared';
import {ContactProps as Props, Dispatch} from '../types/types';
import {ContactStyles as styles} from './styles';

const Contact = ({contacts, listUsers}: Props) => {
  const [loading, setLoading] = useState(true);
  const data = contacts.users_data.data;

  useEffect(() => {
    listUsers()
      .then(() => setLoading(false))
      .catch((err: string) => console.log(err));
  });

  const _renderItem = ({item}: any) => <List item={item} />;

  return (
    <View style={styles.container}>
      <View>
        <MediumText title="Contacts" style={styles.title} />
        {data && <FlatList data={data} renderItem={_renderItem} />}
      </View>

      {loading && <Loading />}
    </View>
  );
};

const mapState = (state: RematchRootState<any>) => ({
  contacts: state.contacts,
});
const mapDispatch = (dispatch: Dispatch) => ({
  listUsers: () => dispatch.contacts.listUsers(),
});

export default connect(mapState, mapDispatch as any)(Contact);
