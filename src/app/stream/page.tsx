'use client'
import { FC, ComponentProps, useState, useEffect } from 'react'
import { Stream, Player } from '@livepeer/react'
import { CreateStream } from '@/components/CreateStream'

const CreatePage: FC<ComponentProps<any>> = ({ children }) => {
  return (
    <div className="bg-img h-[100vh] w-[100vw]">
      <div className="flex justify-center items-center h-full w-full">
        <CreateStream />
      </div>
    </div>
  )
}

export default CreatePage
