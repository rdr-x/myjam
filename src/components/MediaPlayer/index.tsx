import {FC, ReactNode} from "react";
import { Broadcast } from '@livepeer/react';
import {Chat} from "@/modules/Chat";

interface PlayerProps {
    children?: ReactNode;
    title?: string;
    streamKey: string | undefined;
}

const MediaPlayer: FC<PlayerProps> = ({ title, streamKey }) => {
  return (
      <section className="flex mt-[2.5rem] gap-4">
          <Streaming title={title} streamKey={streamKey}/>
          <Chat />
      </section>
  );
}

const Streaming: FC<PlayerProps> = ({ children, title, streamKey }) => {

  return (
      <section className="column-1 w-[70vw] items-center">
          <h1 className="mb-[.5rem] text-center text-white text-4xl font-semibold leading-[54px]">{title}</h1>
          <div className="flex justify-center items-center p-[1.3rem]">
              <Broadcast
                  streamKey={streamKey}
                  controls={{ autohide: 0, hotkeys: false, defaultVolume: 0.6 }}
                  aspectRatio="16to9"
                  objectFit="cover"
              />
          </div>
          <div className="flex justify-center items-center">

          </div>
      </section>
  );
}

export { MediaPlayer };