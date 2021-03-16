import {TextStyle} from 'react-native';

export type ContactProps = {
  contacts: any;
  listUsers: any;
};

export type TextComponentProps = {
  title?: string;
  style?: TextStyle | {};
  onPress?: () => void;
};
