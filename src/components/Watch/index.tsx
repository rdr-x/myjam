'use client'
import { FC, useEffect } from 'react'
import { useStream, Player } from '@livepeer/react'
import { useAtom } from 'jotai'
import { streamState } from '@/services/stream'

const Watch: FC<{ streamId: string }> = ({ streamId }) => {
  const [currentStream, setCurrentStream] = useAtom(streamState)

  const { data: stream } = useStream(streamId)

  useEffect(() => {
    if (!stream) return
    console.log(stream)
    //TODO:
    setCurrentStream(stream)
  }, [stream])

  return (
    <div className="flex flex-col justify-center items-center grow">
      <h1 className="text-white lg:text-4xl sm:text-xl font-semibold leading-[30px]">
        Watch {currentStream?.name}
      </h1>
      {/* <StreamFeatures
                status={currentStream?.status}
                audience={currentStream?.audience}
            /> */}
      <Player
        showTitle
        priority
        lowLatency
        title={currentStream?.name}
        playbackId={currentStream?.playbackId}
      />
      <span className="text-white text-base font-normal leading-normal">
        Live streaming description! New album coming soon!
      </span>
      {/* <Button color="amber">Donate</Button> */}
    </div>
  )
}

export { Watch }
