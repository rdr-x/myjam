'use client';
import { FC } from 'react'
import { Watch } from "@/components/Watch";
import {SideEvents} from "@/modules/SideEvents";
const StreamPage: FC = () => {
  return (
    <div className="flex lg:flex-row sm:flex-col justify-start items-center">
        <SideEvents />
        <Watch />
    </div>
  )
}

export default StreamPage
