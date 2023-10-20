'use client'
import { FC } from 'react'
import { STREAM_STATUS, Streams } from '@/services/stream'
import { formatNumber } from '@/utils/numbers'
import { useRouter } from 'next/navigation'
import { StreamFeatures } from '@/components/StreamFeatures'
import Button from '@/components/Button'

const StreamCard: FC<Streams> = ({
  streamer,
  audience,
  status,
  cost,
  description,
  id,
}) => {
  const router = useRouter()

  return (
    <div className="flex w-[22rem] h-[13rem] relative bg-white bg-opacity-10 rounded-xl shadow border border-white border-opacity-60 gap-1">
      <div className="flex start w-[4.5vw] m-[1rem]">
        <div className="bg-avatar w-[4rem] h-[4rem] bg-neutral-900 rounded-[51px]" />
      </div>
      <div className="flex-1 flex-col mt-[1rem] pr-[1rem]">
        <h1 className="text-white text-xl font-medium">{streamer}</h1>
        <span className="text-white text-xs font-normal ">{description}</span>
        <StreamFeatures status={status} audience={audience} />
        <Button
          fullWidth
          color="amber"
          onClick={() => {
            status === STREAM_STATUS.LIVE ? router.push(`/view/${id}`) : null
          }}
        >
          <p className="text-gray-900 text-sm font-semibold font-['Inter'] leading-tight">
            {status === STREAM_STATUS.LIVE
              ? `Join for ${cost} ETH`
              : 'Notify me'}
          </p>
        </Button>
      </div>
    </div>
  )
}

export { StreamCard }
