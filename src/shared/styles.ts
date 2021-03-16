import {StyleSheet} from 'react-native';
import colors from '../constants/colors';
import {fonts} from '../constants/fonts';
import {hp, wp} from './layout';

export const TextStyles = StyleSheet.create({
  RegularText: {
    ...fonts[12],
    fontFamily: 'rubik-regular',
  },

  medium: {
    ...fonts[12],
    fontFamily: 'rubik-medium',
  },
});

export const LoadingStyles = StyleSheet.create({
  loading: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.light,
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
});

export const ListStyles = StyleSheet.create({
  email: {
    ...fonts[14],
    color: '#747d8c',
  },
  firstName: {
    ...fonts[18],
    paddingRight: wp(4),
  },
  lastName: {
    ...fonts[18],
  },
  name: {
    flexDirection: 'row',
  },

  list: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.light,
  },
  image: {
    width: wp(50),
    height: wp(50),
    borderRadius: wp(25),
    margin: wp(10),
  },
});
