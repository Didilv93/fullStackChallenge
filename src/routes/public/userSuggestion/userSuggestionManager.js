import UserSuggestionService from './userSuggestionService';

class UserSuggestionManager {
  async listSongs() {
    return await UserSuggestionService.listSongs().then(response => {
      return {
        playlist: response && response.data ? response.data : []
      };
    });
  }

  async getUser(nickname) {
    return await UserSuggestionService.getUser(nickname).then(response => {
      return {
        user: response && response.data
      };
    });
  }

  async registerUserVote(nickname, favoriteSongs) {
    await UserSuggestionService.registerUserVote(nickname, favoriteSongs);
  }
}

export default new UserSuggestionManager();
