import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const Header = ({ title, subtitle, handleBack }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => handleBack()}>
      <Icon name="chevron-left" style={styles.backIcon} />
    </TouchableOpacity>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  </View>
);

Header.propTypes = {
  handleBack: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};


export default Header;
