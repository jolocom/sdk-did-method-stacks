import { IResolver } from 'jolocom-lib/js/didMethods/types'
import { Identity } from 'jolocom-lib/js/identity/identity'
import { getResolver } from '@jolocom/stacks-did-resolver/js/resolver'
import { DidDocument } from 'jolocom-lib/js/identity/didDocument/didDocument'
import { ErrorCodes } from 'jolocom-lib/js/errors'
import { PREFIX } from './constant'
import { StacksNetwork } from '@stacks/network'
import { DIDDocument } from 'did-resolver'

type Resolve = (did: string) => Promise<DIDDocument>

export class StacksResolver implements IResolver {
  private readonly resolver: Resolve
  prefix: string

  constructor(stacksNetwork?: StacksNetwork, prefix = PREFIX) {
    this.resolver = getResolver(stacksNetwork)
    this.prefix = prefix
  }

  async resolve(did: string): Promise<Identity> {
    const jsonDidDoc = await this.resolver(did).catch(() => {
      throw new Error(ErrorCodes.RegistryDIDNotAnchored)
    })

    return Identity.fromDidDocument({
      //@ts-ignore
      didDocument: DidDocument.fromJSON(jsonDidDoc),
    })
  }
}
