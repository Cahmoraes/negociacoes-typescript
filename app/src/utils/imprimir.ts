import { Imprimivel } from './imprimivel.js'

export function imprimir(...objetos: Imprimivel[]) {
  console.log({ objetos })
  for (const objeto of objetos) {
    console.log(objeto.paraTexto())
  }
}
