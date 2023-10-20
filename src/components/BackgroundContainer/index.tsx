"use client";
import { FC, ReactNode } from "react";

const BackgroundContainer: FC<{ children: ReactNode }> = ({ children }) => {

    return (
        <div>
        <img src="/background.png" alt="background" className="static"/>
            {children}
        </div>
    );
}

export { BackgroundContainer };