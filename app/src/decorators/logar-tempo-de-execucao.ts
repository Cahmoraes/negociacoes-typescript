export function logarTempoDeExecucao(emSegundos = false) {
  return function (
    target: unknown,
    propertyKey: PropertyKey,
    descriptor: PropertyDescriptor,
  ) {
    const metodoOriginal = descriptor.value

    descriptor.value = function (...args: unknown[]) {
      let divisor = 1
      let unidade = 'miliegundos'

      if (emSegundos) {
        divisor = 1000
        unidade = 'segundos'
      }

      const t1 = performance.now()
      const retorno = Reflect.apply(metodoOriginal, this, args)
      const t2 = performance.now()
      console.log(
        `${String(propertyKey)}, tempo de execução ${
          (t2 - t1) / divisor
        } ${unidade}`,
      )

      return retorno
    }
  }
}
