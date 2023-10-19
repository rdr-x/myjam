'use client';
import { FC } from "react";
import { liveStreams, upcomingStreams } from "@/services/stream";
import { StreamCard } from "@/components/Stream";
const ViewPage: FC = () => {
    return (
        <div className="flex flex-col items-center w-[100vw] h-[100vh] mt-[-3rem]">
            <div className="flex flex-col items-center w-[80vw]">
                <h1 className="self-start  text-white text-3xl font-medium mb-[1.7rem] ml-[2.5rem]">Live Streams</h1>
                <div className="grid sm:grid-cols-1 lg:grid-cols-3 lg:row-2 gap-[1rem]">
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
            <div className="flex flex-col justify-center items-center w-[80vw] mt-[3rem] mb-[3rem]">
                <h1 className="self-start text-white text-3xl font-medium mb-[1.7rem] ml-[2.5rem]">Upcoming Streams</h1>
                <div className="flex sm:flex-col lg:flex-row justify-center items-center gap-[1rem]">
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
            </div>
        </div>
    );
};

export default ViewPage;
