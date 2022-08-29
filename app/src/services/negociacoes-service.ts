import { INegociacoesDoDia } from '../interfaces/negociacao-do-dia.js'
import { Negociacao } from '../models/negociacao.js'

export class NegociacoesService {
  public async obterNegociacoesDoDia(): Promise<Negociacao[]> {
    return fetch('http://localhost:8080/dados')
      .then((response) => response.json())
      .then((dados: INegociacoesDoDia[]) => {
        return dados.map((dadoDeHoje) => {
          return new Negociacao(
            new Date(),
            dadoDeHoje.vezes,
            dadoDeHoje.montante,
          )
        })
      })
  }
}
