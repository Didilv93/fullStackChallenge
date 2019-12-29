import UserSuggestionService from './userSuggestionService';

class UserSuggestionManager {
  async listSongs() {
    return await UserSuggestionService.listSongs().then(response => {
      return {
        playlist: response && response.data ? response.data : []
      };
    });
  }
}

export default new UserSuggestionManager();
