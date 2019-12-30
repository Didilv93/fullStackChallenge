import FinalRankProcessingService from './finalRankProcessingService';

class FinalRankProcessingManager {
  async listPlayListFinalClassification() {
    return await FinalRankProcessingService.listPlayListFinalClassification().then(response => {
      return {
        finalRank: response && response.data ? response.data : []
      };
    });
  }
}

export default new FinalRankProcessingManager();
