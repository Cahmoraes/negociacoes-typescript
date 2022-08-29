import { IImprimivel } from '../utils/imprimivel.js'
import { IComparavel } from './comparavel.js'

export interface IModelo<T> extends IImprimivel, IComparavel<T> {}
