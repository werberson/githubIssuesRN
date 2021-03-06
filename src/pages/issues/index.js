import React, { Component } from 'react';

import {
  View,
  Linking,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';

import PropTypes from 'prop-types';

import EmptyList from 'components/EmptyList';
import api from 'services/api';
import Header from './components/Header';
import Issue from './components/Issue';
import FilterBar from './components/FilterBar';
import styles from './styles';

export default class Issues extends Component {
  static navigationOptions = {
    header: ({ scene, navigation }) => (
      <Header
        title={scene.route.params.repository.name}
        subtitle={scene.route.params.repository.owner.login}
        handleBack={navigation.goBack}
      />
    ),
  };

  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.object,
      }).isRequired,
    }).isRequired,
  };

  state = {
    issues: [],
    loading: false,
    refreshing: false,
    selectedFilterValue: 'all',
  };

  componentWillMount() {
    this.setState({ loading: true });
    this.loadIssues().then(() => this.setState({ loading: false }));
  }

  filters = [
    {
      value: 'all',
      label: 'Todas',
    },
    {
      value: 'open',
      label: 'Abertas',
    },
    {
      value: 'closed',
      label: 'Fechadas',
    },
  ];

  loadIssues = async () => {
    this.setState({ refreshing: true });
    const { repository } = this.props.navigation.state.params;

    const response = await api.get(`/repos/${repository.owner.login}/${repository.name}/issues?state=${this.state.selectedFilterValue}`);

    console.tron.log(response.data);

    if (!response.ok) throw new Error('Repositório não encontrado.');
    this.setState({ refreshing: false, issues: response.data });
  };

  handleSelectFilter(value) {
    this.setState(
      { selectedFilterValue: value },
      () => this.loadIssues().then(() => this.setState({ loading: false })),
    );
  }

  renderList = () => (
    this.state.issues.length
      ? this.renderIssues()
      : (
        <EmptyList
          icon="info-circle"
          text="Nenhum problema encontrado"
          description="Parece que achamos o projeto perfeito."
        />
      )
  );

  renderIssues = () => (
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this.loadIssues}
        />
      }
      data={this.state.issues}
      keyExtractor={issue => issue.id}
      ListHeaderComponent={() => (
        <FilterBar
          filters={this.filters}
          selectedValue={this.state.selectedFilterValue}
          onChange={this.handleSelectFilter.bind(this)}
        />
      )}
      renderItem={
        ({ item }) =>
          <Issue issue={item} onPress={() => Linking.openURL(item.html_url)} />
      }
    />
  );

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.loading
            ? <ActivityIndicator size="small" color="#999" style={styles.loading} />
            : this.renderList()
        }
      </View>
    );
  }
}
