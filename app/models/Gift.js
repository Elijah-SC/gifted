export class Gift {
  constructor(data) {
    this.tag = data.tag
    this.url = data.url
    this.opened = false
    this.id = data.id
  }

  get giftTemplate() {
    return `
    <div class="col-12 col-md-4">
            <div class="card-body bg-white p-2 mb-1">
              <img onclick="app.GiftsController.openGift('${this.id}')" class="w-100 img-fluid"
                src="${this.url}" alt="" role="button">
                <div class="d-flex justify-content-between">
                <p>${this.tag}</p> <span onclick="app.GiftsController.deleteGift('${this.id}')" role="button" class="text-danger fs-3"><i class="mdi mdi-trash-can" title="delete Gift"></i></span>
                </div>
            </div>
        </div>
          `
  }
}