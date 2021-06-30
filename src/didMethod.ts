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
  prefix = PREFIX
  resolver: IResolver
  registrar: IRegistrar

  constructor(stacksNetwork?: StacksNetwork) {
    this.resolver = new StacksResolver(stacksNetwork)
    this.registrar = new StacksRegistrar()
  }
}
