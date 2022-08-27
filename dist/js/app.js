import { NegociacaoController } from './controllers/negociacao-controller.js';
const controller = new NegociacaoController();
const form = document.forms[0];
form.addEventListener('submit', (event) => {
    event.preventDefault();
    controller.adiciona();
});
//# sourceMappingURL=app.js.map