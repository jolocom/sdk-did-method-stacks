import { IRegistrar } from 'jolocom-lib/js/didMethods/types'
import { PREFIX } from './constant'
import { SoftwareKeyProvider } from 'jolocom-lib'
import { Identity } from 'jolocom-lib/js/identity/identity'

export class StacksRegistrar implements IRegistrar {
  prefix = PREFIX

  // prettier-ignore
  // @ts-ignore
  create(keyProvider: SoftwareKeyProvider, password: string): Promise<Identity> {
    throw new Error('Not implemented')
  }

  // @ts-ignore
  encounter(events: string): Promise<Identity> {
    throw new Error('Not implemented')
  }

  // prettier-ignore
  // @ts-ignore
  updatePublicProfile(keyProvider: SoftwareKeyProvider, password: string, identity: Identity, publicProfile: any,): Promise<boolean> {
    throw new Error('Not implemented')
  }
}
