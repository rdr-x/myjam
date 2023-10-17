import {FC, ReactNode} from "react";
import { Broadcast } from '@livepeer/react';

interface PlayerProps {
    children?: ReactNode;
    streamKey: string | undefined;
}

const AudioPlayer: FC<PlayerProps> = ({
    children,
    streamKey
                                      }) => {
  return (
      <Broadcast
          title={''}
          streamKey={streamKey}
          /*controls={}
          displayMediaOptions={}*/
      />
  );
}

export { AudioPlayer };