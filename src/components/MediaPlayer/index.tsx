import { FC, ReactNode, use } from 'react';
import { Broadcast } from '@livepeer/react';
import { useAtom } from 'jotai';
import { toggleShowBoardAtom } from '../Board';
import PushChat from '@/modules/PushChat';

interface PlayerProps {
  children?: ReactNode
  title?: string
  streamKey: string | undefined
}

//TODO: this should be moved to page
const MediaPlayer: FC<PlayerProps> = ({ title, streamKey }) => {
  return (
    <section className="px-[32px] grid sm:grid-cols-[2.33fr,1fr] gap-y-[16px] sm:gap-x-[32px] w-full h-full min-h-[calc(100vh-80px)]">
      <Streaming title={title} streamKey={streamKey} />
      <PushChat chatid="9c950af0651a8533c0ce7fdd06362864d1fef7f6ede459e1283d5f30091ba609" />
    </section>
  )
}

const Streaming: FC<PlayerProps> = ({ title, streamKey }) => {
  const [, toggleShowBaord] = useAtom(toggleShowBoardAtom)
  return (
    <section className="flex flex-col grow items-center justify-start">
      <h1 className="mb-[.5rem] text-center text-white text-4xl font-semibold leading-[54px]">
        {title}
      </h1>
      <div className="flex justify-center items-center w-full h-full">
        <Broadcast
          streamKey={streamKey}
          controls={{ autohide: 0, hotKey: false, defaultVolume: 0.6 } as any}
          aspectRatio="16to9"
          objectFit="cover"
        />
      </div>
      <button onClick={toggleShowBaord}>toggle</button>
    </section>
  )
}

export { MediaPlayer }
