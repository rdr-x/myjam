'use client'
import { useEffect, useCallback } from 'react'
import { useAtomValue, useAtom } from 'jotai'
import Button from '@/components/Button'
import {
  pushAccountAtom,
  pushMessagesAtom,
  fetchHistoryAtom,
} from '@/services/push'
import { PushAuthCon, PermissionAuthCon } from '../AuthCon'
import Board from '@/components/Board'

const PushChat: React.FC<{ chatid: string }> = ({ chatid }) => {
  // const { createPushGroup } = useCreatePushGroup()
  const [, fetchHistory] = useAtom(fetchHistoryAtom)
  // const pushAddress = useAtomValue(pushAddressAtom)
  const pushAccount = useAtomValue(pushAccountAtom)
  const pushMessages = useAtomValue(pushMessagesAtom)

  // const create = useCallback(async () => {
  //   try {
  //     //TODO: creatorAddress+streamKey to format the push group?
  //     let timeStamp = new Date().getTime().toString()
  //     let groupName = timeStamp.concat(pushAddress ?? '')
  //     const groupId = await createPushGroup(groupName)
  //     console.log('groupId', groupId)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }, [pushAddress, createPushGroup])

  const send = useCallback(async () => {
    try {
      const chatRes = await pushAccount?.chat.send(chatid, {
        content: 'Hey!',
        type: 'Text',
      })
    } catch (e) {
      console.log(e)
    }
  }, [pushAccount, chatid])

  useEffect(() => {
    try {
      fetchHistory(chatid)
    } catch (err) {
      console.log(err)
    }
  }, [pushAccount])
  return (
    <Board title="Push Chatting" className="flex flex-col">
      <div className="flex flex-col justify-between grow">
        <div className="flex-col gap-y-[25px]">
          {pushMessages?.map((message, index) => (
            <div className="text-16px leading-24px text-[#ffffff]" key={index}>
              {message}
            </div>
          ))}
        </div>
        <PushAuthCon>
          <PermissionAuthCon chatid={chatid}>
            <Button fullWidth onClick={send}>
              send
            </Button>
          </PermissionAuthCon>
        </PushAuthCon>
        {/* <PushAuthCon>
          <Button onClick={create}>create</Button>
        </PushAuthCon> */}
      </div>
    </Board>
  )
}

export default PushChat
