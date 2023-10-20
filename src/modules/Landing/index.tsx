'use client'
import { FC } from 'react'
import Button from '@/components/Button'
import Streams from '@/modules/streams'
const LandingPage: FC = () => {
  const scrollDown = () => {
    if (typeof window === undefined) return
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col justify-center items-center w-[100vw] v-[100vh] mt-[-5rem]">
      <section className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center w-max-[1928px] h-[92vh]">
          <div>
            <img
              src="/leafs.png"
              alt="leafs"
              className="sm:w-full sm:h-full object-cover !z-0"
              draggable={false}
              unselectable="on"
            />
          </div>
          <div className="flex sm:flex-row flex-col justify-center gap-[3rem]">
            <div className="flex flex-col justify-center w-[22rem] p-0">
              <h1 className="text-white text-8xl font-semibold leading-[9rem]">
                MyJAM
              </h1>
              <div className="bg-white w-[22rem] h-[.25rem] flex-shrink" />
              <h2 className="text-white text-[1.6rem] font-bold leading-[53.94px]">
                STREAM FROM ANYWHERE
              </h2>
              <Button fullWidth color="amber" onClick={scrollDown}>
                <p className="text-black text-[2rem] font-semibold leading-7">
                  Launch App
                </p>
              </Button>
            </div>
            <div className="mb-[-5rem]">
              <img
                src="/speaker.png"
                alt="speaker"
                className="sm:w-full sm:h-full object-cover !z-0"
                draggable={false}
                unselectable="on"
              />
            </div>
          </div>
        </div>
        <div className="stick shrink-0 w-full h-[5rem] bg-gradient-to-b from-green-950 via-gray-800 to-teal-950 rounded-[20px] shadow border-2 border-zinc-600"></div>
      </section>
      <Streams />
    </div>
  )
}

export { LandingPage }
