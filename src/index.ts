import { JolocomPlugin, JolocomSDK } from '@jolocom/sdk'
import { PREFIX } from './constant'
import { StacksDidMethod } from './didMethod'
import { StacksNetwork } from '@stacks/network'

export class JolocomStacksDidMethodPlugin implements JolocomPlugin {
  private readonly stacksNetwork?: StacksNetwork
  private readonly prefix: string

  constructor(stacksNetwork?: StacksNetwork, prefix = PREFIX) {
    this.stacksNetwork = stacksNetwork
    this.prefix = prefix
  }

  async register(sdk: JolocomSDK) {
    await sdk.didMethods.register(
      this.prefix,
      new StacksDidMethod(this.stacksNetwork, this.prefix),
    )
  }
}
