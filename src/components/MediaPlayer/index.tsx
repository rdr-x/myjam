'use client'
import { FC, ReactNode } from 'react'
import { Broadcast } from '@livepeer/react'
import { useAtom } from 'jotai'
import cx from 'clsx'
import { toggleShowBoardAtom } from '../Board'
import PushChat from '@/modules/PushChat'
import FunctionBar from '@/modules/FunctionBar'

//TODO: minimize&optimization
interface PlayerProps {
  children?: ReactNode
  title?: string
  streamKey?: string
  id?: string
  chatId: string | null
}

//TODO: this should be moved to page
const MediaPlayer: FC<PlayerProps> = ({ title, streamKey, chatId, id }) => {
  const [showBoard] = useAtom(toggleShowBoardAtom)

  return (
    <div
      className={cx(
        'px-[32px] grid gap-y-[16px] sm:gap-x-[32px] w-full h-full min-h-[calc(100vh-80px)]',
        showBoard ? 'sm:grid-cols-[2.33fr,1fr]' : 'sm:grid-cols-[1fr,0fr]'
      )}
    >
      <Streaming title={title} streamKey={streamKey} id={id} chatId={chatId} />
      <PushChat chatid={chatId} />
    </div>
  )
}

//TODO: animation for collapse
const Streaming: FC<PlayerProps> = ({ title, streamKey, id, chatId }) => {
  const [showBoard, toggleShowBaord] = useAtom(toggleShowBoardAtom)

  return (
    <section className="flex flex-col grow items-center justify-start">
      <h1 className="mb-[.5rem] text-center text-white text-4xl font-semibold leading-[54px]">
        {title}
      </h1>
      <div className="flex justify-center items-center w-full h-fit">
        <Broadcast
          streamKey={streamKey}
          controls={{ autohide: 0, hotKey: false, defaultVolume: 0.6 } as any}
          aspectRatio="16to9"
          objectFit="cover"
        />
      </div>
      <div className="mt-[27px] flex flex-row items-center justify-center gap-x-[12px]">
        <FunctionBar id={id} chatId={chatId} />
      </div>
    </section>
  )
}

export { MediaPlayer }
