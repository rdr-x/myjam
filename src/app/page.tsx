"use client";
import { ReactNode } from "react";

export default function Home({ children }: {
    children: ReactNode
}) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            { children }
        </main>
    );
}
