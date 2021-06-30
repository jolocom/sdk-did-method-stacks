import { StacksResolver } from './stacksResolver'
import { StacksDidMethod } from './stacksDidMethod'
import { StacksRegistrar } from './stacksRegistrar'

export class StacksDidMethodFactory {
  public create() {
    const resolver = new StacksResolver()
    const registrar = new StacksRegistrar()

    return new StacksDidMethod(resolver, registrar)
  }
}
