import { JolocomStacksDidMethodPlugin } from '../src'
import { JolocomSDK } from '@jolocom/sdk'
import { IStorage } from '@jolocom/sdk/js/storage'
import { MAINNET_TEST_DID } from './data'
import { stub } from './utils'

describe('sdk-did-method-stacks plugin', () => {
  it('can resolve a DID anchored on the mainnet', async () => {
    const mockStorage = stub<IStorage>({
      get: {
        identity: jest.fn()
      },
      store: {
        identity: jest.fn()
      }
    })
    const sdk = new JolocomSDK({ storage: mockStorage })
    await sdk.usePlugins(new JolocomStacksDidMethodPlugin())
    const resolvedDoc = await sdk.resolve(MAINNET_TEST_DID)
    expect(resolvedDoc).toBeDefined()
  });
});

