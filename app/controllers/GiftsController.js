import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class GiftsController {
  constructor() {
    console.log(`🎁s controller is loaded`);
    AppState.on(`user`, this.getGifts)
    AppState.on(`Gifts`, this.drawGifts)


  }

  async getGifts() {
    try {
      await giftsService.getGifts()
    } catch (error) {
      Pop.error(error)
      console.error();

    }
  }

  drawGifts() {
    const gifts = AppState.Gifts
    let giftsListHTML = ''
    gifts.forEach(gift => giftsListHTML += gift.giftTemplate)
    setHTML('gift-list', giftsListHTML)
  }

  async openGift(giftId) {
    try {
      await giftsService.openGift(giftId)
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  async createGift() {
    try {
      event.preventDefault()
      const giftForm = event.target
      const giftFormData = getFormData(giftForm)
      await giftsService.createGift(giftFormData)

    } catch (error) {
      Pop.error(error)
      console.log(error);
    }
  }

  async deleteGift(giftId) {
    try {
      const doesUserWantToDelete = await Pop.confirm()
      if (!doesUserWantToDelete) return
      console.log(`deleting Gift`);

      await giftsService.deleteGift(giftId)
    } catch (error) {
      Pop.error(error)
      console.error();

    }
  }
}