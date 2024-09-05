export class Gift {
  constructor(data) {
    this.tag = data.tag
    this.url = data.url
    this.opened = false

  }

  get giftTemplate() {
    return `
    <div class="col-4">
            <div class="card">
              <div class="card-body">

                <img class="w-100 img-fluid"
                  src="${this.url}" alt="">
                <p>${this.tag}</p>
              </div>
            </div>
          </div>
          `
  }
}