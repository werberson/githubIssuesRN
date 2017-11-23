import React, {Component} from 'react';

import { View, Text } from 'react-native';

import Repository from './components/Repository';
import styles from './styles';

export default class Repositories extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Repository repository={{owner: { login: 'react-community', avatar_url: 'https://avatars3.githubusercontent.com/u/24483500?v=4'}, name: 'react-navigation', issues_url: 'issues_url'}}/>
      </View>
    )
  }
};
