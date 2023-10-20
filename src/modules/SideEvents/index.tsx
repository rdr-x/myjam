import {FC} from 'react';
import {retrieveIcon} from '@/modules/Icons';
import {StreamFeatures} from "@/components/StreamFeatures";
import {STREAM_STATUS} from "@/services/stream";

const SideEvents: FC = () => {
    return (
        <article className="w-[20vw] h-[100vh] pl-8 pr-[34px] pt-[164px] pb-[149px] bg-white bg-opacity-10 backdrop-blur-[126px] flex-col justify-end items-start gap-[60px]">
            <div className="self-stretch h-[466px] relative">
                <div className="w-[342px] h-[90px]">
                    <div className="flex flex-col w-[237px] h-[78px] gap-1">
                        <div className="text-white text-4xl font-semibold leading-[54px]">JAMin Now</div>
                        <div className="text-white text-base font-normal leading-normal">Other Channels Jammin Now</div>
                        <div className="bg-white w-full h-[.15rem] flex-shrink" />
                    </div>
                    {names.map((name,i) => <JAMinNow userName={name} />)}
                </div>
            </div>
            <div className="w-[342px] h-[278px] relative">
                <div className="w-[340px] h-[73px] left-[2px] top-[111px] absolute flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="w-[244px] text-white text-xl font-medium font-['Inter']">Taylor J</div>
                    <div className="w-[216px] h-[18px] relative">
                        <div className="left-0 top-0 absolute text-white text-xs font-medium leading-[18px]">8k Followers</div>
                        <div className="w-[124px] h-[18px] left-[92px] top-0 absolute">
                            <div className="left-[10px] top-0 absolute text-white text-xs font-medium">9:00PM 10-24-2023</div>
                            <div className="w-1.5 h-1.5 left-0 top-[6px] absolute bg-stone-300 rounded-full" />
                        </div>
                    </div>
                    <div className="w-[339px] h-px relative" />
                </div>
                <div className="w-[340px] h-[73px] left-[2px] top-[205px] absolute flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="w-[244px] text-white text-xl font-medium font-['Inter']">Gogos and The Bongos</div>
                    <div className="w-[220px] h-[18px] relative">
                        <div className="left-0 top-0 absolute text-white text-xs font-medium leading-[18px]">12k Followers</div>
                        <div className="w-32 h-[18px] left-[92px] top-0 absolute">
                            <div className="left-[10px] top-0 absolute text-white text-xs font-medium">10:30PM 10-24-2023</div>
                            <div className="w-1.5 h-1.5 left-0 top-[6px] absolute bg-stone-300 rounded-full" />
                        </div>
                    </div>
                </div>
                <div className="w-[340px] h-[90px] left-0 top-0 absolute">
                    <div className="left-[2px] top-[54px] absolute text-white text-base font-normal leading-normal">Jam sessions on the way</div>
                    <div className="left-0 top-0 absolute text-white text-4xl font-semibold leading-[54px]">Upcoming JAM</div>
                </div>
            </div>
        </article>
    );
}

type JAMinNowProps = {
    userName: string;
}
const JAMinNow: FC<JAMinNowProps> = ({userName}) => {
    return (
        <div className="flex flex-col justify-start items-start w-[340px] h-[73px] gap-2.5">
            <div className="flex space-x-6 w-inherit h-[18px] relative">
                <div className="flex flex-col">
                    <div className="w-inherit text-white text-xl font-medium font-['Inter']">{userName}</div>
                    <StreamFeatures audience={54000} status={STREAM_STATUS.LIVE}/>
                </div>
                <div className="flex w-[32px] h-[32px] justify-center items-center mt-[.5rem]">
                    {retrieveIcon("Play")}
                </div>
            </div>
        </div>
    );
}

const names = [
    "Ashley Torez",
    "Taylor J",
    "Gogos and The Bongos"
]

export { SideEvents };