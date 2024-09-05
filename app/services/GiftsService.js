import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { api } from "./AxiosService.js"

class GiftsService {
  async deleteGift(giftId) {

    const response = await api.delete(`api/gifts/${giftId}`)
    console.log(`deleted Gift`, response.data)
    const giftIndex = AppState.Gifts.findIndex(gift => gift.id == giftId)
    if (giftIndex < 0) return
    AppState.Gifts.splice(giftIndex, 1)

  }
  async createGift(giftFormData) {

    const response = await api.post(`api/gifts`, giftFormData)
    console.log(response.data);

    const newGift = new Gift(response.data)
    AppState.Gifts.push(newGift)
    AppState.emit('user')

  }
  async getGifts() {
    const response = await api.get(`api/gifts`)
    console.log(response.data);
    const gifts = response.data.map(giftData => new Gift(giftData))
    AppState.Gifts = gifts
    console.log(`My AppState gifts`, AppState.Gifts)

  }

  async openGift(giftId) {
    const foundGift = AppState.Gifts.find(gift => gift.id == giftId)
    foundGift.opened = true
    const response = await api.put(`api/gifts/${giftId}`, foundGift)
    AppState.emit(`user`)
  }
}

export const giftsService = new GiftsService()