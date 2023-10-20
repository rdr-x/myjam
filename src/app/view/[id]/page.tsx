'use client'
import { FC } from 'react'
import cx from 'clsx'
import { useSearchParams } from 'next/navigation'
import { useAtomValue } from 'jotai'
import { Watch } from '@/components/Watch'
import { toggleShowBoardAtom } from '@/components/Board'
import PushChat from '@/modules/PushChat'
// import {SideEvents} from "@/modules/SideEvents";

const StreamPage: FC = () => {
  const showBoard = useAtomValue(toggleShowBoardAtom)
  const searchParams = useSearchParams()
  const chatid = searchParams.get('chatid')

  return (
    <div
      className={cx(
        'px-[32px] grid gap-y-[16px] sm:gap-x-[32px] w-full h-full min-h-[calc(100vh-80px)]',
        showBoard ? 'sm:grid-cols-[2.33fr,1fr]' : 'sm:grid-cols-[1fr,0fr]'
      )}
    >
      {/* <SideEvents /> */}
      <Watch />
      <PushChat chatid={chatid} />
    </div>
  )
}

export default StreamPage
