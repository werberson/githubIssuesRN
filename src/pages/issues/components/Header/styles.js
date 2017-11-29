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
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 5,
    marginRight: 20,
  },
  title: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: fonts.small,
    color: colors.grey,
  },
  backIcon: {
    fontSize: 20,
  },
});

export default styles;
