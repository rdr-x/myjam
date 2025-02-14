'use client'
import { useEffect, useCallback } from 'react'
import { useAtomValue, useAtom } from 'jotai'
import Button from '@/components/Button'
import Board from '@/components/Board'
import PushSendInput from '../PushSendInput'
import {
  pushAccountAtom,
  pushMessagesAtom,
  fetchHistoryAtom,
  chatidAtom,
  // polledMessagesAtom,
} from '@/services/push'
import { PushAuthCon, PermissionAuthCon } from '../AuthCon'
import QR from './QR'

const PushChat: React.FC<{ chatid: string | null }> = ({ chatid }) => {
  const [, setchatid] = useAtom(chatidAtom)
  //TODO: This is due to debugging
  useEffect(() => {
    setchatid(chatid)
  }, [])
  if (!chatid) return <PushChatBoundary />
  return <PushChatCon chatid={chatid} />
}

const PushChatCon: React.FC<{ chatid: string }> = ({ chatid }) => {
  const [, fetchHistory] = useAtom(fetchHistoryAtom)
  // const [polledMessage] = useAtom(polledMessagesAtom)
  const pushAccount = useAtomValue(pushAccountAtom)
  const pushMessages = useAtomValue(pushMessagesAtom)

  useEffect(() => {
    try {
      fetchHistory(chatid)
    } catch (err) {
      console.log(err)
    }
  }, [pushAccount])
  return (
    <div className="grid grid-cols-[2]">
      <Board title="Push Chatting" className="flex flex-col">
        <div className="flex flex-col justify-between grow">
          <div className="flex-col gap-y-[25px]">
            {pushMessages?.map((message, index) => (
              <div
                className="text-16px leading-24px text-[#ffffff]"
                key={index}
              >
                {message}
              </div>
            ))}
          </div>
          <PushAuthCon>
            <PermissionAuthCon chatid={chatid}>
              <PushSendInput chatid={chatid} />
            </PermissionAuthCon>
          </PushAuthCon>
        </div>
      </Board>
      <QR />
    </div>
  )
}

const PushChatBoundary: React.FC = () => {
  return (
    <Board title="Push Chatting" className="flex flex-col">
      <div className="flex flex-col justify-between grow">
        <div className="flex-col gap-y-[25px]">
          <div className="text-16px leading-24px text-[#ffffff]">
            Failed to fetch chatid
          </div>
        </div>
      </div>
    </Board>
  )
}

export default PushChat
