import { FC } from "react";
import Button from "@/components/Button";
import Streams from "@/modules/streams";
const LandingPage: FC = () => {

    return (
        <div className="flex flex-col justify-left items-center w-[100vw] h-[100vh]">
            <div className="flex justify-left items-center w-[100vw] h-[100vh]">
                <div>
                    <img src="/leafs.png" alt="leafs" className="sm:w-full sm:h-full object-cover" />
                </div>
                <div className="flex sm:flex-row flex-col justify-center gap-[3rem]">
                    <div className="flex flex-col justify-center w-[22rem] p-0">
                        <h1 className="text-white text-8xl font-semibold leading-[9rem]">MyJAM</h1>
                        <div className="bg-white w-[22rem] h-[.25rem] flex-shrink" />
                        <h2 className="text-white text-[1.6rem] font-bold leading-[53.94px]">STREAM FROM ANYWHERE</h2>
                        <Button
                            fullWidth
                            color="amber"
                        >
                            <p className="text-black text-[2rem] font-semibold leading-7">Launch App</p>
                        </Button>
                    </div>
                    <div>
                        <img src="/speaker.png" alt="speaker" className="sm:w-full sm:h-full object-cover" />
                    </div>
                </div>
            </div>
            <div>
                <img src="/greenbar.png" alt="greenbar" className="sm:w-full sm:h-full object-cover" />
            </div>
            <Streams />
        </div>
    );
}

export { LandingPage };