export function inspect(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`--- Método ${String(propertyKey)}`);
        console.log(`------ parâmetros ${JSON.stringify(args)}`);
        const retorno = Reflect.apply(metodoOriginal, this, args);
        console.log(`------ retorno: ${JSON.stringify(retorno)}`);
        return retorno;
    };
    return descriptor;
}
//# sourceMappingURL=inspect.js.map