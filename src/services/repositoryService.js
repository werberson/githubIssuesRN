import { AsyncStorage } from 'react-native';

const repositoryKey = '@GithubIssues:repositories';

const repositoryService = {
  save: async (repository) => {
    const response = await AsyncStorage.getItem(repositoryKey);
    console.tron.log(response);
    const repositories = JSON.parse(response) || [];
    repositories.push(repository);
    return AsyncStorage.setItem(repositoryKey, JSON.stringify(repositories));
  },
  loadAll: () => AsyncStorage.getItem(repositoryKey),
};

export default repositoryService;
