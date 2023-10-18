'use client'
import { useEffect, useCallback } from 'react'
import { useAtomValue, useAtom } from 'jotai'
import Button from '@/components/Button'
import {
  useCreatePushGroup,
  pushAddressAtom,
  pushAccountAtom,
  pushMessagesAtom,
  fetchHistoryAtom,
} from '@/services/push'
import { PushAuthCon, PermissionAuthCon } from '../AuthCon'

const PushChat: React.FC = () => {
  const { createPushGroup } = useCreatePushGroup()
  const [, fetchHistory] = useAtom(fetchHistoryAtom)
  const pushAddress = useAtomValue(pushAddressAtom)
  const pushAccount = useAtomValue(pushAccountAtom)
  const pushMessages = useAtomValue(pushMessagesAtom)

  const create = useCallback(async () => {
    try {
      //TODO: creatorAddress+streamKey to format the push group?
      let timeStamp = new Date().getTime().toString()
      let groupName = timeStamp.concat(pushAddress ?? '')
      const groupId = await createPushGroup(groupName)
      console.log('groupId', groupId)
    } catch (e) {
      console.log(e)
    }
  }, [pushAddress, createPushGroup])

  const send = useCallback(async () => {
    try {
      const chatRes = await pushAccount?.chat.send(
        '9c950af0651a8533c0ce7fdd06362864d1fef7f6ede459e1283d5f30091ba609',
        {
          content: 'Hey!',
          type: 'Text',
        }
      )
    } catch (e) {
      console.log(e)
    }
  }, [pushAccount])

  useEffect(() => {
    try {
      fetchHistory(
        '9c950af0651a8533c0ce7fdd06362864d1fef7f6ede459e1283d5f30091ba609'
      )
    } catch (err) {
      console.log(err)
    }
  }, [pushAccount])
  return (
    <div>
      <div className="flex-col gap-y-[12px]">
        {pushMessages?.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <PushAuthCon>
        <PermissionAuthCon>
          <Button onClick={send}>send</Button>
        </PermissionAuthCon>
      </PushAuthCon>
      <PushAuthCon>
        <Button onClick={create}>create</Button>
      </PushAuthCon>
    </div>
  )
}

export default PushChat
