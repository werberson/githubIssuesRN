import 'config/ReactotronConfig';

import React, { Component } from 'react';
import { View } from 'react-native';
import Repositories from 'pages/repositories';
import styles from './styles';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Repositories />
      </View>
    );
  }
}

