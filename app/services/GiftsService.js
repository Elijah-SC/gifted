import { api } from "./AxiosService.js"

class GiftService {
  async getGifts() {
    const response = await api.get(`api/gifts`)
    console.log(response.data);

  }



}

export const giftService = new GiftService()