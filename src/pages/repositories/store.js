import { AsyncStorage } from 'react-native';

const repositoryKey = '@GithubIssues:repositories';

const repositoryService = {
  save: async (repository) => {
    const response = await AsyncStorage.getItem(repositoryKey);
    const repositories = JSON.parse(response) || [];
    if (repositories.filter(repo => repo.id === repository.id).length > 0) throw Error('repostitório á existe na sua lista.');
    await AsyncStorage.setItem(repositoryKey, JSON.stringify([repository, ...repositories]));
  },
  list: async () => {
    const response = await AsyncStorage.getItem(repositoryKey);
    return JSON.parse(response) || [];
  },
};

export default repositoryService;
