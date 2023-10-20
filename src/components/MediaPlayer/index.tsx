import { FC, ReactNode, use } from 'react';
import { Broadcast } from '@livepeer/react';
import { useAtom } from 'jotai';
import { toggleShowBoardAtom } from '../Board';
import PushChat from '@/modules/PushChat';

interface PlayerProps {
  children?: ReactNode
  title?: string
  streamKey?: string
}

//TODO: this should be moved to page
const MediaPlayer: FC<PlayerProps & { chatId: string | null }> = ({
  title,
  streamKey,
  chatId,
}) => {
  return (
    <section className="px-[32px] grid sm:grid-cols-[2.33fr,1fr] gap-y-[16px] sm:gap-x-[32px] w-full h-full min-h-[calc(100vh-80px)]">
      <Streaming title={title} streamKey={streamKey} />
      <PushChat chatid={chatId} />
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
