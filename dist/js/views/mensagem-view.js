import { View } from './view.js';
export class MensagemView extends View {
    template(model) {
        return /* html */ `
      <p class="alert alert-info">${model}</p>
    `;
    }
}
//# sourceMappingURL=mensagem-view.js.map