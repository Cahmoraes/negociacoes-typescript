import { IModelo } from '../interfaces/modelo.js'

export class Negociacao implements IModelo<Negociacao> {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number,
  ) {}

  public static criaDe(
    dateString: string,
    quantidadeString: string,
    valorString: string,
  ): Negociacao {
    const exp = /-/g
    const date = new Date(dateString.replace(exp, ','))
    const quantidade = parseInt(quantidadeString)
    const valor = parseFloat(valorString)

    const negociacao = new Negociacao(date, quantidade, valor)
    return negociacao
  }

  get volume(): number {
    return this.quantidade * this.valor
  }

  get data(): Date {
    const data = new Date(this._data.getTime())
    return data
  }

  public paraTexto() {
    return `
      Data: ${this.data},
      Quantidade: ${this.quantidade},
      Valor: ${this.valor}
    `
  }

  public ehIgual(negociacao: Negociacao): boolean {
    return (
      this.data.getDate() === negociacao.data.getDate() &&
      this.data.getMonth() === negociacao.data.getMonth() &&
      this.data.getFullYear() === negociacao.data.getFullYear()
    )
  }
}
