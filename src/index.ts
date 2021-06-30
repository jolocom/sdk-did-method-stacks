import { JolocomPlugin, JolocomSDK } from '@jolocom/sdk'
import { PREFIX } from './constant'
import { StacksDidMethodFactory } from './stacksDidMethodFactory'

export class JolocomStacksDidMethodPlugin implements JolocomPlugin {
  private _didMethodFactory: StacksDidMethodFactory

  constructor() {
    this._didMethodFactory = new StacksDidMethodFactory()
  }

  async register(sdk: JolocomSDK) {
    await sdk.didMethods.register(PREFIX, this._didMethodFactory.create())
  }
}
