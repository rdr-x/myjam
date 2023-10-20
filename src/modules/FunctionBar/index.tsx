'use client'
import { ComponentProps } from 'react'
import { useAtom } from 'jotai'
import { ChatIcon } from '@/components/Icons'
import FunctionButton from '@/modules/FunctionBtn'
import ClipBoard from '@/modules/ClipBoard'
import { DOMAIN } from '@/utils/constants'
import { toggleShowBoardAtom } from '@/components/Board'

export interface FunctionBarProps {
  id?: string
  chatId: string | null
}

const FunctionBar: React.FC<FunctionBarProps & ComponentProps<'div'>> = ({
  id,
  chatId,
  ...props
}) => {
  const [showBoard, toggleShowBaord] = useAtom(toggleShowBoardAtom)
  return (
    <div
      className="mt-[27px] flex flex-row items-center justify-center gap-x-[12px]"
      {...props}
    >
      <ClipBoard content={`${DOMAIN}view/${id}?chatid=${chatId}`} />
      <FunctionButton curPath={showBoard} onClick={toggleShowBaord}>
        <ChatIcon curPath={showBoard} />
      </FunctionButton>
    </div>
  )
}

export default FunctionBar
