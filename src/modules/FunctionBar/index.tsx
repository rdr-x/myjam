'use client'
import { ComponentProps } from 'react'
import { useSearchParams } from 'next/navigation'
import { useAtom } from 'jotai'
import { ChatIcon, TempIcon } from '@/components/Icons'
import { toggleShowBoardAtom } from '@/components/Board'
import FunctionButton from '@/modules/FunctionBtn'
import ClipBoard from '@/modules/ClipBoard'
import { DOMAIN } from '@/utils/constants'
import { fetchHistoryAtom } from '@/services/push'

export interface FunctionBarProps {
  id?: string
}

const FunctionBar: React.FC<FunctionBarProps & ComponentProps<'div'>> = ({
  id,
  ...props
}) => {
  const [showBoard, toggleShowBaord] = useAtom(toggleShowBoardAtom)
  const [, fetchHistory] = useAtom(fetchHistoryAtom)
  //TODO: move to jotai
  const searchParams = useSearchParams()
  const chatid = searchParams.get('chatid')
  const contractAddr = searchParams.get('contractAddr')

  return (
    <div
      className="mt-[27px] flex flex-row items-center justify-center gap-x-[12px]"
      {...props}
    >
      <ClipBoard
        content={`${DOMAIN}view/${id}?chatid=${chatid}&contractAddr=${contractAddr}`}
      />
      <FunctionButton curPath={showBoard} onClick={toggleShowBaord}>
        <ChatIcon curPath={showBoard} />
      </FunctionButton>
      <FunctionButton
        curPath={showBoard}
        onClick={() => {
          if (!chatid) return
          fetchHistory(chatid)
        }}
      >
        <TempIcon curPath={false} />
      </FunctionButton>
    </div>
  )
}

export default FunctionBar
