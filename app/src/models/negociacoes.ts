import { IModelo } from '../interfaces/modelo.js'
import { Negociacao } from './negociacao.js'
export class Negociacoes implements IModelo<Negociacoes> {
  private negociacoes: Negociacao[] = []

  public adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao)
  }

  public lista(): readonly Negociacao[] {
    return this.negociacoes
  }

  public paraTexto() {
    return JSON.stringify(this.negociacoes, null, 2)
  }

  ehIgual(negociacoes: Negociacoes): boolean {
    return JSON.stringify(this.lista()) === JSON.stringify(negociacoes.lista())
  }
}
