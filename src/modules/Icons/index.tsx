import { ReactNode } from "react";

interface Icons {
    label: string;
    icon: ReactNode;
}

const svg: Icons[] = [
    {
        label: "Play",
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none">
                <path d="M0 0L17 9.5L0 19V0Z" fill="white"/>
            </svg>
    },
    {
        label: "Headphones",
        icon:
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
            >
                <path
                    d="M1 14.3333V9C1 6.87827 1.84285 4.84344 3.34315 3.34315C4.84344 1.84285 6.87827 1 9 1C11.1217 1 13.1566 1.84285 14.6569 3.34315C16.1571 4.84344 17 6.87827 17 9V14.3333"
                    stroke="white"
                    stroke-width="1.48045"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M17 15.222C17 15.6935 16.8127 16.1457 16.4793 16.4791C16.1459 16.8125 15.6937 16.9998 15.2222 16.9998H14.3333C13.8618 16.9998 13.4097 16.8125 13.0763 16.4791C12.7429 16.1457 12.5556 15.6935 12.5556 15.222V12.5554C12.5556 12.0839 12.7429 11.6317 13.0763 11.2983C13.4097 10.9649 13.8618 10.7776 14.3333 10.7776H17V15.222ZM1 15.222C1 15.6935 1.1873 16.1457 1.5207 16.4791C1.8541 16.8125 2.30628 16.9998 2.77778 16.9998H3.66667C4.13816 16.9998 4.59035 16.8125 4.92375 16.4791C5.25714 16.1457 5.44444 15.6935 5.44444 15.222V12.5554C5.44444 12.0839 5.25714 11.6317 4.92375 11.2983C4.59035 10.9649 4.13816 10.7776 3.66667 10.7776H1V15.222Z"
                    fill="white"
                    stroke="white"
                    stroke-width="1.48045"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
    }
]

export const retrieveIcon = (name: string) => {
    return svg.filter(({ label }) => label === name)[0].icon;
}