import axios from '../../../axiosInstance';

class FinalRankProcessingService {
  async listPlayListFinalClassification() {
    return await axios.get('/playlist/finalClassification');
  }
}

export default new FinalRankProcessingService();
