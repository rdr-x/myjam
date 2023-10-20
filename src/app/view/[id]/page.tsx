'use client';
import { FC } from 'react'
import { Watch } from "@/components/Watch";
import {SideEvents} from "@/modules/SideEvents";
const StreamPage: FC = () => {
  return (
    <div className="flex justify-start items-center">
        <SideEvents />
        <Watch />
    </div>
  )
}

export default StreamPage
