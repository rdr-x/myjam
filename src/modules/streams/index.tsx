'use client'
import { FC } from 'react'
import { liveStreams, upcomingStreams } from '@/services/stream'
import { StreamCard } from '@/components/Stream'
const ViewPage: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-[1920px] h-inherit gap-1">
      {/* <div className="flex flex-col justify-center items-center max-w-fit h-fit">
                <h1 className="self-start w-inherit text-white text-3xl font-medium mt-[1rem] mb-[1.7rem]">Live Streams</h1>
                <div className="lg:grid lg:grid-cols-3 sm:flex flex-wrap flex-col h-fit lg:row-2 sm:gap-[1rem]">
                    {liveStreams.map((stream,index) => {
                        return (
                            <StreamCard
                                key={index}
                                id={stream.id}
                                streamer={stream.streamer}
                                description={stream.description}
                                audience={stream.audience}
                                status={stream.status}
                                cost={stream.cost}
                            />
                        );
                    })}
                </div>
            </div> */}
      <div className="flex flex-col justify-center items-center max-w-fit max-h-fit">
        <h1 className="self-start w-inherit text-white text-3xl font-medium mt-[1rem] mb-[1.7rem]">
          Upcoming Streams
        </h1>
        <div className="flex flex-wrap sm:flex-col lg:flex-row justify-center items-center gap-[1rem]">
          {liveStreams.map((stream, index) => {
            return (
              <StreamCard
                key={index}
                id={stream.id}
                streamer={stream.streamer}
                description={stream.description}
                audience={stream.audience}
                status={stream.status}
                cost={stream.cost}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ViewPage
