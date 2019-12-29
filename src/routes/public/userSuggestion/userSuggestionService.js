import axios from '../../../axiosInstance';

class UserSuggestionService {
  async listSongs() {
    return await axios.get('/songs');
  }
}

export default new UserSuggestionService();
