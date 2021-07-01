import {
  IDidMethod,
  IRegistrar,
  IResolver,
} from 'jolocom-lib/js/didMethods/types'
import { PREFIX } from './constant'
import { StacksNetwork } from '@stacks/network'
import { StacksResolver } from './resolver'
import { StacksRegistrar } from './registrar'

export class StacksDidMethod implements IDidMethod {
  prefix: string
  resolver: IResolver
  registrar: IRegistrar

  constructor(stacksNetwork?: StacksNetwork, prefix = PREFIX) {
    this.prefix = prefix
    this.resolver = new StacksResolver(stacksNetwork, prefix)
    this.registrar = new StacksRegistrar()
  }
}
