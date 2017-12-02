import { StyleSheet } from 'react-native';

import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: colors.inactive,
  },
  text: {
    color: colors.inactive,
    fontWeight: 'bold',
  },
  description: {
    color: colors.inactive,
    textAlign: 'center',
    fontSize: fonts.small,
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30,
  },
});

export default styles;
