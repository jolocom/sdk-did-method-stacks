import { IResolver } from 'jolocom-lib/js/didMethods/types'
import { Identity } from 'jolocom-lib/js/identity/identity'
import { getResolver } from '@jolocom/stacks-did-resolver'
import { DidDocument } from 'jolocom-lib/js/identity/didDocument/didDocument'
import { ErrorCodes } from 'jolocom-lib/js/errors'
import { PREFIX } from './constant'

export class StacksResolver implements IResolver {
  prefix = PREFIX

  async resolve(did: string): Promise<Identity> {
    const jsonDidDoc = await getResolver()(did).catch(() => {
      throw new Error(ErrorCodes.RegistryDIDNotAnchored)
    })

    return Identity.fromDidDocument({
      //@ts-ignore
      didDocument: DidDocument.fromJSON(jsonDidDoc),
    })
  }
}
