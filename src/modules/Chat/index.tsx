import { FC } from "react";

const Chat: FC = () => {
  return (
      <article className="column-1 w-[22.5vw] h-[53rem] p-[2.1rem] bg-white bg-opacity-10 rounded-xl border border-white backdrop-blur-[126px]">
          <div className="text-white text-2xl font-semibold leading-9">
              Push Protocol Notifications
          </div>
          <div className="flex gap-3 items-center">
              <div className="text-white text-xs font-medium leading-[18px]">54k Listening</div>
              <div className="flex gap-1 items-center">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <div className="text-white text-xs font-medium font-['Poppins']">Live now!</div>
              </div>
          </div>
      </article>
  );
}

export { Chat };