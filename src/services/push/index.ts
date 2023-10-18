import { useCallback } from 'react'
import { atom, useAtomValue } from 'jotai'
import { PushAPI, Env } from '@pushprotocol/restapi'
import { ethers } from 'ethers'

export const pushAccountAtom = atom<PushAPI | null>(null)
export const pushAddressAtom = atom<string | null>(null)

export const initializePushAtom = atom(null, async (get, set) => {
  try {
    if (typeof window === 'undefined') return
    if (!window.ethereum) {
      throw new Error('Please install MetaMask')
    }
    const provider = await new ethers.providers.Web3Provider(window.ethereum)
    const signer = await provider.getSigner()
    // const user = await PushAPI.initialize(signer, { env: "prod" as Env });
    const user = await PushAPI.initialize(signer)
    const pushAddress = await signer.getAddress()
    set(pushAddressAtom, pushAddress)
    set(pushAccountAtom, user)
  } catch (err) {
    throw err
  }
})

export const useCreatePushGroup = () => {
  const pushAccount = useAtomValue(pushAccountAtom)

  const createPushGroup = useCallback(
    async (groupName: string) => {
      try {
        if (!pushAccount) throw new Error('Please initialize push account')
        debugger
        const groupRes = await pushAccount.chat.group.create(
          groupName.slice(0, 50),
          {
            description: 'This is a group',
            image: 'data:image/png;base64,iVBORw0K...',
            members: [
              '0x2E7A81e310ef354005fC125734665Ab691e1577B',
              '0x85fd869ee184aDfcC1691Df04907b584F47d45aD',
              '0x2f0c8cE87Bf9FBC5DB6c7401Ee911a1bD4AEA0B9',
            ],
            admins: [],
            private: false,
            rules: {
              entry: { conditions: [] },
              chat: { conditions: [] },
            },
          }
        )
        return groupRes.chatId
      } catch (err) {
        throw err
      }
    },
    [pushAccount]
  )

  return { createPushGroup }
}
