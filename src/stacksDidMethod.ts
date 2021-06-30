import {
  IDidMethod,
  IRegistrar,
  IResolver,
} from 'jolocom-lib/js/didMethods/types'
import { PREFIX } from './constant'

export class StacksDidMethod implements IDidMethod {
  prefix = PREFIX
  resolver: IResolver
  registrar: IRegistrar

  constructor(resolver: IResolver, registrar: IRegistrar) {
    this.resolver = resolver
    this.registrar = registrar
  }
}
