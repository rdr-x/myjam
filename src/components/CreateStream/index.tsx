'use client';
import { useCreateStream, Player } from '@livepeer/react';
import { FC, useEffect, useState, ReactNode, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import TextArea from '../TextArea';
import { useAtom } from 'jotai';
import { streamState, StreamObject } from "@/services/stream";

interface Props {
  children?: ReactNode
  title?: string
}

const CreateStream: FC<Props> = ({ children }) => {
  const [streamName, setStreamName] = useState<string>('')
  const router = useRouter();

  const {
    mutate: createStream,
    data: stream,
    status,
  } = useCreateStream({ name: streamName })

  useEffect(() => {
    if (!stream) return
    const { name, streamKey, id } = stream;
    router.push(`/stream/live?title=${name}&streamKey=${streamKey}&id=${id}`);
  }, [stream])

  return (
    <div className="pb-[32px] flex justify-center items-center w-full h-full">
      <div className="w-[311px] h-[337px] p-[27px] bg-black bg-opacity-10 rounded-xl backdrop-blur-[306px] flex-col justify-start items-start gap-[29px] inline-flex">
        <div className="text-white text-2xl font-semibold font-['Poppins'] leading-9">
          {streamName ? streamName : 'New JAM'}
        </div>
        <div className="w-[257px] h-[141px] px-6 py-3 bg-white bg-opacity-10 rounded-xl border border-gray-200 border-opacity-40 justify-start items-start gap-2.5 inline-flex">
          <TextArea
            fill
            placeholder="Stream name"
            className="!p-[0px] !bg-transparent !text-white text-sm font-normal !border-0 !ring-[0px]"
            textareaClass="!text-white !bg-transparent resize-none"
            onChange={(e) => setStreamName(e.target.value)}
          />
        </div>

        <div>
          <button
            className="w-[257px] h-12 px-6 bg-slate-100 rounded-[45px] justify-center items-center gap-2 inline-flex"
            disabled={status === 'loading' || !createStream}
            onClick={() => createStream?.()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M13.0003 16.25C14.7987 16.25 16.2395 14.7983 16.2395 13L16.2503 6.5C16.2503 4.70167 14.7987 3.25 13.0003 3.25C11.202 3.25 9.75033 4.70167 9.75033 6.5V13C9.75033 14.7983 11.202 16.25 13.0003 16.25ZM18.742 13C18.742 16.25 15.9903 18.525 13.0003 18.525C10.0103 18.525 7.25866 16.25 7.25866 13H5.41699C5.41699 16.705 8.36366 19.7492 11.917 20.28V23.8333H14.0837V20.28C17.637 19.76 20.5837 16.705 20.5837 13H18.742Z"
                fill="#F25555"
              />
            </svg>
            <div className="text-gray-900 text-lg font-semibold font-['Inter'] leading-7">
              Start JAMin
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export { CreateStream }
const CancelStream: FC<Props> = ({ title }) => {
  return (
    <div className="w-[311px] h-[238px] p-[2rem] relative bg-white bg-opacity-10 rounded-xl border border-white border-opacity-60 backdrop-blur-[206px] flex-col justify-start items-start inline-flex">
      <div className="w-6 h-6 relative"></div>
      <div className="text-white text-2xl font-semibold font-['Poppins'] leading-9">
        {title}
      </div>
      <div className="w-[257px] text-white text-sm font-medium font-['Poppins'] leading-[21px]">
        This is a description of my current JAM that I created
      </div>
      <div className="w-[257px] h-12 px-6 bg-rose-500 rounded-[45px] justify-center items-center gap-2 inline-flex">
        <div className="w-[26px] h-[26px] p-1.5 justify-center items-center flex">
          <div className="w-3.5 h-3.5 relative bg-black"></div>
        </div>
        <div className="text-gray-900 text-lg font-semibold font-['Inter'] leading-7">
          Stop JAMin
        </div>
      </div>
    </div>
  )
}
