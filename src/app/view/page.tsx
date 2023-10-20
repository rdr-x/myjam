'use client'
import { FC } from 'react'
// import { liveStreams, upcomingStreams } from "@/components/Stream/data";
import { StreamCard } from '@/components/Stream'
const ViewPage: FC = () => {
  return (
    <div className="flex flex-col items-center w-[100vw] h-[100vh] mt-[5rem]">
      View
      {/* <div className="flex flex-col items-center w-[80vw]">
              <h1 className="self-start  text-white text-3xl font-medium mb-[1.7rem] ml-[2.5rem]">Live Streams</h1>
              <div className="grid grid-cols-3 row-2 gap-[1rem]">
                  {liveStreams.map((stream) => {
                        return (
                            <StreamCard
                                key={stream.id}
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
          </div>
          <div className="flex flex-col justify-center items-center w-[80vw] mt-[3rem]">
              <h1 className="self-start text-white text-3xl font-medium mb-[1.7rem] ml-[2.5rem]">Upcoming Streams</h1>
              <div className="flex justify-center items-center gap-[1rem]">
                  {upcomingStreams.map((stream, index) => {
                        return (
                            <StreamCard
                                key={stream.id}
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
    </div>
  )
}

export default ViewPage
