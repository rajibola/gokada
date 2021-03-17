import {Platform, StyleSheet} from 'react-native';
import colors from '../constants/colors';
import {fonts} from '../constants/fonts';
import {getStatusBarHeight, hp, wp} from '../shared/layout';

export const HomeStyles = StyleSheet.create({
  subtitle: {
    ...fonts[20],
  },
  title: {
    ...fonts[50],
    marginTop: hp(40),
  },
  container: {
    flex: 1,
    backgroundColor: colors.light,
    paddingHorizontal: wp(20),
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
  },
});

export const ContactStyles = StyleSheet.create({
  title: {
    ...fonts[24],
    alignSelf: 'center',
    marginTop: hp(20),
    marginBottom: hp(10),
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: wp(10),
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
  },
});
