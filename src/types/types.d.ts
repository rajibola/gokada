import {RematchDispatch} from '@rematch/core';
import {TextStyle} from 'react-native';
import {models} from '../../App';

export type RootModel = typeof models;
export type Dispatch = RematchDispatch<RootModel>;

export type ContactProps = {
  contacts: any;
  listUsers: any;
};

export type TextComponentProps = {
  title?: string;
  style?: TextStyle | {};
  onPress?: () => void;
};
