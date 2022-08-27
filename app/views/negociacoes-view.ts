import { Negociacoes } from '../models/negociacoes.js'
import { View } from './view.js'

export class NegociacoesView extends View<Negociacoes> {
  update(model: Negociacoes): void {
    this.elemento.innerHTML = this.template(model)
  }

  protected template(model: Negociacoes): string {
    return /* html */ `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
          </tr>
        </thead>
        <tbody>
          ${model
            .lista()
            .map(
              (negociacao) => /* html */ `
            <tr>
              <td>
                ${this.formatar(negociacao.data)}
              </td>
              <td>${negociacao.quantidade}</td>
              <td>${negociacao.valor}</td>
            </tr>
            `,
            )
            .join('')}
            </tbody>
      </table>    
    `
  }

  private formatar(data: Date): string {
    return new Intl.DateTimeFormat().format(data)
  }
}
