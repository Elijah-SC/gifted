import { AppState } from "../AppState.js";
import { giftService } from "../services/GiftsService.js";
import { Pop } from "../utils/Pop.js";

export class GiftsController {
  constructor() {
    console.log(`🎁s controller is loaded`);
    AppState.on(`user`, this.getGifts)


  }

  async getGifts() {
    try {
      await giftService.getGifts()
    } catch (error) {
      Pop.error(error)
      console.error();

    }
  }
}