export function inspect(
  target: unknown,
  propertyKey: PropertyKey,
  descriptor: PropertyDescriptor,
) {
  const metodoOriginal = descriptor.value

  descriptor.value = function (...args: unknown[]) {
    console.log(`--- Método ${String(propertyKey)}`)
    console.log(`------ parâmetros ${JSON.stringify(args)}`)

    const retorno = Reflect.apply(metodoOriginal, this, args)

    console.log(`------ retorno: ${JSON.stringify(retorno)}`)
    return retorno
  }

  return descriptor
}
