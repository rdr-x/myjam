'use client'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useAtomValue } from 'jotai'
import { SendIcon } from '@/components/Icons'
import Input from '@/components/Input'
import Spin from '@/components/Spin'
import useInTransaction from '@/hooks/useIntransaction'
import { pushAccountAtom } from '@/services/push'

export interface MessageForm {
  content: string
}

const PushSendInput: React.FC<{ chatid: string }> = ({ chatid }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MessageForm>()
  const pushAccount = useAtomValue(pushAccountAtom)

  const onSubmit = useCallback(
    async (data: MessageForm) => {
      try {
        const chatRes = await pushAccount?.chat.send(chatid, {
          content: data.content,
          type: 'Text',
        })
        reset()
      } catch (e) {
        console.log(e)
      }
    },
    [pushAccount, chatid]
  )

  const { loading, handleExecAction } = useInTransaction(onSubmit)

  return (
    <form onSubmit={handleSubmit(handleExecAction)}>
      <Input
        {...register('content', { required: true })}
        icon={
          loading ? (
            <Spin className="w-[24px] h-[24px]" />
          ) : (
            <button className="outline-none">
              <SendIcon />
            </button>
          )
        }
        className="!rounded-[60px] !border-[0.5px] !border-[#ffffff] !bg-[rgba(0,0,0,0.30)] !ring-[0px]"
        inputClassName="!text-[16px] !leading-[24px] !text-[#ffffff] !outline-none !ring-[0px] bg-transparent"
      />
    </form>
  )
}

export default PushSendInput
