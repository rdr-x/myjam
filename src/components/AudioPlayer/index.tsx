import { FC } from "react";
import { Broadcast } from '@livepeer/react';

const AudioPlayer: FC = () => {
  return (
      <Broadcast
          streamKey={process.env.LIVEPEER_API_KEY}
      />
  );
}

export { AudioPlayer };