import axios from '../../../axiosInstance';

class UserSuggestionService {
  async listSongs() {
    return await axios.get('/playlist');
  }
  async getUser(nickname) {
    return await axios.get('/user', {
      params: {
        nickname: nickname
      }
    });
  }
  async registerUserVote(nickname, favoriteSongs) {
    return await axios.post('/user/registerVote', {
      params: {
        nickname: nickname,
        favoriteSongs: favoriteSongs
      }
    });
  }
}

export default new UserSuggestionService();
