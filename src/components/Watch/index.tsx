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
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-white lg:text-4xl sm:text-xl font-semibold leading-[30px]">Watch {currentStream?.name}</h1>
            <StreamFeatures
                status={liveStreams[0]?.status}
                audience={liveStreams[0]?.audience}
            />
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
            <Button
                color="amber"
            >
                Donate
            </Button>
        </div>
    );
}

export { Watch };