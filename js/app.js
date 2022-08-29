import { NegociacaoController } from './controllers/negociacao-controller.js';
const controller = new NegociacaoController();
const form = document.forms[0];
form.addEventListener('submit', (event) => {
    event.preventDefault();
    controller.adiciona();
});
const botaoImporta = document.querySelector('#botao-importa');
if (botaoImporta) {
    botaoImporta.addEventListener('click', () => {
        controller.importaDados();
    });
}
else {
    throw new Error('Botão importa não encontrado');
}
//# sourceMappingURL=app.js.map