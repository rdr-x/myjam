'use client'
import { useEffect, useCallback } from 'react'
import { useAtomValue } from 'jotai'
import { useWalletClient } from 'wagmi'
import { PushAPI, Env } from '@pushprotocol/restapi'
import Button from '@/components/Button'
import {
  useCreatePushGroup,
  pushAddressAtom,
  pushAccountAtom,
} from '@/services/push'
import { PushAuthCon } from '../AuthCon'

const PushChat: React.FC = () => {
  const { createPushGroup } = useCreatePushGroup()
  const pushAddress = useAtomValue(pushAddressAtom)
  const pushAccount = useAtomValue(pushAccountAtom)
  console.log('pushAccount', pushAccount)
  console.log('pushAddress', pushAddress)
  //   const { data: signer } = useWalletClient();

  const create = useCallback(async () => {
    try {
      //TODO: creatorAddress+streamKey to format the push group?
      let timeStamp = new Date().getTime().toString()
      let groupName = timeStamp.concat(pushAddress ?? '')
      const groupId = await createPushGroup(groupName)
      console.log('groupId', groupId)
      //   const restSend = await pushAccount?.chat.send(
      //     "0x2f0c8cE87Bf9FBC5DB6c7401Ee911a1bD4AEA0B9",
      //     {
      //       content: "Hello Bob!",
      //       type: "Text",
      //     }
      //   );
      //   console.log("message sent", restSend);
      //   console.log("usercreated");
      //   const res = await user?.chat.group.create(groupName.slice(0, 49));
      //   console.log("chatID", res?.chatId);
    } catch (e) {
      console.log(e)
    }
  }, [pushAddress, createPushGroup])

  const send = useCallback(async () => {
    try {
      const chatRes = await pushAccount?.chat.send(
        'e8a730d20062e22fad9edbf334e0c9f35e7ef7c4a070ead55e9463dacadd6c8c',
        {
          content: 'Hello Bob!',
          type: 'Text',
        }
      )
      console.log('chatRes', chatRes)
    } catch (e) {
      console.log(e)
    }
  }, [pushAccount])
  return (
    <div>
      123
      <PushAuthCon>
        <Button onClick={send}>send</Button>
      </PushAuthCon>
      <PushAuthCon>
        <Button onClick={create}>create</Button>
      </PushAuthCon>
    </div>
  )
}

export default PushChat
