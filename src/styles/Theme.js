import { Platform } from 'react-native';

const colors = {
  white: '#FFF',
  light: '#EEE',
  dark: '#333',
  darker: '#666',
  inactive: '#878EA0',
  grey: '#999',
  primary: '#444A5A',
  secondary: '#7A91CA',
  error: '#FF5A5A',
  background: '#FBFAFF',
};

const metrics = {
  statusBarHeight: (Platform.OS === 'ios') ? 20 : 0,
};

const fonts = {
  big: 24,
  regular: 16,
  small: 12,
};

export { colors, metrics, fonts };
