import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const Issue = ({ issue, onPress }) => (
  <TouchableOpacity onPress={() => onPress()} style={styles.container}>
    <Image
      style={styles.avatar}
      source={{ uri: issue.user.avatar_url }}
    />
    <View style={styles.infoContainer}>
      <Text style={styles.title} numberOfLines={1}>{issue.title}</Text>
      <Text style={styles.login}>{issue.user.login}</Text>
    </View>
    <View style={styles.forwardIconContainer}>
      <Icon name="angle-right" style={styles.forwardIcon} />
    </View>
  </TouchableOpacity>
);

Issue.propTypes = {
  issue: PropTypes.shape({
    user: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }).isRequired,
    title: PropTypes.string,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Issue;
