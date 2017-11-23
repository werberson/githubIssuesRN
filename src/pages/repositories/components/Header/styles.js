import { StyleSheet } from 'react-native';

import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    height: 54 + metrics.statusBarHeight,
    paddingTop: metrics.statusBarHeight,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    backgroundColor: colors.light,
    height: 33,
    borderRadius: 5,
    fontSize: fonts.small,
    color: colors.darker,
    paddingHorizontal: 20,
  },
  addButtonContainer: {
    marginLeft: 15,
  },
  addIcon: {
    fontSize: fonts.regular,
  },
});

export default styles;