import { View } from './view.js'

export class MensagemView extends View {
  protected template(model: string): string {
    return /* html */ `
      <p class="alert alert-info">${model}</p>
    `
  }
}
