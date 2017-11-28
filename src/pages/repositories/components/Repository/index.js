import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class Repository extends Component {
  static propTypes = {
    repository: PropTypes.shape({
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }).isRequired,
      name: PropTypes.string,
      issues_url: PropTypes.string,
    }).isRequired,
  };

  render() {
    const { repository } = this.props;
    return (
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={{ uri: repository.owner.avatar_url }}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{repository.name}</Text>
          <Text style={styles.owner}>{repository.owner.login}</Text>
        </View>
        <View style={styles.forwardIconContainer}>
          <Icon name="angle-right" style={styles.forwardIcon} />
        </View>
      </View>
    );
  }
}
