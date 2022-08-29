import { IImprimivel } from './imprimivel.js'

export function imprimir(...objetos: IImprimivel[]) {
  console.log({ objetos })
  for (const objeto of objetos) {
    console.log(objeto.paraTexto())
  }
}
