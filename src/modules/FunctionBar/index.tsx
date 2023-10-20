'use client'
import { ComponentProps } from 'react'
import { useSearchParams } from 'next/navigation'
import { useAtom } from 'jotai'
import { ChatIcon } from '@/components/Icons'
import FunctionButton from '@/modules/FunctionBtn'
import ClipBoard from '@/modules/ClipBoard'
import { DOMAIN } from '@/utils/constants'
import { toggleShowBoardAtom } from '@/components/Board'

export interface FunctionBarProps {
  id?: string
}

const FunctionBar: React.FC<FunctionBarProps & ComponentProps<'div'>> = ({
  id,
  ...props
}) => {
  const [showBoard, toggleShowBaord] = useAtom(toggleShowBoardAtom)
  //TODO: move to jotai
  const searchParams = useSearchParams()
  const chatId = searchParams.get('chatid')
  const contractAddr = searchParams.get('contractAddr')

  return (
    <div
      className="mt-[27px] flex flex-row items-center justify-center gap-x-[12px]"
      {...props}
    >
      <ClipBoard
        content={`${DOMAIN}view/${id}?chatid=${chatId}&contractAddr=${contractAddr}`}
      />
      <FunctionButton curPath={showBoard} onClick={toggleShowBaord}>
        <ChatIcon curPath={showBoard} />
      </FunctionButton>
    </div>
  )
}

export default FunctionBar
