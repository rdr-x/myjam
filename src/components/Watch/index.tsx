"use client";
import { FC, useEffect, useState } from "react";
import { useStream, Player } from "@livepeer/react";
import { usePathname } from "next/navigation";
import { streamState, StreamObject, liveStreams } from "@/services/stream";
import { StreamFeatures } from "@/components/StreamFeatures";
import Button from "@/components/Button";

const Watch: FC = () => {
    const [currentStream, setCurrentStream] = useState<StreamObject | unknown>(streamState);
    const path = usePathname();
    const streamId = path.split('/view/')[1];

    const {
        data: stream,
    } = useStream(streamId);

    useEffect(() => {
        if(!stream) return;
        setCurrentStream(stream);
    },[stream]);

    return (
        <div className="flex flex-col justify-center items-center pl-[2rem] gap-2">
            <h1 className="self-start text-white lg:text-4xl sm:text-xl font-semibold leading-[30px]">Watch {currentStream?.name}</h1>
            <div className="self-start">
                <StreamFeatures
                    status={liveStreams[0]?.status}
                    audience={liveStreams[0]?.audience}
                />
            </div>
            <div className="self-start">
                <Player
                    showTitle
                    priority
                    lowLatency
                    title={currentStream?.name}
                    playbackId={currentStream?.playbackId}
                    aspectRatio="16:9"
                    objectFit="cover"
                />
            </div>
            <span className="self-start text-white text-base font-normal leading-normal">
                Live streaming description! New album coming soon!
            </span>
            <div className="self-start">
                <Button
                    color="amber"
                >
                    Donate
                </Button>
            </div>
        </div>
    );
}

export { Watch };