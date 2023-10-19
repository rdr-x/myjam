'use client';
import { FC } from 'react'
import { Watch } from "@/components/Watch";
const StreamPage: FC = () => {
  return (
    <div className="flex justify-start items-center">
        <div className="w-[20vw]"></div>
        <Watch />
    </div>
  )
}

export default StreamPage
