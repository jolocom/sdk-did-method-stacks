import { JolocomPlugin, JolocomSDK } from '@jolocom/sdk'
import { PREFIX } from './constant'
import { StacksDidMethod } from './didMethod'
import { StacksNetwork } from '@stacks/network'

export class JolocomStacksDidMethodPlugin implements JolocomPlugin {
  private readonly stacksNetwork?: StacksNetwork

  constructor(stacksNetwork?: StacksNetwork) {
    this.stacksNetwork = stacksNetwork
  }

  async register(sdk: JolocomSDK) {
    await sdk.didMethods.register(
      PREFIX,
      new StacksDidMethod(this.stacksNetwork),
    )
  }
}
