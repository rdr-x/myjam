import { useCallback } from 'react'
import { atom, useAtomValue } from 'jotai'
import {
  PushAPI,
  Env,
  IMessageIPFS,
  ConditionType,
} from '@pushprotocol/restapi'
import { ethers } from 'ethers'

export const pushAccountAtom = atom<PushAPI | null>(null)
export const pushAddressAtom = atom<string | null>(null)
export const pushMessagesAtom = atom<string[]>([])
export const permissionAtom = atom<boolean>(false)

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
  const pushAddress = useAtomValue(pushAddressAtom)

  const createPushGroup = useCallback(async () => {
    try {
      if (!pushAccount) throw new Error('Please initialize push account')
      let groupName = new Date()
        .getTime()
        .toString()
        .concat(pushAddress ?? '')
      const groupRes = await pushAccount.chat.group.create(
        groupName.slice(0, 50),
        {
          description: 'MyJam chatting group',
          image: 'data:image/png;base64,iVBORw0K...',
          members: [],
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
  }, [pushAccount, pushAddress])

  const createGatedPushGroup = useCallback(
    async (tokenAdd: string) => {
      try {
        if (!pushAccount) throw new Error('Please initialize push account')
        let groupName = new Date()
          .getTime()
          .toString()
          .concat(pushAddress ?? '')
        const groupRes = await pushAccount.chat.group.create(
          groupName.slice(0, 50),
          {
            description: 'MyJam gated chatting group',
            image: 'data:image/png;base64,iVBORw0K...',
            members: [],
            admins: [],
            private: false,
            rules: {
              entry: { conditions: [] },
              chat: {
                conditions: [
                  {
                    any: [
                      {
                        type: 'PUSH' as ConditionType,
                        category: 'ERC20',
                        subcategory: 'holder',
                        data: {
                          contract: `eip155:80001:${tokenAdd}`,
                          comparison: '>=',
                          amount: 1,
                          decimals: 18,
                        },
                      },
                    ],
                  },
                ],
              },
            },
          }
        )
        return groupRes.chatId
      } catch (err) {
        throw err
      }
    },
    [pushAccount, pushAddress]
  )

  return { createPushGroup, createGatedPushGroup }
}

export const fetchHistoryAtom = atom(null, async (get, set, chatId: string) => {
  try {
    if (typeof window === 'undefined') return
    const pushAccount = get(pushAccountAtom)
    if (!pushAccount || !chatId) return
    // throw new Error('Please initialize push account')
    const historyRes = await pushAccount.chat.history(chatId)
    const historyMessages: string[] = []
    historyRes.forEach((message) => {
      historyMessages.push(message.messageContent)
    })
    set(pushMessagesAtom, [...historyMessages])
  } catch (err) {
    throw err
  }
})

export const checkPermissionAtom = atom(
  null,
  async (get, set, chatId: string) => {
    try {
      const pushAccount = get(pushAccountAtom)
      if (!pushAccount || !chatId)
        throw new Error('Please initialize push account')
      const permissionRes = await pushAccount.chat.group.permissions(chatId)
      if (permissionRes.entry && permissionRes.chat) {
        await pushAccount.chat.group.join(chatId)
        set(permissionAtom, true)
        return true
      } else {
        return false
      }
    } catch (err) {
      throw err
    }
  }
)
