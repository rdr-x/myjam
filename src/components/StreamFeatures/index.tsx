import { FC } from "react";
import { formatNumber } from "@/utils/numbers";
import { STREAM_STATUS } from "@/services/stream";
import {retrieveIcon} from "@/modules/Icons";

type StreamFeaturesProps = {
    audience: number;
    status: STREAM_STATUS;
}

const StreamFeatures: FC<StreamFeaturesProps> = ({ status, audience }) => {
    return (
        <div className="flex items-center">
            <div className="flex items-center gap-[0.5rem]">
                {retrieveIcon("Headphones")}
                <p className="text-white text-sm font-medium leading-[21px]">
                    {formatNumber(audience)} Listening
                </p>
            </div>
            <div className="flex items-center gap-[0.5rem] ml-[1rem]">
                <div
                    className={`${
                        status === STREAM_STATUS.LIVE ? 'bg-rose-500' : 'bg-white'
                    } w-1.5 h-1.5 rounded-full`}
                />
                <p className="text-white text-sm font-medium">{status}</p>
            </div>
        </div>
    );
}

export { StreamFeatures };