'use client'
import { ComponentProps } from 'react'
import { useSearchParams } from 'next/navigation'
import { useAtom } from 'jotai'
import { ChatIcon, TempIcon } from '@/components/Icons'
import { toggleShowBoardAtom } from '@/components/Board'
import Button from '@/components/Button'
import FunctionButton from '@/modules/FunctionBtn'
import ClipBoard from '@/modules/ClipBoard'
import AuthCon from '../AuthCon'
import { DOMAIN } from '@/utils/constants'
import { fetchHistoryAtom } from '@/services/push'
import { useDonate } from '@/services/monetize'

export interface FunctionBarProps {
  id?: string
}

const FunctionBar: React.FC<FunctionBarProps & ComponentProps<'div'>> = ({
  id,
  ...props
}) => {
  const [showBoard, toggleShowBaord] = useAtom(toggleShowBoardAtom)
  // const [, fetchHistory] = useAtom(fetchHistoryAtom)
  const { donate } = useDonate()
  //TODO: move to jotai
  const searchParams = useSearchParams()
  const chatid = searchParams.get('chatid')
  const contractAddr = searchParams.get('contractAddr')
  const creatorAddr = searchParams.get('creatorAddr')

  return (
    <div
      className="mt-[27px] flex flex-row items-center justify-center gap-x-[12px]"
      {...props}
    >
      <ClipBoard
        content={`${DOMAIN}view/${id}?chatid=${chatid}&contractAddr=${contractAddr}&creatorAddr=${creatorAddr}`}
      />
      <FunctionButton curPath={showBoard} onClick={toggleShowBaord}>
        <ChatIcon curPath={showBoard} />
      </FunctionButton>
      {/* <FunctionButton
        curPath={showBoard}
        onClick={() => {
          if (!chatid) return
          fetchHistory(chatid)
        }}
      >
        <TempIcon curPath={false} />
      </FunctionButton> */}
      {creatorAddr && (
        <AuthCon>
          <Button
            color="amber"
            onClick={() => {
              donate(creatorAddr)
            }}
          >
            Donate 0.01matic
          </Button>
        </AuthCon>
      )}
    </div>
  )
}

export default FunctionBar
