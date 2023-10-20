'use client'
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

const FunctionBar: React.FC<FunctionBarProps> = ({ id, chatId }) => {
  const [showBoard, toggleShowBaord] = useAtom(toggleShowBoardAtom)
  return (
    <>
      <ClipBoard content={`${DOMAIN}view/${id}?chatid=${chatId}`} />
      <FunctionButton curPath={showBoard} onClick={toggleShowBaord}>
        <ChatIcon curPath={showBoard} />
      </FunctionButton>
    </>
  )
}

export default FunctionBar
