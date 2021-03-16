import {StyleSheet} from 'react-native';
import {hp, wp} from '../shared/layout';

export const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export const ContactStyles = StyleSheet.create({
  loading: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  email: {
    fontSize: hp(16),
    color: '#747d8c',
  },
  firstName: {
    fontSize: hp(20),
    paddingRight: wp(4),
    color: '#57606f',
  },
  lastName: {
    fontSize: hp(20),
    color: '#57606f',
  },
  name: {
    flexDirection: 'row',
  },

  list: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#f1f2f6',
  },
  image: {
    width: wp(50),
    height: wp(50),
    borderRadius: wp(25),
    margin: wp(10),
  },
});
